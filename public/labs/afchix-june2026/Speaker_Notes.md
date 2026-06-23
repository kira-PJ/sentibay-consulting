# AfChix Virtualization & Cloud Computing Workshop
## Speaker Notes - Pauline Namwakira
## June 26, 2026

---

## SECTION 1: WELCOME & INTRODUCTIONS (5 min)

**Speaker Notes:**

Good morning everyone. My name is Pauline Namwakira, and I am an AWS Authorized Instructor and cloud consultant. Today, we are going to explore something that powers almost everything you do online: from the moment you open Instagram, send a WhatsApp message, or stream music on Spotify, cloud computing is behind it all.

By the end of today, you will:
- Understand what virtualization is and why it matters
- Know what cloud computing is and how it works
- Have launched your own virtual computer in the cloud
- Know what career paths exist in this space

No prior experience required. If you can use a browser, you can do this. Let us get started.

---

## SECTION 2: WHAT IS A DATA CENTER? WHAT IS A SERVER? (10 min)

**Speaker Notes:**

Before we talk about the cloud, we need to understand what is physically behind it. Because "the cloud" is not actually floating in the sky. It is real hardware, sitting in real buildings, in real locations around the world.

**What is a Server?**

A server is just a computer. But unlike your laptop or phone, a server is designed to be on 24 hours a day, 7 days a week, serving requests from other computers. When you type "google.com" in your browser, your request travels to a Google server somewhere in the world, that server processes your request, and sends back the Google homepage.

**Analogy: The Restaurant Kitchen**

Think of your laptop as a customer in a restaurant. You place an order (a request). The kitchen is the server. The kitchen receives your order, prepares the food, and sends it back to your table. The kitchen never closes. It serves hundreds of customers at once. That is what a server does.

**What does a server look like?**

A server looks like a flat metal box, about the size of a large pizza box. It has processors (CPUs), memory (RAM), and storage (hard drives), just like your laptop, but much more powerful. These servers are stacked in tall racks, like books on a shelf.

**What is a Data Center?**

A data center is a building full of these server racks. Think of it like a massive library, but instead of books, the shelves hold servers. These buildings have:
- Thousands of servers
- Massive cooling systems (servers generate heat)
- Backup power generators (in case electricity fails)
- 24/7 physical security (guards, biometric access, cameras)
- Redundant internet connections

**Analogy: The Power Station**

You do not generate your own electricity at home. You plug into a power grid that generates electricity in a power station somewhere. A data center is like that power station but for computing. Instead of generating electricity, it generates computing power. You plug into it (over the internet) and use as much as you need.

**Real Numbers (AWS, June 2026):**
- AWS operates data centers across **39 geographic Regions** worldwide
- These contain **123 Availability Zones** (each AZ is one or more physical data centers)
- AWS has **600+ Points of Presence** (edge locations) in 90+ cities across 40+ countries for content delivery
- The closest Region to Nairobi is **Cape Town, South Africa (af-south-1)**, launched in 2020 with 3 AZs
- AWS also has Regions in Bahrain (me-south-1) and UAE (me-central-1)
- Plans for 2 more Regions: Kingdom of Saudi Arabia and Chile

**Why does this matter for you?**

Companies used to buy their own servers. They would spend millions on hardware, hire teams to maintain them, and replace them every 3-5 years. If the business grew, they had to buy more. If the business shrank, the servers sat idle, wasting money.

This is the problem cloud computing solves.

---

## SECTION 3: WHAT IS VIRTUALIZATION? (15 min)

**Speaker Notes:**

Now that we know what servers and data centers are, let us talk about the magic that makes cloud computing possible: virtualization.

**The Problem Before Virtualization:**

In the old days, one physical server ran one operating system and one application. If you had 10 applications, you needed 10 physical servers. But most of the time, each server was only using 10-15% of its capacity. That is like having 10 matatus, each carrying only 2 passengers on a route that fits 30. Massive waste.

**What is Virtualization?**

Virtualization is the technology that allows one physical server to run multiple virtual machines (VMs). Each virtual machine acts like its own independent computer with its own operating system, its own storage, and its own resources, but they all share the same physical hardware underneath.

**Analogy: The Apartment Building**

Imagine one large plot of land. Without virtualization, only one family can build one house on that land. With virtualization, you build an apartment building on that same land. Now 20 families live there, each with their own apartment (their own space, their own keys, their own privacy), but they share the same foundation, the same plumbing, the same building structure.

- The land = physical server hardware
- The apartment building = virtualization software (called a hypervisor)
- Each apartment = a virtual machine
- Each family = an application or user

**Analogy: Slicing a Cake**

One physical server is like one large cake. Virtualization lets you slice that cake into many pieces. Each slice is a virtual machine. Each person gets their own piece and does not interfere with anyone else's.

**How Does It Work? (Simple Version)**

There is a special piece of software called a **hypervisor** that sits on top of the physical hardware. The hypervisor divides the server's resources (CPU, memory, storage) and creates virtual machines. Each VM thinks it is a real computer. It does not know it is sharing hardware with others.

**Types of Hypervisors:**
- Type 1 (bare metal): runs directly on hardware. Examples: VMware ESXi, AWS Nitro, Microsoft Hyper-V
- Type 2 (hosted): runs on top of an existing operating system. Examples: VirtualBox, VMware Workstation

AWS uses a custom hypervisor called **Nitro** that is built specifically for cloud performance.

**Why Virtualization Matters:**

| Before Virtualization | After Virtualization |
|----------------------|---------------------|
| 1 server = 1 application | 1 server = many applications |
| 10-15% utilization | 70-80% utilization |
| Buy hardware upfront | Share hardware across users |
| Weeks to set up new server | Minutes to create new VM |
| Hardware failure = downtime | VM moves to another server |

**Analogy: The Boda Boda vs The Bus**

Without virtualization: every person who needs to travel gets their own boda boda. Expensive, one person per trip.

With virtualization: everyone rides the same bus. You share the vehicle, but you each have your own seat, your own stop, your own journey. The bus is more efficient, cheaper per person, and serves more people.

**Key Takeaway:**

Virtualization is the foundation technology that makes cloud computing possible. Without it, cloud providers could not offer computing resources to millions of customers from the same physical hardware.

---

## SECTION 4: WHAT IS CLOUD COMPUTING? (15 min)

**Speaker Notes:**

Now we understand virtualization. Let us connect it to cloud computing.

**Definition:**

Cloud computing is the delivery of computing services (servers, storage, databases, networking, software, analytics, AI) over the internet ("the cloud") on a pay-as-you-go basis.

Instead of buying your own servers, you rent them from a cloud provider. You use what you need, when you need it, and you pay only for what you use. Like electricity: you do not build a power station, you just plug in and pay the bill.

**Analogy: KPLC (Kenya Power)**

Before KPLC, wealthy households had their own generators. Expensive to buy, expensive to maintain, noisy, and wasteful if you were not using all the power.

Then KPLC built power stations and ran wires to every house. Now you just plug in. You pay for what you use. If you need more power, you just use more. No capital investment, no maintenance headaches.

Cloud computing is the same concept, but for IT infrastructure:
- The power station = AWS data centers
- The power grid = the internet
- Your electricity meter = your AWS bill (pay for what you use)
- Plugging in your appliance = launching a virtual machine

**The 5 Key Benefits of Cloud Computing:**

1. **Pay only for what you use** - No upfront investment. Like prepaid electricity, not buying a generator.

2. **Scale up or scale down instantly** - Need more servers for a sale event? Add them in minutes. Sale over? Remove them. Like hiring extra waiters for a busy weekend, then letting them go on Monday.

3. **Go global in minutes** - Deploy your application in Nairobi, London, and New York in minutes. No need to physically ship servers to each location.

4. **Stop spending money on data centers** - No building to maintain, no security guards, no cooling systems, no hardware replacements. Focus on your business, not your IT.

5. **Increase speed and agility** - New ideas can be tested in hours, not months. A startup can access the same infrastructure as a large bank.

Today we will work with AWS because it is the market leader, has the most job opportunities, and has data centers in Africa (Cape Town). We will cover AWS global infrastructure in more detail before our hands-on session.

---

## SECTION 5: AWS GLOBAL INFRASTRUCTURE + EC2 OVERVIEW (10 min)

**Speaker Notes:**

Let us look at how AWS is structured globally, and then introduce the service we will use in our hands-on session.

**AWS Global Infrastructure (June 2026):**

- **39 Regions** worldwide (a Region is a physical location with multiple data centers)
- **123 Availability Zones** (each Region has 2-6 AZs; each AZ is one or more data centers)
- **600+ Points of Presence** (edge locations in 90+ cities, 40+ countries for fast content delivery)
- **240+ services** available (compute, storage, databases, AI, security, networking, and more)
- 2 more Regions announced: Kingdom of Saudi Arabia and Chile

**Closest Regions to Nairobi:**
- Cape Town, South Africa (af-south-1) - launched April 2020, 3 AZs
- Bahrain (me-south-1) - 3 AZs
- UAE (me-central-1) - 3 AZs
- Europe (various) - commonly used by East African businesses

**Analogy: Safaricom Towers**

AWS Regions are like Safaricom cell towers. The closer you are to a tower, the better your signal. If you are in Nairobi and your data is stored in Cape Town, it reaches you faster than if it were stored in London. That is why having a Region in Africa matters.

**Cloud Service Models (simple version):**

Think of it like ordering food:

| Model | What You Manage | Analogy |
|-------|----------------|---------|
| **IaaS** (Infrastructure as a Service) | You get the raw kitchen. You cook your own food. | Renting a kitchen: buy ingredients, cook, serve. Example: AWS EC2 |
| **PaaS** (Platform as a Service) | Kitchen with appliances ready. Just cook. | A food truck with equipment: bring your recipe. Example: AWS Elastic Beanstalk |
| **SaaS** (Software as a Service) | Someone else cooks. You just eat. | Ordering Uber Eats: food arrives ready. Example: Gmail, Zoom |

Today we are using IaaS. We are renting the kitchen (a virtual machine) and cooking our own food (hosting a website).

**The Big Three Cloud Providers (Q1 2026):**

| Provider | Market Share | Known For |
|----------|-------------|-----------|
| Amazon Web Services (AWS) | ~30% | Broadest services (240+), largest infrastructure |
| Microsoft Azure | ~25% | Enterprise, Windows, OpenAI partnership |
| Google Cloud Platform (GCP) | ~13% | Data analytics, AI/ML, fastest growing |

Together they control about 68% of all cloud spending. The cloud market hit $119 billion in Q4 2025 alone.

**What is Amazon EC2?**

EC2 stands for Elastic Compute Cloud. It is the service that lets you create virtual machines in the cloud. Remember our apartment building analogy? EC2 lets you rent an apartment (a virtual machine) in any AWS data center in the world, set it up with the operating system you want (Windows, Linux), and start using it in minutes.

**Key things to know about EC2:**
- You choose the Region (where in the world)
- You choose the operating system (Windows or Linux)
- You choose the size (how much CPU and memory)
- You can start and stop it anytime (you only pay when it is running)
- You connect to it over the internet

**Today's Hands-On:**

We will launch a Windows Server EC2 instance. You will connect to it, see a full Windows desktop running in the cloud, and then deploy a real shopping website on it. This is exactly how companies host their applications, and today you will do it yourself.

---

## SECTION 6: BREAK / Q&A (5 min)

Take questions. Stretch. Prepare for hands-on.

---

## SECTION 7: HANDS-ON OVERVIEW (show before break, then do after)

**Slide content - "What We Will Build Together":**

1. Log into the AWS Console using your workshop credentials
2. Launch a Windows virtual machine (EC2 instance)
3. Connect to it from your laptop using Remote Desktop
4. See a full Windows desktop running in the cloud
5. Deploy a real shopping website on your machine
6. Access your website from your browser — live on the internet

**Speaker note:** "After the break, we are going to do all of this together, step by step. Nobody gets left behind. By the end, you will have a live website running in the cloud that anyone in the world can visit. Take your break, stretch, and come back ready."

---

## SECTION 7b: HANDS-ON EXECUTION (50 min, after break)

For detailed speaker walkthrough of each step, refer to `Lab_Instructions.md`. Talk through each step live while demonstrating on screen. Key talking points per step:

**Step 1 - Login:** "This is the AWS Console. Think of it as the control panel for the entire cloud."

**Step 2 - Launch instance:** "You are choosing your apartment: where it is, what OS, how big. We are picking a small studio today."

**Step 3 - Connect:** "You are now controlling a computer in Virginia, USA from your laptop in Nairobi. That is the power of cloud."

**Step 4 - Deploy website:** "We just turned your virtual machine into a web server. Anyone in the world can visit your shop right now."

---

## SECTION 8: CAREER PATHWAYS & NEXT STEPS (10 min)

**Speaker Notes:**

Now that you have launched your own virtual machine, let us talk about where this can take you.

**Cloud Computing Career Paths:**

| Role | What You Do |
|------|-------------|
| Cloud Support Engineer | Help users troubleshoot cloud issues, respond to tickets, monitor systems |
| Cloud Engineer | Build and maintain cloud infrastructure, manage servers, networking, storage |
| Solutions Architect | Design cloud systems for businesses, recommend the right services for the problem |
| DevOps Engineer | Automate deployments, build CI/CD pipelines, keep systems running smoothly |
| Cloud Security Engineer | Protect cloud environments, manage access, detect threats, ensure compliance |
| Data Engineer | Build data pipelines, move and transform data across cloud services |
| AI/ML Engineer | Build and deploy machine learning models using cloud AI services |
| Site Reliability Engineer (SRE) | Keep applications running at scale, handle incidents, improve system reliability |
| Cloud Consultant / Trainer | Advise companies on cloud strategy, deliver training, help teams adopt cloud |
| Cloud Sales / Pre-Sales Engineer | Sell cloud solutions to businesses, demo products, translate tech into business value |

**How to Start (Free Resources):**

1. **AWS Free Tier (new model, since July 2025):**
   - New accounts get **$100 in AWS credits immediately** on sign-up
   - Earn **up to $100 more** by using services like EC2, RDS, Lambda, and Bedrock
   - That is **up to $200 in free credits** over 6 months
   - You choose between a Free plan (no credit card needed) and a Paid plan at sign-up
   - The Free plan lasts 6 months or until credits run out, whichever comes first
   - Plus: many "Always Free" services remain (Lambda, DynamoDB, etc.)

2. **AWS Skill Builder** (explore.skillbuilder.aws) - Free learning platform with 600+ courses, labs, and learning plans. Start with "Cloud Practitioner Essentials" (6 hours)

3. **AWS Cloud Quest** - Free gamified learning on Skill Builder. You solve real-world problems in a virtual city. Fun and hands-on.

4. **AWS Community Days Kenya** - Free in-person events in Nairobi with talks, workshops, and networking

5. **AWS Educate** - Free cloud content and labs for students and self-learners (no AWS account needed for some labs)

6. **YouTube** - Channels like freeCodeCamp, TechWorld with Nana, and @kiratechhub (mine!) for free cloud tutorials

7. **AWS Documentation** - Everything is documented at docs.aws.amazon.com. Free, always up to date, written by AWS engineers

**First Certification to Target:**
- AWS Certified Cloud Practitioner (CCP)
- Cost: $100 USD exam fee
- Study time: 2-4 weeks if you dedicate 1-2 hours daily
- No prerequisites
- Globally recognized

**AWS Certification Paths (current as of June 2026):**

```
FOUNDATIONAL (no experience needed)
  ├── Cloud Practitioner
  └── AI Practitioner

ASSOCIATE (prior cloud or IT experience recommended)
  ├── Solutions Architect - Associate
  ├── Developer - Associate
  ├── CloudOps Engineer - Associate (formerly SysOps Administrator)
  ├── Data Engineer - Associate
  └── Machine Learning Engineer - Associate

PROFESSIONAL (2+ years AWS experience)
  ├── Solutions Architect - Professional
  ├── DevOps Engineer - Professional
  └── Generative AI Developer - Professional

SPECIALTY
  ├── Security - Specialty (updated version)
  └── Advanced Networking - Specialty (retires August 25, 2026)
```

**Also new: AWS Microcredentials** - hands-on assessments in a live AWS environment. Topics include serverless, agentic AI, application networking, and incident response. No Skill Builder subscription required.

**Speaker note:** "Start with Cloud Practitioner. It is the foundation. From there, pick the path that matches the career you want:
- Want to design systems? Solutions Architect path.
- Want to build and code? Developer path.
- Want to automate and deploy? DevOps or CloudOps path.
- Want to work with data? Data Engineer path.
- Want to work with AI? ML Engineer, AI Practitioner, or GenAI Developer path.
- Want to secure systems? Security Specialty.

Each certification opens doors. I started with Cloud Practitioner and now hold 13. You do not need 13. Even one makes a difference."

**Parting shot:**

"Today you launched a virtual machine and hosted a website in the cloud. A few hours ago, you had never done that before. That is all learning is. You do something you have never done, and suddenly you can.

The cloud industry is growing fast and there is room for you. You do not need a computer science degree. You do not need to be a genius. You just need to start. Pick one resource, spend 30 minutes a day, and in a few weeks you will surprise yourself.

The world needs more women building and running the systems that power everything. Go build."

**Connect With Me:**
- LinkedIn: linkedin.com/in/paulinenamwakira
- YouTube: @kiratechhub
- SentiBay Consulting: sentibay.com

Thank you. Questions?
