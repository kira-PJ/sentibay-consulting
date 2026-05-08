import { NextRequest, NextResponse } from "next/server";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { randomUUID } from "crypto";

const region = process.env.APP_AWS_REGION ?? "us-east-1";

const dynamo = DynamoDBDocumentClient.from(
  new DynamoDBClient({ region })
);
const ses = new SESClient({ region });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message, serviceType } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const id = randomUUID();
    const createdAt = new Date().toISOString();

    // Log env vars (values hidden) so we can confirm they are set
    console.log("ENV CHECK:", {
      region,
      table: process.env.DYNAMODB_TABLE_INQUIRIES ?? "NOT SET",
      sesFrom: process.env.SES_FROM_EMAIL ?? "NOT SET",
    });

    // Save to DynamoDB
    try {
      await dynamo.send(
        new PutCommand({
          TableName: process.env.DYNAMODB_TABLE_INQUIRIES,
          Item: { id, name, email, company, message, serviceType, createdAt, status: "new" },
        })
      );
      console.log("DynamoDB write succeeded");
    } catch (dbErr) {
      console.error("DynamoDB error:", dbErr);
      return NextResponse.json(
        { error: "Database error", detail: (dbErr as Error).message },
        { status: 500 }
      );
    }

    // Send email via SES
    try {
      await ses.send(
        new SendEmailCommand({
          Source: process.env.SES_FROM_EMAIL!,
          Destination: {
            ToAddresses: [process.env.SES_NOTIFY_EMAIL ?? process.env.SES_FROM_EMAIL!],
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
      // SES failure should not block the response — inquiry is already saved
      console.error("SES error:", sesErr);
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
