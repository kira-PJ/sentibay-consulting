import { NextRequest, NextResponse } from "next/server";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { randomUUID } from "crypto";

const dynamo = DynamoDBDocumentClient.from(
  new DynamoDBClient({ region: process.env.AWS_REGION })
);
const ses = new SESClient({ region: process.env.AWS_REGION });

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, message, serviceType } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const id = randomUUID();
  const createdAt = new Date().toISOString();

  // Save to DynamoDB
  await dynamo.send(
    new PutCommand({
      TableName: process.env.DYNAMODB_TABLE_INQUIRIES,
      Item: { id, name, email, company, message, serviceType, createdAt, status: "new" },
    })
  );

  // Notify via SES — in sandbox mode, both Source and Destination must be verified emails
  await ses.send(
    new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL!,
      Destination: { ToAddresses: [process.env.SES_NOTIFY_EMAIL ?? process.env.SES_FROM_EMAIL!] },
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

  return NextResponse.json({ success: true, id });
}
