import { NextRequest, NextResponse } from "next/server";
import {
  BedrockAgentRuntimeClient,
  InvokeAgentCommand,
} from "@aws-sdk/client-bedrock-agent-runtime";

const AGENT_ID = process.env.BEDROCK_AGENT_ID || "";
const AGENT_ALIAS_ID = process.env.BEDROCK_AGENT_ALIAS_ID || "";

function getClient() {
  const region = process.env.BEDROCK_REGION || "us-east-1";
  const accessKeyId = process.env.APP_AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.APP_AWS_SECRET_ACCESS_KEY;

  const config: Record<string, unknown> = { region };
  if (accessKeyId && secretAccessKey) {
    config.credentials = { accessKeyId, secretAccessKey };
  }

  return new BedrockAgentRuntimeClient(config);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, session_id } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!AGENT_ID || !AGENT_ALIAS_ID) {
      // Return a mock response if agent is not configured yet
      // This lets you demo the frontend without a live Bedrock agent
      return NextResponse.json(getMockResponse(message, session_id));
    }

    const command = new InvokeAgentCommand({
      agentId: AGENT_ID,
      agentAliasId: AGENT_ALIAS_ID,
      sessionId: session_id || crypto.randomUUID(),
      inputText: message,
      enableTrace: true,
    });

    const client = getClient();
    const response = await client.send(command);

    let fullResponse = "";
    const citations: { document: string; uri: string }[] = [];
    const trace: { type: string; text: string }[] = [];

    if (response.completion) {
      for await (const event of response.completion) {
        if (event.chunk) {
          if (event.chunk.bytes) {
            const text = new TextDecoder().decode(event.chunk.bytes);
            fullResponse += text;
          }

          if (event.chunk.attribution) {
            for (const citation of event.chunk.attribution.citations || []) {
              for (const ref of citation.retrievedReferences || []) {
                const location = ref.location;
                if (location?.s3Location) {
                  const uri = location.s3Location.uri || "";
                  const document = uri.split("/").pop() || "Unknown document";
                  citations.push({ document, uri });
                }
              }
            }
          }
        }

        if (event.trace?.trace) {
          const traceData = event.trace.trace;

          if (traceData.orchestrationTrace) {
            const orch = traceData.orchestrationTrace;

            if (orch.rationale) {
              trace.push({
                type: "thinking",
                text: orch.rationale.text || "Reasoning...",
              });
            }

            if (orch.invocationInput) {
              const actionInput =
                orch.invocationInput.actionGroupInvocationInput;
              const kbInput =
                orch.invocationInput.knowledgeBaseLookupInput;

              if (actionInput) {
                trace.push({
                  type: "action",
                  text: `Calling: ${actionInput.actionGroupName} → ${actionInput.apiPath || "execute"}`,
                });
              } else if (kbInput) {
                trace.push({
                  type: "knowledge_base",
                  text: `Searching knowledge base: "${kbInput.text}"`,
                });
              }
            }
          }
        }
      }
    }

    // Deduplicate citations
    const uniqueCitations = citations.filter(
      (c, i, arr) => arr.findIndex((x) => x.document === c.document) === i
    );

    return NextResponse.json({
      response: fullResponse,
      citations: uniqueCitations,
      trace,
      session_id: session_id || crypto.randomUUID(),
    });
  } catch (error: unknown) {
    console.error("Bedrock chat error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to process request", details: errorMessage },
      { status: 500 }
    );
  }
}

/**
 * Mock responses for demoing the frontend without a live Bedrock agent.
 * Remove this once BEDROCK_AGENT_ID and BEDROCK_AGENT_ALIAS_ID are configured.
 */
function getMockResponse(message: string, sessionId: string) {
  const lowerMessage = message.toLowerCase();

  // Competitor question — guardrail simulation
  if (
    lowerMessage.includes("safaricom") ||
    lowerMessage.includes("microsoft") ||
    lowerMessage.includes("competitor")
  ) {
    return {
      response:
        "I'm sorry, I can only help with questions related to TechCorp's internal policies, products, and services. Is there something else I can help you with?",
      citations: [],
      trace: [
        { type: "thinking", text: "Checking if this is an allowed topic..." },
        { type: "thinking", text: "Guardrail triggered: denied topic (competitor information)" },
      ],
      session_id: sessionId,
    };
  }

  // Leave balance check
  if (lowerMessage.includes("leave") && (lowerMessage.includes("balance") || lowerMessage.includes("how many") || lowerMessage.includes("remaining"))) {
    return {
      response:
        "Here's your current leave balance:\n\n📊 **Leave Summary (as of today)**\n\n• Annual Leave: 13 days remaining (8 used of 21 total)\n• Sick Leave: 8 days remaining (2 used of 10 total)\n\nYou have plenty of annual leave available. Would you like to submit a leave request?",
      citations: [],
      trace: [
        { type: "thinking", text: "The user wants to check their leave balance. I'll call the HR system." },
        { type: "action", text: "Calling: HRActions → /check-leave-balance" },
      ],
      session_id: sessionId,
    };
  }

  // Leave request
  if (lowerMessage.includes("leave") && (lowerMessage.includes("request") || lowerMessage.includes("take") || lowerMessage.includes("off") || lowerMessage.includes("submit"))) {
    return {
      response:
        "I'd like to help you submit a leave request. Let me confirm the details:\n\n📋 **Leave Request Summary:**\n• Type: Annual Leave\n• Start: Monday, July 21, 2026\n• End: Wednesday, July 23, 2026\n• Days: 3\n• Approver: Jane Muthoni (Line Manager)\n\nWould you like me to go ahead and submit this request?",
      citations: [],
      trace: [
        { type: "thinking", text: "The user wants to request leave. I should confirm details before submitting." },
        { type: "action", text: "Calling: HRActions → /check-leave-balance (checking availability first)" },
        { type: "thinking", text: "User has 13 days remaining. 3 days requested is fine. Confirming before submission." },
      ],
      session_id: sessionId,
    };
  }

  // IT ticket / wifi / laptop issue
  if (lowerMessage.includes("ticket") || lowerMessage.includes("wifi") || lowerMessage.includes("laptop") || lowerMessage.includes("monitor")) {
    return {
      response:
        "I've created an IT support ticket for you:\n\n🎫 **Ticket Created Successfully**\n\n• Ticket ID: IT-74829\n• Issue: " + message + "\n• Priority: Medium\n• Assigned to: IT Support Team\n• Estimated response: Within 24 hours\n\nThe IT team will reach out to you within 24 hours. If this becomes urgent, let me know and I can escalate the priority.",
      citations: [],
      trace: [
        { type: "thinking", text: "The user has an IT issue. I should create a support ticket." },
        { type: "action", text: "Calling: ITSupport → /create-ticket" },
      ],
      session_id: sessionId,
    };
  }

  // Password
  if (lowerMessage.includes("password")) {
    return {
      response:
        "Here's the password reset process at TechCorp:\n\n🔐 **Password Reset Steps:**\n\n1. Go to the IT Self-Service Portal at https://it.techcorp.internal\n2. Click \"Forgot Password\" or \"Reset Password\"\n3. Enter your employee email address\n4. You'll receive a reset link within 2 minutes\n5. Create a new password following these requirements:\n   - Minimum 12 characters\n   - At least 1 uppercase, 1 lowercase, 1 number, 1 special character\n   - Cannot reuse your last 5 passwords\n\n⚠️ **Note:** Passwords expire every 90 days. You'll get a reminder email 7 days before expiration.\n\nIf you're locked out and can't access email, contact IT Support directly or I can create a ticket for you.",
      citations: [{ document: "IT_Security_Handbook.pdf", uri: "s3://bedrock-demo-kb/documents/IT_Security_Handbook.pdf" }],
      trace: [
        { type: "thinking", text: "The user is asking about password reset. Let me search the Knowledge Base." },
        { type: "knowledge_base", text: 'Searching knowledge base: "password reset process procedure"' },
      ],
      session_id: sessionId,
    };
  }

  // Annual leave policy
  if (lowerMessage.includes("annual leave") || lowerMessage.includes("leave policy")) {
    return {
      response:
        "Here's a summary of TechCorp's annual leave policy:\n\n📝 **Annual Leave Policy**\n\n• **Entitlement:** 21 working days per year (full-time employees)\n• **First year:** Pro-rated from your start date\n• **Carry-over:** Maximum 5 unused days can be carried to next year\n• **Notice required:** At least 2 weeks in advance for leave up to 5 days\n• **Extended leave (10+ days):** Requires VP approval in addition to line manager\n• **Public holidays:** 10 gazetted public holidays observed separately\n\n💡 **Important:** Leave requests over 10 consecutive days require VP approval, not just your line manager.\n\nWould you like to check your current balance or submit a request?",
      citations: [{ document: "HR_Leave_Policy.pdf", uri: "s3://bedrock-demo-kb/documents/HR_Leave_Policy.pdf" }],
      trace: [
        { type: "thinking", text: "This is a policy question. I'll search the Knowledge Base for leave policy information." },
        { type: "knowledge_base", text: 'Searching knowledge base: "annual leave policy entitlement"' },
      ],
      session_id: sessionId,
    };
  }

  // Prompt injection attempt
  if (lowerMessage.includes("ignore") && lowerMessage.includes("instruction")) {
    return {
      response:
        "I'm sorry, I can only help with questions related to TechCorp's internal policies, products, and services. Is there something else I can help you with?",
      citations: [],
      trace: [
        { type: "thinking", text: "Detected potential prompt injection attempt." },
        { type: "thinking", text: "Guardrail triggered: prompt attack filter blocked this input." },
      ],
      session_id: sessionId,
    };
  }

  // Default / general question
  return {
    response:
      "I can help you with several things at TechCorp:\n\n• 📋 **Company Policies** — Leave, expenses, IT security, code of conduct\n• 🏖️ **Leave Management** — Check balance, submit requests\n• 🎫 **IT Support** — Create tickets, check ticket status\n• 📦 **Product Information** — Product catalog, pricing, availability\n\nTry asking me something specific, like \"What's the annual leave policy?\" or \"Create an IT ticket for my broken monitor.\"\n\nHow can I help you today?",
    citations: [],
    trace: [
      { type: "thinking", text: "General query. Providing capability overview to guide the user." },
    ],
    session_id: sessionId,
  };
}
