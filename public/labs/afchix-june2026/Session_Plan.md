# AfChix Women In Tech Leadership Programme
## Virtualization & Cloud Computing Workshop
**Date:** June 26, 2026 (Physical)
**Duration:** 2 hours
**Trainer:** Pauline Namwakira

---

## COURSE INTRODUCTION (for Barbara)

This workshop introduces virtualization as the foundation of modern cloud computing. Participants will learn what virtualization is, how it powers cloud platforms like AWS, and why it matters for their careers in technology. The session combines conceptual learning with a guided hands-on experience where each participant will launch their own virtual machine in the cloud, access a Windows desktop remotely, and explore what it means to have a computer running somewhere in the world that they control from their laptop.

---

## TRAINING OBJECTIVES

By the end of this session, participants will be able to:

1. Explain what virtualization is and how it enables cloud computing
2. Identify key cloud computing concepts (regions, availability zones, compute, storage)
3. Launch and connect to a virtual machine (EC2 instance) on AWS
4. Understand career pathways and skills required to work in cloud computing and virtualization

---

## PREREQUISITES

- No prior cloud or virtualization experience required
- Participants should bring a laptop with internet access and a modern web browser (Chrome or Firefox recommended)
- Basic computer literacy (navigating a browser, using a keyboard)

---

## TRAINING COURSE BENEFITS

- Gain foundational understanding of how cloud computing works behind the scenes
- Experience launching and connecting to a real cloud server
- Learn what skills are in demand for cloud and virtualization careers
- Receive guidance on free resources and certification pathways to continue learning
- Network with peers and a working cloud professional

---

## DETAILED TRAINING AGENDA

| Time | Activity | Duration |
|------|----------|----------|
| 0:00 - 0:05 | Welcome, introductions, and session overview | 5 min |
| 0:05 - 0:15 | What is a Data Center? Servers? (foundation) | 10 min |
| 0:15 - 0:30 | What is Virtualization? (concept + analogies) | 15 min |
| 0:30 - 0:45 | What is Cloud Computing? (definition, benefits, service models) | 15 min |
| 0:45 - 0:55 | AWS Global Infrastructure + EC2 Overview | 10 min |
| 0:55 - 1:00 | Break / Q&A | 5 min |
| 1:00 - 1:10 | Hands-on Setup: Logging into AWS Console | 10 min |
| 1:10 - 1:35 | Hands-on: Launch a Windows EC2 Instance | 25 min |
| 1:35 - 1:50 | Hands-on: Connect via RDP, explore the desktop, host a simple webpage | 15 min |
| 1:50 - 2:00 | Career pathways, next steps, resources, and Q&A | 10 min |

---

## SESSION FLOW NOTES

### Hour 1: Conceptual (Lecture + Discussion)

**What is Virtualization?**
- Analogy: One physical building divided into many apartments. Each apartment is independent but shares the same building infrastructure.
- Types: Hardware virtualization, server virtualization
- Why it matters: efficiency, cost, scalability

**How Virtualization Powers Cloud Computing**
- Data centers are full of physical servers
- Virtualization lets one server run many virtual machines
- Cloud providers (AWS, Azure, GCP) sell access to these virtual machines
- You don't buy hardware, you rent compute power

**Introduction to AWS EC2 (High Level)**
- EC2 = Elastic Compute Cloud = a virtual machine in the cloud
- You choose: operating system, size, location
- Use cases: hosting websites, running applications, development environments
- Keep it high-level, no deep-dive into instance types or pricing models

### Hour 2: Hands-on Demo

**The Experience:**
- Each participant gets access to the AWS Console
- They launch a Windows Server EC2 instance (t2.micro or t3.micro)
- They connect using Remote Desktop (RDP) from their browser or laptop
- They SEE a Windows desktop running in the cloud
- They open a browser inside the instance to prove it is a real computer
- Stretch goal: create a simple HTML file, host it using IIS or Python, access from their laptop

**Why Windows instead of Linux:**
- Visual and familiar: participants see a desktop they recognize
- No command line intimidation for beginners
- Immediate "wow factor" of seeing a remote desktop
- More relatable for non-technical audience

---

## LAB LOGISTICS (Trainer Preparation)

### Timeline:
- **By June 24:** Send email to Barbara requesting participant count + emails by June 25
- **June 25 (evening):** Receive participant list, create IAM Identity Center users
- **June 26 (morning):** Send login credentials to all participants via email
- **June 26 (session):** Participants use credentials to access AWS Console

### Region: us-east-1 (N. Virginia)
- Highest capacity, least likely to hit service limits
- Check vCPU quota NOW: Service Quotas > EC2 > Running On-Demand Standard instances
- Need at least 25 vCPUs (request increase if under 25, takes 1-3 days)

### What to request from Barbara:
1. Confirmed number of participants
2. Participant names and email addresses by end of day June 25th
3. Let her know you'll send login credentials morning of June 26th

### Lab website:
- Participants will deploy a pre-built AfChix Shopping website (HTML/CSS provided by trainer)
- Code will be placed on the EC2 instance via a PowerShell command
- Much more exciting than "Hello World" — gives them something real to show people

---

## WHAT TO SEND BARBARA BY JUNE 24

1. Course Introduction (the 2 paragraphs above)
2. Training Objectives (the 4 bullets above)
3. Prerequisites (the 3 bullets above)
4. Training Course Benefits (the 5 bullets above)
5. Detailed Training Agenda (the table above)
6. Presentation: use their template, fill in by week of session (June 24-25)

---

## COSTS / CREDITS

For a 2-hour session with ~20 participants running t2.micro or t3.micro Windows instances:
- Approximate cost: $5-$10 total (mostly free tier if using new accounts)
- If using your credits: negligible
- Remember to TERMINATE all instances immediately after the session

---

## TODO LIST

- [ ] Confirm participant count with Barbara
- [ ] Decide on lab environment approach
- [ ] Create IAM users or request Workshop Studio access
- [ ] Build presentation using AfChix template
- [ ] Test the full hands-on flow yourself (launch Windows EC2, connect via RDP)
- [ ] Prepare printed login cards for participants
- [ ] Send deliverables to Barbara by June 24
