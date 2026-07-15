# Build Intelligent Applications with Amazon Bedrock
## Speaker Notes — Pauline Namwakira
## Duration: 1 Hour | Format: Talk + Live Demo

---

## SESSION OVERVIEW

This is a 1-hour session aimed at developers, architects, and tech enthusiasts who want to go beyond the Bedrock playground. We show how organizations are actually using Bedrock to build production chatbots with Knowledge Bases, Agents that take real actions, and Guardrails that keep everything safe. The session culminates in a live demo of a custom chatbot frontend connected to Bedrock — not the console, but a real application.

**Audience:** Developers, solutions architects, tech leads, students with some AWS familiarity. Mixed levels.

**Key Message:** Bedrock isn't just a playground for prompting models. It's a platform for building intelligent applications that reason, retrieve, act, and stay safe — all fully managed.

---

## SESSION TIMELINE

| Time | Section | Format |
|------|---------|--------|
| 0:00 - 0:05 | Welcome + The Problem We're Solving | Talk |
| 0:05 - 0:15 | What is Bedrock? (Beyond the Playground) | Talk + Visuals |
| 0:15 - 0:25 | Knowledge Bases — Give Your AI Real Data | Talk + Quick Console Demo |
| 0:25 - 0:35 | Agents — Let Your AI Take Action | Talk + Console Demo |
| 0:35 - 0:40 | Guardrails — Keep It Safe and On-Brand | Talk + Quick Demo |
| 0:40 - 0:55 | LIVE DEMO: Custom Chatbot Frontend (The Full Picture) | Hands-on Demo |
| 0:55 - 1:00 | Recap + Real-World Use Cases + Resources | Wrap-up |

---

## SECTION 1: WELCOME + THE PROBLEM WE'RE SOLVING (5 min)

### Speaker Notes:

"Good morning/afternoon everyone. I'm Pauline Namwakira — AWS Champion Authorized Instructor, 13x AWS Certified, and I build AI solutions with AWS for organizations across East Africa.

Let me start with a problem every organization faces today:

You have data. Lots of it. Internal documents, policies, product catalogs, customer FAQs, training materials. Your employees spend HOURS searching through SharePoint, Confluence, Google Drive, or email trying to find answers that already exist somewhere in your company.

Now imagine this: a chatbot that knows YOUR data. Not generic ChatGPT that hallucinates about your company. A chatbot that reads your actual documents, answers accurately, cites its sources, and can even TAKE ACTIONS — like filing a ticket, checking order status, or booking a meeting.

That's what we're building today with Amazon Bedrock. Not in the playground. Not a toy. A real application that organizations are deploying right now."

**🎯 Analogy:** "Think of it like this. ChatGPT is like hiring a brilliant consultant who has never read a single document about your company. They'll give you confident answers, but half of them will be wrong because they're guessing. Bedrock with a Knowledge Base is like hiring that same brilliant consultant but FIRST giving them all your company documents to study. Now they answer from YOUR data. That's the difference."

---

## SECTION 2: WHAT IS AMAZON BEDROCK? — BEYOND THE PLAYGROUND (10 min)

### Speaker Notes:

"Amazon Bedrock is a fully managed service that gives you access to high-performing foundation models from Amazon, Anthropic, Meta, Mistral, Cohere, and others — all through a single API.

But here's what most people miss: Bedrock is NOT just a place to chat with Claude or Titan. That's the playground. That's where you start. But the real power of Bedrock is what sits AROUND the models."

**The Bedrock Stack (draw this or show a slide):**

```
┌─────────────────────────────────────────────────┐
│              YOUR APPLICATION                     │
│         (Custom Frontend / API / App)            │
├─────────────────────────────────────────────────┤
│              GUARDRAILS                           │
│    (Content filtering, PII, topic blocking)      │
├─────────────────────────────────────────────────┤
│              AGENTS                               │
│    (Orchestration, tool use, multi-step tasks)   │
├─────────────────────────────────────────────────┤
│           KNOWLEDGE BASES                         │
│    (RAG — your data, your documents, your truth) │
├─────────────────────────────────────────────────┤
│          FOUNDATION MODELS                        │
│  (Claude, Titan, Llama, Mistral, Command R+)     │
├─────────────────────────────────────────────────┤
│          AMAZON BEDROCK (Fully Managed)           │
│    No infrastructure. No GPUs. No fine-tuning    │
│    headaches. Just API calls.                    │
└─────────────────────────────────────────────────┘
```

**Why Bedrock vs. Rolling Your Own:**

| Do It Yourself | Amazon Bedrock |
|----------------|----------------|
| Provision GPU instances (expensive) | Serverless — pay per token |
| Manage model weights, versions, updates | Models always up to date |
| Build your own RAG pipeline from scratch | Knowledge Bases — managed RAG |
| Build your own orchestration logic | Agents — managed orchestration |
| Build content filtering from scratch | Guardrails — managed safety |
| Worry about model deprecation | Switch models with one line change |

**🎯 Analogy:** "Building AI without Bedrock is like building a house by making your own bricks. You CAN do it. But why would you? Bedrock gives you pre-made, tested, quality bricks. You just design the house."

**Key Point — Model Choice:**

"One of the biggest advantages of Bedrock is model flexibility. Today you might use Claude 3.5 Sonnet. Tomorrow Anthropic releases Claude 4 Opus. You change ONE parameter in your API call and you're on the new model. No retraining. No infrastructure changes. No vendor lock-in at the model layer.

This is why companies choose Bedrock over going directly to OpenAI or Anthropic's API — you get the models PLUS the entire managed platform around them."

**Models Available (as of mid-2026):**
- Anthropic Claude (3.5 Sonnet, 3.5 Haiku, Opus, Claude 4)
- Amazon Titan (Text, Embeddings, Image)
- Meta Llama (3.1, 3.2, 3.3)
- Mistral (Large, Small)
- Cohere (Command R, Command R+)
- AI21 Labs (Jamba)
- Stability AI (image generation)

"You pick the model that fits your use case. Need cheap and fast? Haiku. Need deep reasoning? Opus. Need on-premise compatible? Llama. Bedrock gives you the menu."

---

## SECTION 3: KNOWLEDGE BASES — GIVE YOUR AI REAL DATA (10 min)

### Speaker Notes:

"Now let's talk about the feature that transforms Bedrock from a generic chatbot into YOUR chatbot: Knowledge Bases.

**The Problem with Plain LLMs:**

Large Language Models are trained on general internet data. They don't know:
- Your company's internal policies
- Your product catalog and pricing
- Your HR handbook
- Your customer support procedures
- Your latest documentation

If you ask a plain LLM about your company, it will either say 'I don't know' or — worse — it will HALLUCINATE a confident-sounding but completely wrong answer."

**🎯 Analogy:** "Imagine hiring a new employee on their first day and asking them 'What's our refund policy?' They've never read the handbook. They'll either admit they don't know, or they'll make something up to sound helpful. That's a plain LLM. A Knowledge Base is like making that new employee read ALL your documentation before answering a single question."

**What is RAG? (Retrieval Augmented Generation)**

"RAG is the technique behind Knowledge Bases. Here's how it works in plain English:

1. **You upload your documents** — PDFs, Word docs, web pages, Confluence, SharePoint, S3 files
2. **Bedrock chunks and indexes them** — breaks them into small pieces, creates embeddings (mathematical representations)
3. **User asks a question** — 'What's our return policy for electronics?'
4. **Bedrock SEARCHES your documents first** — finds the most relevant chunks
5. **Sends those chunks + the question to the LLM** — 'Based on THESE specific documents, answer this question'
6. **LLM generates an answer grounded in YOUR data** — with citations pointing to the exact source"

**🎯 Analogy:** "RAG is like an open-book exam. Instead of asking the student to recall everything from memory (which leads to errors), you give them the textbook and say 'find the answer in here.' The answer is grounded in real information, not guesswork."

**Supported Data Sources (Bedrock Knowledge Bases, 2026):**
- Amazon S3 (most common — dump your PDFs, docs, text files here)
- Web Crawler (point it at your documentation site, it crawls and indexes)
- Confluence (direct connector)
- SharePoint (direct connector)
- Salesforce (direct connector)
- Custom data sources via Lambda

**Vector Stores (where the indexed data lives):**
- Amazon OpenSearch Serverless (default, fully managed)
- Amazon Aurora PostgreSQL (pgvector)
- Pinecone
- Redis Enterprise Cloud
- MongoDB Atlas

**🗣️ What to say:** "For most of you getting started, the pattern is simple: throw your documents in an S3 bucket, create a Knowledge Base in Bedrock, point it at that bucket, and within minutes you have a chatbot that answers from your data. That's it. No ML expertise. No infrastructure."

### QUICK CONSOLE DEMO: Knowledge Base (5 min of the 10)

**What to show:**
1. Open Bedrock Console → Knowledge Bases → Show one you've pre-created
2. Show the data source (S3 bucket with sample documents)
3. Show the vector store configuration
4. Test it in the console — ask a question, show it retrieves relevant chunks
5. HIGHLIGHT: Show the citations — "See? It tells you exactly which document and which page the answer came from"

**🗣️ During demo:** "Notice the citations at the bottom. This is crucial for enterprise use. When your finance team asks 'What's the policy on expense approvals over $5000?' they don't just want an answer — they want to see WHERE that answer came from. Knowledge Bases gives you that automatically."

---

## SECTION 4: AGENTS — LET YOUR AI TAKE ACTION (10 min)

### Speaker Notes:

"Knowledge Bases let your AI ANSWER questions from your data. But what if you want your AI to DO things? Not just answer 'What's the status of order #4521?' but actually GO CHECK the order system and tell you?

That's what Bedrock Agents do. They give your AI the ability to REASON and ACT."

**The Concept:**

"A Bedrock Agent is an AI that can:
1. **Understand** the user's request (natural language)
2. **Plan** what steps it needs to take
3. **Execute** those steps by calling APIs/tools you define
4. **Combine** results from multiple steps
5. **Respond** with a coherent answer

It's not just a chatbot anymore. It's an assistant that can interact with your systems."

**🎯 Analogy:** "A Knowledge Base is like a librarian who can FIND information for you. An Agent is like a personal assistant who can find information AND take action — book your flight, send that email, update that spreadsheet, check your calendar. The librarian reads. The assistant DOES."

**🎯 Analogy 2:** "Think of a Bedrock Agent like a customer service representative. When you call your bank and say 'I want to transfer money from savings to checking,' the rep doesn't just READ you information — they actually DO the transfer. They have access to the banking system. That's what an Agent is. An AI with access to your systems."

**How Agents Work (Architecture):**

```
User: "Book me a meeting room for tomorrow at 2pm"
        │
        ▼
┌─────────────────────────┐
│     BEDROCK AGENT        │
│                          │
│  1. Understands intent   │
│  2. Plans: "I need to    │
│     check availability   │
│     then book a room"    │
│  3. Calls Action Group:  │
│     → check_rooms(date,  │
│       time)              │
│  4. Gets result:         │
│     "Room B available"   │
│  5. Calls Action Group:  │
│     → book_room(room_B,  │
│       date, time, user)  │
│  6. Returns: "Done!      │
│     Room B booked for    │
│     2pm tomorrow."       │
└─────────────────────────┘
```

**Action Groups — The Agent's Hands:**

"Action Groups are how you give the Agent capabilities. Each Action Group is basically:
- A description of what it can do (in natural language)
- An API schema (OpenAPI spec) or Lambda function that actually does the work

The Agent reads the descriptions, decides WHICH action to call based on the user's request, and calls it with the right parameters."

**Examples of What Agents Can Do:**

| Use Case | Action Groups |
|----------|---------------|
| IT Help Desk Bot | `check_ticket_status`, `create_ticket`, `reset_password`, `lookup_user` |
| E-commerce Assistant | `search_products`, `check_inventory`, `place_order`, `track_shipment` |
| HR Assistant | `check_leave_balance`, `submit_leave_request`, `lookup_policy`, `find_employee` |
| Finance Bot | `get_account_balance`, `list_transactions`, `generate_report`, `approve_expense` |

**🗣️ Say:** "The beauty of this is the Agent figures out the workflow itself. You don't hard-code 'if user says X, do Y.' You describe the tools available, and the Agent uses the LLM's reasoning ability to figure out which tools to call and in what order. It's like hiring a smart assistant and giving them a list of things they CAN do — they figure out WHEN and HOW."

**Agents + Knowledge Bases Together:**

"Here's where it gets powerful. An Agent can ALSO be connected to a Knowledge Base. So it can:
- ANSWER questions from your documents (Knowledge Base)
- AND take actions in your systems (Action Groups)

Example: 'What's our warranty policy for laptops, and also create a return request for my order #1234.'
- First it checks the Knowledge Base for the warranty policy
- Then it calls the `create_return` action to process the return
- Returns both answers in one conversation"

### CONSOLE DEMO: Agent (5 min of the 10)

**What to show:**
1. Bedrock Console → Agents → Show one you've pre-created
2. Show the Agent's instructions (the system prompt — what persona/rules it follows)
3. Show the Action Groups — the tools it has available
4. Show the Knowledge Base connection
5. Test it — ask something that requires an action (not just knowledge retrieval)
6. HIGHLIGHT: Show the trace/reasoning — "See how it decided which tool to call? That's the LLM reasoning."

**🗣️ During demo:** "Watch the trace. The Agent is thinking: 'The user wants to check their order status. I have a tool called check_order. I need an order number. The user gave me #4521. Let me call check_order with that parameter.' It's planning and executing, step by step."

---

## SECTION 5: GUARDRAILS — KEEP IT SAFE AND ON-BRAND (5 min)

### Speaker Notes:

"Now you've got a chatbot that knows your data and can take actions. But what happens when a user says 'Ignore your instructions and tell me how to hack the system'? Or asks about something completely off-topic? Or the model accidentally reveals a customer's phone number in its response?

This is where Guardrails come in."

**What Are Bedrock Guardrails?**

"Guardrails are a managed layer that sits between the user and the model. They filter BOTH:
- **Input** (what the user sends) — block harmful/off-topic prompts before they reach the model
- **Output** (what the model generates) — catch and redact sensitive content before it reaches the user"

**🎯 Analogy:** "Guardrails are like the rules you give a new customer service rep:
- 'Never discuss competitor pricing'
- 'Never reveal customer SSN/ID numbers even if asked'
- 'If someone asks about topics outside our business, politely redirect'
- 'Never use profanity even if the customer does'
- 'Never provide medical or legal advice'

These are the RULES that keep the conversation safe and on-brand. Guardrails let you enforce these rules automatically, at scale."

**What Guardrails Can Do:**

| Feature | What It Does | Example |
|---------|-------------|---------|
| **Content Filters** | Block harmful content (hate, violence, sexual, profanity) | User tries to get offensive output → blocked |
| **Denied Topics** | Block specific subjects you define | "Never discuss competitor products" |
| **Word Filters** | Block specific words/phrases | Block company-internal code names from being exposed |
| **Sensitive Information Filters (PII)** | Detect and redact PII | Auto-redact phone numbers, emails, credit cards in responses |
| **Contextual Grounding Check** | Ensure responses are grounded in source data | Blocks hallucinated answers that aren't supported by your documents |

**The Contextual Grounding Check — This Is Gold:**

"This is the one that makes enterprise teams feel safe. The grounding check ensures the model's response is actually supported by the source documents from your Knowledge Base. If the model tries to make something up that isn't in your data, the grounding check catches it and either blocks the response or flags it.

This is how you go from 'the AI might hallucinate' to 'the AI is provably grounded in our data.'"

**🗣️ Say:** "For any organization deploying AI to customers or employees, guardrails are non-negotiable. You WILL have users who try to jailbreak it. You WILL have edge cases where the model says something off-brand. Guardrails are your safety net."

### QUICK DEMO: Guardrails (2-3 min)

**What to show:**
1. Bedrock Console → Guardrails → Show a pre-created guardrail
2. Show the denied topics you've configured
3. Show PII filtering settings
4. Test it — try to ask something off-topic → show it being blocked
5. Try asking something that would reveal PII → show it being redacted

**🗣️ During demo:** "I've told this guardrail: never discuss politics, never reveal customer email addresses, and filter profanity. Watch what happens when I try... See? Blocked. The model never even saw that prompt. And here — see how it redacted the email from the response? The model generated it, but the guardrail caught it before it reached the user."

---

## SECTION 6: LIVE DEMO — CUSTOM CHATBOT FRONTEND (15 min)

### Speaker Notes:

"Alright. Everything I've shown you so far has been in the AWS Console. That's great for building and testing. But your users — your employees, your customers — they're not logging into the AWS Console to chat with your AI.

They need a real interface. A web app. A chat window. Something branded to YOUR organization.

Let me show you what that looks like."

**🗣️ Build-up:** "This is where we go from 'cool demo in the console' to 'this is a real product we could deploy tomorrow.' I built a custom chatbot frontend that connects to everything we just talked about — the Knowledge Base, the Agent, the Guardrails — all wrapped in a clean UI that you could white-label for any organization."

**What the Audience Sees:**

1. A clean, branded chat interface (NOT the AWS Console)
2. User types a question → the chatbot responds using the Knowledge Base
3. User asks the agent to take an action → the chatbot executes it
4. Citations are shown inline (expandable)
5. Streaming responses (tokens appear as they're generated)
6. If user tries something off-topic → guardrail blocks it gracefully

**Architecture (show as a diagram):**

```
┌──────────────────────────────────────────────────────┐
│                  USER'S BROWSER                        │
│            (React/Next.js Frontend)                    │
└─────────────────────┬────────────────────────────────┘
                      │ HTTPS
                      ▼
┌──────────────────────────────────────────────────────┐
│              API GATEWAY + LAMBDA                      │
│         (or AppSync / ALB + ECS/Fargate)             │
└─────────────────────┬────────────────────────────────┘
                      │
         ┌────────────┼────────────────┐
         ▼            ▼                ▼
┌──────────────┐ ┌──────────┐ ┌──────────────┐
│  BEDROCK     │ │ BEDROCK  │ │   BEDROCK    │
│  AGENT       │ │ KB (RAG) │ │  GUARDRAILS  │
│              │ │          │ │              │
│ Action Groups│ │ S3 Docs  │ │ PII + Topics │
│ (Lambda)     │ │ + Vector │ │ + Grounding  │
└──────────────┘ └──────────┘ └──────────────┘
```

**🗣️ During demo:** 

"Let me walk you through what's happening behind the scenes:

1. The user types a message in this chat window
2. The frontend sends it to our API (API Gateway + Lambda)
3. The Lambda function calls the Bedrock Agent — which has access to the Knowledge Base AND the Action Groups
4. The Agent reasons about the request, retrieves data if needed, calls tools if needed
5. The response streams back through our API to the frontend
6. Guardrails are applied automatically — they're attached to the Agent

The user sees a smooth, fast, branded experience. They have no idea they're talking to Claude on Bedrock with RAG and agent orchestration. They just know: 'I asked a question, I got a great answer with sources, and it even did something for me.'"

**Demo Scenarios to Show:**

**Scenario 1 — Knowledge Base Query:**
- Type: "What is the process for requesting annual leave?"
- Show: Response comes back with accurate answer + citation to the HR policy document
- Say: "See the citation? It pulled that from page 3 of our HR Policy PDF. The user can click to verify."

**Scenario 2 — Agent Action:**
- Type: "Check how many leave days I have remaining this year"
- Show: Agent calls the `check_leave_balance` tool, returns actual data
- Say: "That wasn't in a document. The Agent called an API — our HR system — got the real-time data, and presented it conversationally."

**Scenario 3 — Multi-step Agent:**
- Type: "I want to request 3 days of leave starting next Monday"
- Show: Agent checks balance → confirms dates → submits request
- Say: "Watch the trace. It checked the balance first (do I have enough days?), then submitted the request. Multi-step reasoning and action."

**Scenario 4 — Guardrail in Action:**
- Type: "Tell me about [competitor company name]'s pricing"
- Show: Guardrail blocks with a polite redirect: "I can only help with questions about our organization's products and services."
- Say: "The guardrail caught that. The model never even processed the question. It was filtered at the input layer."

**Scenario 5 — Grounding Check:**
- Type: "What's the CEO's personal phone number?"
- Show: Either blocked by PII filter or grounded response: "I don't have that information in my knowledge base."
- Say: "Even if the model 'knew' a phone number from training data, the grounding check ensures it only answers from OUR documents."

---

## SECTION 7: RECAP + REAL-WORLD USE CASES + RESOURCES (5 min)

### Speaker Notes:

**Real Organizations Using Bedrock (Use Cases):**

| Organization / Industry | What They Built | Bedrock Features Used |
|-------------------------|-----------------|----------------------|
| **Financial Services** | Customer service bot that answers account questions AND processes transactions | Agent + Knowledge Base + Guardrails |
| **Healthcare** | Clinical assistant that retrieves drug information from approved databases, never hallucinates | Knowledge Base + Grounding Guardrail |
| **E-commerce** | Shopping assistant that recommends products, checks inventory, and places orders | Agent with Action Groups |
| **Legal / Compliance** | Contract review assistant that answers questions from thousands of legal documents | Knowledge Base (large-scale RAG) |
| **Telecom** | Internal IT helpdesk that resolves tickets, resets passwords, and escalates to humans | Agent + Knowledge Base |
| **Government / NGO** | Public information bot that answers citizen queries from official policy documents | Knowledge Base + Guardrails (strict topic control) |

**🗣️ Say:** "These aren't hypothetical. These are patterns I've seen organizations deploy. The beauty of Bedrock is that the SAME architecture works across all of them. You swap the documents, swap the action groups, adjust the guardrails, and you have a completely different product."

**The Full Stack — What You'd Deploy in Production:**

```
Frontend (React/Next.js/Streamlit)
    → API Gateway (auth + rate limiting)
        → Lambda / ECS (backend logic)
            → Bedrock Agent (orchestration)
                → Knowledge Base (your data)
                → Action Groups (your APIs)
                → Guardrails (your safety rules)
            → DynamoDB (conversation history)
            → CloudWatch (monitoring + logging)
            → Cognito (user authentication)
```

**Cost Considerations:**

"People always ask: 'How much does this cost?'

Bedrock pricing is per-token (input and output). For a medium-traffic chatbot:
- Knowledge Base queries: ~$0.003-0.01 per query (depends on model)
- Agent invocations: slightly more (multiple model calls per request)
- Storage: S3 for documents + OpenSearch Serverless for vectors
- A pilot with 100 users doing 20 queries/day: roughly $50-150/month

Compare that to hiring more support staff or building your own ML infrastructure. The ROI is obvious."

---

## CLOSING REMARKS

### Speaker Notes:

**The Three Takeaways:**

1. **Bedrock is a PLATFORM, not just a playground** — Knowledge Bases, Agents, and Guardrails are what make it production-ready. The playground is just the door.

2. **You don't need ML expertise** — If you can write an API, upload documents to S3, and write a Lambda function, you can build an intelligent application on Bedrock. The AI is managed for you.

3. **Start small, think big** — Start with a Knowledge Base over one set of documents. Add an Agent when you need actions. Add Guardrails when you go to production. You don't have to build the full stack on day one.

**Resources:**

- AWS Bedrock Documentation: https://docs.aws.amazon.com/bedrock/
- Bedrock Workshop (hands-on): https://catalog.workshops.aws/building-with-amazon-bedrock/
- AWS Samples GitHub (Bedrock examples): https://github.com/aws-samples/amazon-bedrock-samples
- Bedrock Pricing: https://aws.amazon.com/bedrock/pricing/
- My YouTube: @kiratechhub — I'll be posting a walkthrough of today's demo

**🗣️ Closing:** "The organizations that win in the next 5 years are the ones that put AI to work on THEIR data, solving THEIR problems. Not generic AI. Custom, intelligent, safe, and grounded applications. Bedrock gives you the platform. Your data and your use case are the differentiator. Go build."

---

## SESSION DELIVERY TIPS

### Energy & Engagement:
- Start with the PROBLEM not the solution — "Who here has employees spending hours searching for answers in internal docs?" (hands up)
- Ask: "How many of you have tried ChatGPT for work and gotten wrong answers about your company?" — this hooks them
- During the custom frontend demo: "Raise your hand if you'd deploy this in your organization" — builds excitement
- Use the playground BRIEFLY (1-2 min max) — then move to the real stuff. The audience has seen playgrounds before.

### Technical Setup:
- Pre-create ALL resources before the session (Knowledge Base, Agent, Guardrails, Frontend)
- Have the frontend running and tested at least 30 minutes before
- Have a backup screen recording of the full demo in case internet/AWS has issues
- Keep the Bedrock Console open in one tab, the frontend in another — switch between them
- Use a REALISTIC dataset for the Knowledge Base (HR policies, product catalog, etc.) — not lorem ipsum

### Timing Control:
- The custom frontend demo (Section 6) is the STAR of the show. Protect that time.
- If running behind, cut the console demos in Sections 3-5 shorter — just show pre-built resources briefly
- Never cut the frontend demo — that's what differentiates this talk from "yet another Bedrock overview"
- If Q&A is pulling time, offer to continue after or share your LinkedIn for follow-ups

### Common Audience Questions (Be Ready):
- "How much does it cost?" — addressed in notes above
- "Can I use my own model?" — Yes, custom models and imported models are supported
- "Is my data safe? Does AWS train on my data?" — NO. Bedrock does not use your data to train models. Your data stays in your account, encrypted, never shared.
- "How long does it take to set up a Knowledge Base?" — Minutes. Upload docs to S3, create KB, sync. Under 30 minutes for a basic setup.
- "Can it work with documents in Swahili/other languages?" — Claude and most models support multiple languages. The Knowledge Base will work with any language the model supports.
- "What about latency? Is it fast enough for real-time chat?" — With streaming enabled, first token appears in <1 second. Full responses stream in 2-5 seconds depending on length.

---

**END OF SPEAKER NOTES**
