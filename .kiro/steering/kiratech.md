---
inclusion: always
---

# KiraTechHub Platform

## What this is
A cloud training + consulting platform for Pauline Namwakira — AWS Authorized Instructor and Cloud Solutions Architect.

## Tech Stack
- Next.js 14 (App Router) — frontend and API routes
- AWS DynamoDB — data storage (pay-per-request mode)
- AWS SES — transactional email
- AWS S3 + CloudFront — assets and video delivery
- AWS Cognito — auth (Phase 2)
- Stripe — payments (Phase 2)
- Deployed on AWS Amplify Hosting

## Color System
- Primary: #1E3A8A (deep navy)
- Accent: #3B82F6 (bright blue)
- Accent Light: #EFF6FF
- Text: #0F172A
- Muted: #64748B

## Project Structure
- app/ — Next.js App Router pages and API routes
- components/ — shared UI components
- components/home/ — homepage section components
- lib/data/ — static data (projects, services)

## Build Phases
- Phase 1 (current): Landing, About, Projects portfolio, Consulting inquiry
- Phase 2: Courses catalog, Stripe payments, Cognito auth, video player
- Phase 3: Student dashboard, blog, admin panel, corporate training packages

## Coding conventions
- All components use Tailwind CSS only — no CSS modules
- Use lucide-react for icons
- API routes live in app/api/
- Keep components small and focused
- Static data lives in lib/data/ as typed arrays
