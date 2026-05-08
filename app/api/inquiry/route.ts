import { NextRequest, NextResponse } from "next/server";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message, serviceType } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Read env vars inside the handler so they are available at runtime
    const region = process.env.APP_AWS_REGION ?? "us-west-2";
    const accessKeyId = process.env.APP_AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.APP_AWS_SECRET_ACCESS_KEY;
    const tableName = process.env.DYNAMODB_TABLE_INQUIRIES;
    const fromEmail = process.env.SES_FROM_EMAIL;

    console.log("ENV RUNTIME CHECK:", {
      region,
      hasKey: !!accessKeyId,
      hasSecret: !!secretAccessKey,
      table: tableName ?? "NOT SET",
      sesFrom: fromEmail ?? "NOT SET",
    });

    if (!accessKeyId || !secretAccessKey) {
      return NextResponse.json({ error: "AWS credentials not configured" }, { status: 500 });
    }

    const credentials = { accessKeyId, secretAccessKey };
    const clientConfig = { region, credentials };

    const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient(clientConfig));
    const ses = new SESClient(clientConfig);

    const id = randomUUID();
    const createdAt = new Date().toISOString();

    // Save to DynamoDB
    try {
      await dynamo.send(
        new PutCommand({
          TableName: tableName,
          Item: { id, name, email, company, message, serviceType, createdAt, status: "new" },
        })
      );
      console.log("DynamoDB write succeeded, id:", id);
    } catch (dbErr) {
      console.error("DynamoDB error:", dbErr);
      return NextResponse.json(
        { error: "Database error", detail: (dbErr as Error).message },
        { status: 500 }
      );
    }

    // Send email via SES — failure does not block the response
    if (fromEmail) {
      try {
        await ses.send(
          new SendEmailCommand({
            Source: fromEmail,
            Destination: {
              ToAddresses: [process.env.SES_NOTIFY_EMAIL ?? fromEmail],
            },
            Message: {
              Subject: { Data: `New Consulting Inquiry from ${name}` },
              Body: {
                Text: {
                  Data: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nService: ${serviceType || "N/A"}\n\n${message}`,
                },
              },
            },
          })
        );
        console.log("SES email sent");
      } catch (sesErr) {
        console.error("SES error (non-blocking):", sesErr);
      }
    }

    return NextResponse.json({ success: true, id });

  } catch (err) {
    console.error("Unhandled error in /api/inquiry:", err);
    return NextResponse.json(
      { error: "Internal server error", detail: (err as Error).message },
      { status: 500 }
    );
  }
}
