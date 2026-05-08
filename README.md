# KiraTechHub — AWS Cloud Training & Consulting Platform

The official website for KiraTechHub, built and maintained by Pauline Namwakira — AWS Authorized Instructor and Cloud Solutions Architect based in Nairobi, Kenya.

**Live site:** [kiratechhub.com](https://paulinenamwakira.com)  
**YouTube:** [@kiratechhub](https://www.youtube.com/@kiratechhub)  
**LinkedIn:** [paulinenamwakira](https://www.linkedin.com/in/paulinenamwakira/)

---

## What This Is

A full-stack cloud training and consulting platform covering:

- AWS certification prep across all 13 certifications
- Corporate AWS training catalog (delivered via AWS Training Partner)
- Project portfolio with video walkthroughs and GitHub repos
- Consulting inquiry system backed by AWS DynamoDB and SES

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Database | AWS DynamoDB (pay-per-request) |
| Email | AWS SES |
| Hosting | AWS Amplify |
| CDN | AWS CloudFront |
| Auth (Phase 2) | AWS Cognito |
| Payments (Phase 2) | Stripe |

Everything runs serverless — API routes deploy as Lambda functions via Amplify, static pages are served from CloudFront edge locations globally.

---

## Project Structure

```
kira-tech-website/
├── app/
│   ├── page.tsx                  # Homepage
│   ├── training/page.tsx         # Corporate training catalog
│   ├── courses/page.tsx          # Certification prep (coming soon)
│   ├── projects/page.tsx         # Project portfolio
│   ├── projects/[slug]/page.tsx  # Project detail
│   ├── consulting/page.tsx       # Consulting inquiry
│   ├── about/page.tsx            # About Pauline
│   └── api/inquiry/route.ts      # Inquiry API (DynamoDB + SES)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── ConsultingForm.tsx
│   ├── ScrollReveal.tsx          # Scroll animation wrapper
│   └── home/                     # Homepage sections
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── MeetInstructor.tsx
│       ├── FeaturedProjects.tsx
│       ├── Certifications.tsx
│       ├── Testimonials.tsx
│       └── CTABanner.tsx
├── lib/data/
│   ├── projects.ts               # Project portfolio data
│   ├── courses.ts                # ATP course catalog + exam prep
│   ├── services.ts               # Consulting services
│   └── testimonials.ts           # Student feedback
└── public/images/                # Logo, Pauline's photo, cert badges
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- AWS account with DynamoDB table and SES verified email

### Local setup

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Fill in your AWS credentials and config

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

```env
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret

DYNAMODB_TABLE_INQUIRIES=kiratech-inquiries

SES_FROM_EMAIL=your@email.com
SES_NOTIFY_EMAIL=your@email.com

STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

NEXT_PUBLIC_COGNITO_USER_POOL_ID=us-east-1_xxx
NEXT_PUBLIC_COGNITO_CLIENT_ID=xxx
```

---

## AWS Infrastructure

### DynamoDB
Create a table named `kiratech-inquiries` with partition key `id` (String), capacity mode set to on-demand.

### SES
Verify your sender email in the SES console. Request production access to send to unverified recipients.

### Amplify Deployment
1. Push this repo to GitHub
2. Connect to AWS Amplify (New app → GitHub → select repo)
3. Add environment variables in Amplify console
4. Every push to `main` triggers an automatic redeploy

---

## Build Phases

- **Phase 1 (current):** Landing, Services, Projects portfolio, Corporate training catalog, Consulting inquiry
- **Phase 2:** Courses catalog with Stripe payments, Cognito auth, video player
- **Phase 3:** Student dashboard, blog, admin panel, corporate training packages

---

## About the Instructor

Pauline Namwakira is an AWS Authorized Instructor and Cloud Solutions Architect with 5+ years delivering cloud training across banking, fintech, aviation, and energy sectors. She holds 9 AWS certifications and has trained 500+ professionals across Africa and beyond.
