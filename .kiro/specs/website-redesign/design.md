# Design Document: Website Redesign

## Overview

This document describes the technical design for the SentiBay Consulting website redesign. The goal is to transform the existing personal portfolio site into a professional company site that clearly communicates the brand, showcases the two-person leadership team, and converts visitors into students and clients.

The redesign covers four areas: the Landing page, the Exam Prep Courses page, the About Us page, and the shared Navbar and Footer. All work stays within the existing Next.js 14 App Router project using Tailwind CSS and lucide-react.

The visual direction moves away from the current dark galaxy aesthetic toward a clean, light-background design using blues, greens, and white. The layout is inspired by Koenig Solutions but uses original content and structure.

### Key Design Decisions

**Light over dark**: The current site uses a dark navy/galaxy background throughout. The redesign flips this: most sections use light backgrounds (`#F0F9FF`, `#F8FAFC`, white) with dark navy text. Dark sections are used selectively for contrast (hero, footer, CTA banner). This makes the site feel more professional and less like a personal portfolio.

**Company framing over personal framing**: The current site is built around Pauline as an individual. The redesign reframes everything around SentiBay Consulting as a company, with Pauline and Felix as the leadership team. This is a content and copy change as much as a visual one.

**Section alternation**: Adjacent sections alternate between white, `#F0F9FF` (blue-tinted light), and `#F8FAFC` (neutral light) backgrounds. This creates visual rhythm without harsh contrast.

**No galaxy background**: The `GalaxyBackground` canvas component and `section-barrier` CSS classes are removed from the redesigned pages. The new pages use solid or gradient backgrounds only.

---

## Architecture

The redesign works within the existing Next.js 14 App Router structure. No new routes are added. The changes are:

1. Replace `components/Navbar.tsx` with a new light-background navbar
2. Replace `components/Footer.tsx` with a new dark-navy footer
3. Replace all `components/home/` section components with new ones
4. Replace `app/page.tsx` composition to use new sections
5. Replace `app/courses/page.tsx` with the full Exam Prep Courses page
6. Replace `app/about/page.tsx` with the new About Us page
7. Update `tailwind.config.ts` to add new color tokens
8. Update `app/globals.css` to remove galaxy-specific styles and add new utility classes
9. Add new data files: `lib/data/partners.ts`, `lib/data/webinars.ts`, `lib/data/differentiators.ts`, `lib/data/leadership.ts`
10. Update `lib/data/testimonials.ts` to add a `company` field

Static data stays in `lib/data/` as typed arrays. No API routes are needed for this redesign.

```
app/
  page.tsx                    ← updated composition
  courses/page.tsx            ← full replacement
  about/page.tsx              ← full replacement
  globals.css                 ← updated styles

components/
  Navbar.tsx                  ← full replacement
  Footer.tsx                  ← full replacement
  home/
    Hero.tsx                  ← full replacement
    Partners.tsx              ← new
    TrainingOptions.tsx       ← new
    Webinars.tsx              ← new
    Differentiators.tsx       ← new
    Testimonials.tsx          ← updated
  courses/
    CertificationCard.tsx     ← new
    CertificationGroup.tsx    ← new
  about/
    LeadershipCard.tsx        ← new
    MissionVision.tsx         ← new

lib/data/
  partners.ts                 ← new
  webinars.ts                 ← new
  differentiators.ts          ← new
  leadership.ts               ← new
  testimonials.ts             ← updated (add company field)
  courses.ts                  ← existing, no changes needed
```

---

## Components and Interfaces

### Shared: Navbar

**File**: `components/Navbar.tsx`

**Behavior**: Sticky top navigation. Light white background with a subtle bottom border. Logo on the left, links and CTA on the right. Collapses to hamburger on mobile.

**Links** (in order): Home (`/`), About Us (`/about`), Exam Prep Courses (`/courses`), Corporate Training (`/training`), Consulting (`/consulting`)

**CTA button**: "Get in Touch" linking to `/consulting`. Uses accent blue (`#3B82F6`) background.

**Visual**: `bg-white border-b border-gray-200` with `sticky top-0 z-50`. No dark or transparent background. Logo uses existing `/images/logo.png`.

**Mobile**: Hamburger icon (lucide `Menu`/`X`). Dropdown expands below the navbar with white background.

```tsx
// Props: none (static links)
// State: open: boolean (mobile menu)
```

---

### Shared: Footer

**File**: `components/Footer.tsx`

**Behavior**: Dark navy background (`#0F172A`). Three-column layout on desktop: brand column, site links column, services column. Social icons (YouTube, LinkedIn only — no GitHub). Copyright notice.

**Columns**:
- Column 1: Logo, one-sentence company description
- Column 2: Pages — Home, About Us, Exam Prep Courses, Corporate Training, Consulting
- Column 3: Services — AWS Certification Prep, Corporate Cloud Training, Cloud Consulting, Generative AI on AWS

**Social**: YouTube and LinkedIn icons only.

**Copyright**: `© {year} SentiBay Consulting. All rights reserved.`

```tsx
// Props: none (static content)
```

---

### Landing Page: Hero

**File**: `components/home/Hero.tsx`

**Layout**: Full-width section with a gradient background blending deep navy (`#0F172A`) to primary blue (`#1E3A8A`) with a subtle green accent glow. Two-column on desktop (text left, visual right). Single column on mobile.

**Left column content**:
- Small label: "AWS Authorized Training Partner"
- H1 headline: "AWS Cloud Training That Gets You Certified"
- Subheadline (max 2 sentences): "SentiBay Consulting delivers live virtual and corporate AWS training across Africa, Europe, and the Middle East. We prepare individuals and teams for every AWS certification."
- Two CTA buttons: "Start Learning" (primary, `/consulting`) and "Browse Courses" (secondary, `/courses`)

**Right column content**: A visual card or illustration. Since no company-branded illustration exists, use a styled card showing the AWS certification badge grid (3x3 grid of small badge images from `examPrepCourses` data) with a subtle border and shadow. This is more informative than a personal photo.

**Stats bar**: Below the two columns, a horizontal bar with four stats:
- "1,000+" Students Trained
- "13" AWS Certifications
- "5+" Years Experience
- "3" Continents Served

**Background**: `bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0F172A]` with a green glow element (`#059669` at low opacity) positioned bottom-right.

**No social media links** in this section.

```tsx
// Props: none (static content)
```

---

### Landing Page: Partners

**File**: `components/home/Partners.tsx`

**Layout**: Light background (`#F8FAFC`). Centered heading. Single horizontal row of partner tiles on desktop, wrapping grid on mobile.

**Partners** (5 total): AWS, Google Cloud, Databricks, Barracuda Email Security, Microsoft Fabric

**Tile design**: Each partner is a rounded card (`rounded-xl`) with a white background, subtle border (`border-gray-200`), and the partner name in dark text. If a logo SVG/PNG is available in `public/images/`, use it. Otherwise render the partner name in a styled text tile with the partner's brand color as a left border accent.

**Heading**: "Technology Partners"

**Background**: `bg-[#F8FAFC]` to contrast with the dark Hero above.

```tsx
// Props: none (static data from lib/data/partners.ts)

// Partner data shape:
type Partner = {
  name: string;
  logoPath?: string;   // optional local asset path
  brandColor: string;  // used for left border accent fallback
  url: string;
};
```

---

### Landing Page: TrainingOptions

**File**: `components/home/TrainingOptions.tsx`

**Layout**: White background. Centered heading and subheading. Three cards in a row on desktop (`md:grid-cols-3`), single column on mobile.

**Heading**: "How We Train"

**Three formats**:

1. **Live Virtual Training**
   - Icon: `Monitor` (lucide)
   - Description: "Instructor-led sessions delivered online via Zoom or Teams. Scheduled cohorts and private group bookings available. Covers all AWS certification tracks."
   - CTA: "Book a Session" → `/consulting`

2. **Corporate On-Site Training**
   - Icon: `Building2` (lucide)
   - Description: "We come to your office or training facility. Customized curriculum aligned to your team's role and industry. Available across Africa, Europe, and the Middle East."
   - CTA: "Request a Quote" → `/consulting`

3. **Self-Paced Exam Prep**
   - Icon: `BookOpen` (lucide)
   - Description: "Study at your own pace with structured course outlines, practice questions, and direct access to your instructor for questions."
   - CTA: "View Courses" → `/courses`

**Card design**: White card with a top color bar (blue for Live Virtual, green for Corporate, blue-green gradient for Self-Paced), icon in a colored circle, title, description, and a text link CTA.

```tsx
// Props: none (static content)
```

---

### Landing Page: Webinars

**File**: `components/home/Webinars.tsx`

**Layout**: Light blue background (`#F0F9FF`). Left-aligned heading. Cards in a 2-column grid on desktop, single column on mobile. YouTube channel link always visible.

**Heading**: "Free Learning Sessions"

**Webinar card fields**: title, date (or "Recorded"), description (1-2 sentences), registrationUrl or youtubeUrl

**Empty state**: When `webinars` array is empty or all are past, show a message: "No upcoming sessions right now. Watch our recorded webinars on YouTube." with a YouTube channel button.

**YouTube link**: Always shown at the bottom of the section regardless of webinar count.

```tsx
// Props: none (data from lib/data/webinars.ts)

// Webinar data shape:
type Webinar = {
  title: string;
  date: string;          // ISO date string or "Recorded"
  description: string;
  registrationUrl?: string;
  youtubeUrl?: string;
  isUpcoming: boolean;
};
```

---

### Landing Page: Differentiators

**File**: `components/home/Differentiators.tsx`

**Layout**: White background. Centered heading. Four cards in a 2x2 grid on desktop (`md:grid-cols-2`), single column on mobile.

**Heading**: "Why SentiBay Consulting"

**Four differentiators** (from `lib/data/differentiators.ts`):

1. **AWS Authorized Training Partner**
   - "We deliver official AWS-approved curriculum. Every course follows the AWS training framework, so you know the content is accurate and up to date."

2. **Proven Pass Rates**
   - "Our students consistently pass AWS certification exams. In one cohort of 22 learners, 91% passed on their first attempt."

3. **Industry-Specific Training**
   - "We have delivered training to teams in banking, fintech, aviation, oil and gas, and energy. We adapt examples and labs to your sector."

4. **Training Across Three Continents**
   - "We have trained professionals in Africa, Europe, and the Middle East, both in-person and virtually. We work across time zones."

**Card design**: White card with a green left border accent (`border-l-4 border-[#059669]`), icon, title in dark navy, description in muted gray.

```tsx
// Props: none (data from lib/data/differentiators.ts)

// Differentiator data shape:
type Differentiator = {
  icon: LucideIcon;
  title: string;
  description: string;
};
```

---

### Landing Page: Testimonials (updated)

**File**: `components/home/Testimonials.tsx`

**Changes from current**: Keep the carousel mechanic. Update the visual to use a light background (`#F8FAFC`) instead of dark. Update the card to show a green quote accent instead of blue. Add an optional `company` field display.

**Heading**: "What Our Students Say"

**Layout**: Same carousel with prev/next controls and dot indicators. Card uses white background with a subtle shadow.

---

### Courses Page: CertificationCard

**File**: `components/courses/CertificationCard.tsx`

**Props**:
```tsx
type CertificationCardProps = {
  cert: ExamPrepCourse;  // from lib/data/courses.ts
};
```

**Layout**: White card with rounded corners, subtle border, hover shadow and lift. Vertically stacked: badge image (72x72), level badge pill, certification name, optional "View Outline" link.

**Level badge colors**:
- Foundational: green (`bg-[#D1FAE5] text-[#059669]`)
- Associate: blue (`bg-[#EFF6FF] text-[#1E3A8A]`)
- Professional: deep blue (`bg-[#1E3A8A] text-white`)
- Specialty: amber (`bg-amber-100 text-amber-700`)

**Outline link**: If `cert.outlineUrl` exists, show a small "View Outline" link with an external link icon (`ExternalLink` from lucide).

---

### Courses Page: CertificationGroup

**File**: `components/courses/CertificationGroup.tsx`

**Props**:
```tsx
type CertificationGroupProps = {
  level: string;
  certs: ExamPrepCourse[];
};
```

**Layout**: Section heading with the level name and a count badge. Grid of `CertificationCard` components below. `grid-cols-2 sm:grid-cols-3 md:grid-cols-4` on desktop.

---

### About Page: LeadershipCard

**File**: `components/about/LeadershipCard.tsx`

**Props**:
```tsx
type LeadershipCardProps = {
  member: LeadershipMember;
};

type LeadershipMember = {
  name: string;
  title: string;
  bio: string;           // 2-4 sentences
  photoPath?: string;    // optional local image
  linkedinUrl?: string;
};
```

**Layout**: White card with a subtle border. Photo (if available) in a rounded square at the top, or a placeholder avatar using initials. Name in dark navy, title in accent blue, bio in muted gray. Optional LinkedIn link at the bottom.

**Felix Mulei**: No photo available yet. Use an initials placeholder (`FM`) with a blue background.

**Pauline Namwakira**: Use `/images/pauline.jpg`.

---

### About Page: MissionVision

**File**: `components/about/MissionVision.tsx`

**Layout**: Light blue background (`#F0F9FF`). Two-column on desktop (Mission left, Vision right), single column on mobile. Each column has a heading, a colored top border, and the statement text.

**Mission**: "To accelerate the growth of professionals and organizations through technology training and cloud consulting that sets a high bar and delivers lasting results."

**Vision**: "A future where every professional and every organization has the tools, skills, and support to grow without limits."

**About Section Brand Story**: "SentiBay Consulting exists at the intersection of learning and doing. We train the people who build on the cloud, and we help organizations build better. The name reflects what we believe: that growth, once started, should not stop."

**Values**:
- **Excellence** - High standards in every training session and every consulting engagement.
- **Client First** - We work around your goals, your team, and your timeline.
- **Integrity** - Honest advice, accurate content, and clear expectations every time.
- **Infinite Momentum** - We move fast and we keep moving. In training and in consulting, we push for progress at every step.

---

## Data Models

### `lib/data/partners.ts`

```typescript
export type Partner = {
  name: string;
  logoPath?: string;
  brandColor: string;
  url: string;
};

export const partners: Partner[] = [
  { name: "AWS", logoPath: undefined, brandColor: "#FF9900", url: "https://aws.amazon.com" },
  { name: "Google Cloud", logoPath: undefined, brandColor: "#4285F4", url: "https://cloud.google.com" },
  { name: "Databricks", logoPath: undefined, brandColor: "#FF3621", url: "https://databricks.com" },
  { name: "Barracuda Email Security", logoPath: undefined, brandColor: "#00A1E0", url: "https://barracuda.com" },
  { name: "Microsoft Fabric", logoPath: undefined, brandColor: "#0078D4", url: "https://microsoft.com/fabric" },
];
```

### `lib/data/webinars.ts`

```typescript
export type Webinar = {
  title: string;
  date: string;
  description: string;
  registrationUrl?: string;
  youtubeUrl?: string;
  isUpcoming: boolean;
};

export const webinars: Webinar[] = [];
// Populated when webinars are scheduled.
// Empty array triggers the "no upcoming sessions" fallback UI.
```

### `lib/data/differentiators.ts`

```typescript
import { type LucideIcon } from "lucide-react";

export type Differentiator = {
  iconName: string;   // lucide icon name as string for serialization
  title: string;
  description: string;
};

export const differentiators: Differentiator[] = [
  {
    iconName: "BadgeCheck",
    title: "AWS Authorized Training Partner",
    description: "We deliver official AWS-approved curriculum. Every course follows the AWS training framework, so you know the content is accurate and up to date.",
  },
  {
    iconName: "TrendingUp",
    title: "Proven Pass Rates",
    description: "Our students consistently pass AWS certification exams. In one cohort of 22 learners, 91% passed on their first attempt.",
  },
  {
    iconName: "Briefcase",
    title: "Industry-Specific Training",
    description: "We have delivered training to teams in banking, fintech, aviation, oil and gas, and energy. We adapt examples and labs to your sector.",
  },
  {
    iconName: "Globe",
    title: "Training Across Three Continents",
    description: "We have trained professionals in Africa, Europe, and the Middle East, both in-person and virtually. We work across time zones.",
  },
];
```

### `lib/data/leadership.ts`

```typescript
export type LeadershipMember = {
  name: string;
  title: string;
  bio: string;
  photoPath?: string;
  linkedinUrl?: string;
};

export const leadership: LeadershipMember[] = [
  {
    name: "Felix Mulei",
    title: "CEO and Founder",
    bio: "Felix founded SentiBay Consulting to bring structured AWS training to professionals across Africa and beyond. He leads the company's strategy, partnerships, and business development. His focus is on building training programs that produce real certification outcomes for individuals and enterprise teams.",
    photoPath: undefined,
    linkedinUrl: undefined,
  },
  {
    name: "Pauline Namwakira",
    title: "Co-Founder and Senior Technical Trainer",
    bio: "Pauline is an AWS Authorized Instructor and Cloud Solutions Architect with over four years of experience training professionals across Africa, Europe, and the Middle East. She holds 13 AWS certifications and has guided more than 1,000 students to certification success. She leads all technical training delivery at SentiBay Consulting.",
    photoPath: "/images/pauline.jpg",
    linkedinUrl: "https://www.linkedin.com/in/paulinenamwakira/",
  },
];
```

### `lib/data/testimonials.ts` (updated)

Add an optional `company` field to the existing `Testimonial` type:

```typescript
export type Testimonial = {
  quote: string;
  name: string;
  course: string;
  rating: number;
  company?: string;   // new optional field
};
```

### `tailwind.config.ts` (updated tokens)

```typescript
colors: {
  primary: "#1E3A8A",
  accent: "#3B82F6",
  "accent-light": "#EFF6FF",
  "green-brand": "#059669",
  "green-light": "#D1FAE5",
  "bg-light": "#F0F9FF",
  "bg-neutral": "#F8FAFC",
  "dark-navy": "#0F172A",
  muted: "#64748B",
  text: "#0F172A",
}
```

---

## Page Layouts

### Landing Page (`app/page.tsx`)

Section order and backgrounds:

| # | Component | Background |
|---|-----------|------------|
| 1 | `Hero` | Dark gradient (`#0F172A` → `#1E3A8A`) |
| 2 | `Partners` | `#F8FAFC` (neutral light) |
| 3 | `TrainingOptions` | `#FFFFFF` (white) |
| 4 | `Webinars` | `#F0F9FF` (blue-tinted light) |
| 5 | `Differentiators` | `#FFFFFF` (white) |
| 6 | `Testimonials` | `#F8FAFC` (neutral light) |
| 7 | `CTABanner` | `#0F172A` (dark navy) |

The `GalaxyBackground` component is NOT used on the landing page. The page uses a plain white body background with section-level backgrounds.

### Exam Prep Courses Page (`app/courses/page.tsx`)

```
Page background: #F8FAFC

Header section (white):
  - Page title: "Exam Prep Courses" (h1)
  - Subheading: "All 13 AWS certifications, grouped by level."
  - Light blue background pill: "AWS Authorized Training Partner"

Certification groups (alternating white / #F0F9FF):
  - Foundational (2 certs)
  - Associate (6 certs)
  - Professional (2 certs)
  - Specialty (2 certs)
  Note: AWS Certified Generative AI Developer is Associate level per the data

CTA section (dark navy #0F172A):
  - Heading: "Ready to start your certification journey?"
  - Subtext: "Contact us to enroll or ask about group pricing."
  - Button: "Get in Touch" → /consulting
```

### About Us Page (`app/about/page.tsx`)

```
Page background: #F8FAFC

Hero section (white):
  - Company name and tagline
  - No personal hero — company-focused intro

Mission and Vision section (#F0F9FF):
  - MissionVision component

Leadership section (white):
  - "Leadership" heading
  - Two LeadershipCard components side by side (md:grid-cols-2)

Testimonials section (#F8FAFC):
  - Same Testimonials carousel component as landing page

CTA section (dark navy):
  - "Work with our team" heading
  - "Get in Touch" button → /consulting
```

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

The prework analysis identified that most acceptance criteria in this redesign are UI layout, visual design, or content quality requirements that are best verified through example-based tests, snapshot tests, or manual review. However, three areas have genuine universal properties worth formalizing.

### Property 1: Certification data completeness

*For any* certification in the `examPrepCourses` data array, the rendered Courses page must contain a card that displays that certification's name and level. No certification in the data should be silently dropped from the rendered output.

**Validates: Requirements 10.2, 10.3**

### Property 2: Certification grouping correctness

*For any* two certifications with the same level value in the `examPrepCourses` data array, their rendered cards must appear within the same group section on the Courses page. No certification should appear in a group that does not match its level.

**Validates: Requirements 10.4**

### Property 3: Em dash absence

*For any* text string rendered by any component or present in any data file in the project, that string must not contain the em dash character (—). This property holds across all pages, all components, and all static data files.

**Validates: Requirements 1.7, 13.1**

### Property 4: Forbidden phrase absence

*For any* text string rendered by any component or present in any data file in the project, that string must not contain any of the following phrases: "dive deep", "unlock your potential", "seamlessly", "leverage", "robust", "world-class", "cutting-edge", "best-in-class".

**Validates: Requirements 7.4, 13.2**

---

## Error Handling

### Missing images

**Partner logos**: Partners section uses text tiles as the default. If a `logoPath` is provided but the image fails to load, the `<img>` element's `onError` handler falls back to showing the partner name text tile. This is handled in `Partners.tsx` with a `useState` flag per partner.

**Leadership photos**: `LeadershipCard` checks for `photoPath`. If undefined or if the image fails to load, it renders an initials avatar (first letter of first name + first letter of last name) with a blue background. Felix Mulei shows "FM", Pauline Namwakira shows "PN".

**Certification badges**: Badge images are loaded from Credly CDN URLs. If a badge fails to load, the `<img>` element falls back to a styled placeholder showing the certification level abbreviation (e.g., "PRO", "ASC").

### Empty webinars

The `Webinars` component checks `webinars.length === 0` or `webinars.filter(w => w.isUpcoming).length === 0`. In either case it renders the fallback message and YouTube channel link instead of an empty grid.

### Responsive layout

All multi-column grids use Tailwind responsive prefixes. No JavaScript-based layout switching is used. The hamburger menu in the Navbar uses a `useState` boolean and renders conditionally — no CSS `display` toggling.

---

## Testing Strategy

This feature is a UI redesign. Property-based testing applies to a narrow subset of requirements (data completeness and content quality rules). The primary testing approach is example-based component tests and snapshot tests.

### Unit and Component Tests

**Navbar**:
- Renders all 5 links in the correct order
- Renders "Get in Touch" CTA button with correct href
- Mobile menu is hidden by default
- Mobile menu opens on hamburger click

**Hero**:
- Renders primary CTA button linking to `/consulting`
- Renders secondary CTA button linking to `/courses`
- Does not render LinkedIn, GitHub, or YouTube links
- Stats bar contains at least 3 stat items

**Partners**:
- Renders all 5 partner names
- Falls back to text tile when `logoPath` is undefined

**TrainingOptions**:
- Renders exactly 3 training format cards
- Each card has a title, description, and CTA link
- Does not contain the phrase "fly me a trainer"

**Webinars**:
- Renders fallback message when `webinars` array is empty
- Renders YouTube channel link in all states

**CertificationCard**:
- Renders badge image, certification name, and level pill
- Renders "View Outline" link when `outlineUrl` is present
- Does not render "View Outline" link when `outlineUrl` is absent

**Courses Page**:
- Page heading is "Exam Prep Courses" (not "Courses" or "Coming Soon")
- Renders 13 certification cards total
- Cards are grouped into 4 level sections

**LeadershipCard**:
- Renders name, title, and bio for each member
- Renders initials avatar when `photoPath` is undefined
- Renders photo when `photoPath` is provided

**About Page**:
- Leadership section contains exactly 2 cards
- Felix Mulei card is present with correct title
- Pauline Namwakira card is present with correct title
- No work experience timeline is rendered
- No founding year text is present

**Footer**:
- Renders YouTube and LinkedIn social links
- Does not render GitHub social link
- Renders copyright notice with current year
- Renders "SentiBay Consulting" in copyright text

### Property-Based Tests

Property-based testing uses a library appropriate for TypeScript (e.g., `fast-check`). Each property test runs a minimum of 100 iterations.

**Property 1: Certification data completeness**
Generate subsets of the `examPrepCourses` array. For each subset, render the Courses page and assert that every certification in the subset has a corresponding card in the output. Tag: `Feature: website-redesign, Property 1: certification data completeness`

**Property 2: Certification grouping correctness**
Generate subsets of the `examPrepCourses` array. For each subset, render the Courses page and assert that all certifications with the same level appear within the same rendered group section. Tag: `Feature: website-redesign, Property 2: certification grouping correctness`

**Property 3: Em dash absence**
Generate arbitrary strings from the project's static data arrays (testimonials, differentiators, leadership bios, partner names, webinar descriptions, training option descriptions). Assert that no generated string contains the em dash character `—`. Tag: `Feature: website-redesign, Property 3: em dash absence`

**Property 4: Forbidden phrase absence**
Generate arbitrary strings from the project's static data arrays. Assert that no generated string contains any of the forbidden phrases. Tag: `Feature: website-redesign, Property 4: forbidden phrase absence`

### Snapshot Tests

Take snapshot tests of each major component at three viewport widths: 320px, 768px, and 1280px. Snapshots catch unintended visual regressions during future edits.

Components to snapshot: `Navbar`, `Footer`, `Hero`, `Partners`, `TrainingOptions`, `Webinars`, `Differentiators`, `Testimonials`, `CertificationCard`, `LeadershipCard`.

### Manual Review Checklist

The following requirements require human judgment and cannot be fully automated:

- Color system is visually cohesive and matches the spec
- No em dashes in any visible text (supplement with static scan)
- No AI-generated filler phrases in any visible text
- Hero headline clearly states the value proposition
- All content uses "SentiBay Consulting" as the primary brand name
- "KiraTechHub" appears only in YouTube-related contexts
- Hover transitions are smooth and under 300ms
- No horizontal scroll bars at any supported viewport width
