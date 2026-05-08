# SentiBay Consulting — Technology Training & Cloud Consulting

The official website for SentiBay Consulting, built and maintained by Pauline Namwakira and Felix Mulei.

**Live site:** [sentibay.com](https://sentibay.com)
**YouTube:** [@kiratechhub](https://www.youtube.com/@kiratechhub)
**LinkedIn:** [Pauline Namwakira](https://www.linkedin.com/in/paulinenamwakira/) | [Felix Mulei](https://www.linkedin.com/in/felixmulei/)

---

## What This Is

A full-stack technology training and cloud consulting platform covering:

- AWS certification exam prep across 12 certifications
- Corporate AWS training catalog (delivered via AWS Training Partner — Discoverer International)
- Cloud consulting services including architecture reviews, FinOps, and Generative AI on AWS
- Consulting inquiry system backed by AWS DynamoDB and SES
- Upcoming webinars and free learning sessions

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Database | AWS DynamoDB (pay-per-request) |
| Email | AWS SES |
| Hosting | AWS Amplify |
| Auth (Phase 2) | AWS Cognito |
| Payments (Phase 2) | Stripe |

API routes deploy as Lambda functions via Amplify. Static pages are served from CloudFront edge locations globally.

---

## Project Structure

```
sentibay-consulting/
├── app/
│   ├── page.tsx                  # Homepage
│   ├── training/page.tsx         # Corporate training catalog
│   ├── courses/page.tsx          # Exam prep courses
│   ├── consulting/page.tsx       # Consulting inquiry
│   ├── about/page.tsx            # About SentiBay Consulting
│   └── api/inquiry/route.ts      # Inquiry API (DynamoDB + SES)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ConsultingForm.tsx
│   ├── ScrollReveal.tsx
│   ├── about/                    # About page components
│   ├── courses/                  # Certification card components
│   └── home/                     # Homepage sections
│       ├── Hero.tsx
│       ├── HeroWave.tsx
│       ├── Partners.tsx
│       ├── TrainingOptions.tsx
│       ├── Webinars.tsx
│       ├── Differentiators.tsx
│       ├── Testimonials.tsx
│       └── CTABanner.tsx
├── lib/data/
│   ├── courses.ts                # Exam prep certifications
│   ├── services.ts               # Consulting services
│   ├── testimonials.ts           # Student and client feedback
│   ├── differentiators.ts        # Why SentiBay Consulting
│   ├── leadership.ts             # Leadership team
│   ├── partners.ts               # Technology partners
│   └── webinars.ts               # Upcoming webinars
└── public/images/                # Logos, team photos, cert badges
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- AWS account with DynamoDB table and SES verified email

### Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

For local development, create `.env.local`:

```env
APP_AWS_REGION=us-west-2
APP_AWS_ACCESS_KEY_ID=your_key
APP_AWS_SECRET_ACCESS_KEY=your_secret

DYNAMODB_TABLE_INQUIRIES=sentibay-inquiries

SES_FROM_EMAIL=your@email.com
SES_NOTIFY_EMAIL=your@email.com
```

For Amplify deployment, add these as environment variables in the Amplify console (do not use the `AWS_` prefix — Amplify reserves it).

---

## Amplify Deployment

1. Push this repo to GitHub (private)
2. Connect to AWS Amplify: New app → GitHub → select repo → branch: main
3. Add environment variables in Amplify console
4. Every push to `main` triggers an automatic redeploy

---

## About SentiBay Consulting

SentiBay Consulting delivers technology training and cloud consulting for professionals and teams worldwide. We are committed to excellence and continuous growth. Our instructors are AWS Authorized, and we maintain an average certification pass rate of 93% on first attempt.

**Leadership:**
- Felix Mulei — CEO and Founder
- Pauline Namwakira — Co-Founder and Senior Technical Trainer
