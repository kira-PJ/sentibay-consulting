# Implementation Plan: Website Redesign

## Overview

Transform the existing personal portfolio site into a professional SentiBay Consulting company site. Work proceeds foundation-first: color tokens and data files, then shared components (Navbar, Footer), then landing page sections in order, then the Courses page, then the About page, and finally property-based tests. All work stays within the existing Next.js 14 App Router project using Tailwind CSS and lucide-react.

## Tasks

- [x] 1. Update Tailwind color tokens and global styles
  - Add new color tokens to `tailwind.config.ts`: `green-brand` (#059669), `green-light` (#D1FAE5), `bg-light` (#F0F9FF), `bg-neutral` (#F8FAFC), `dark-navy` (#0F172A), `text` (#0F172A). Keep existing tokens.
  - Remove galaxy-specific utility classes from `app/globals.css` (`.section-barrier`, any star/canvas styles). Add any new utility classes needed by the redesign (e.g., smooth transition defaults).
  - _Requirements: 1.1, 1.2, 1.3, 1.5_

- [ ] 2. Create data files
  - [x] 2.1 Create `lib/data/partners.ts`
    - Export `Partner` type and `partners` array with the five partners: AWS, Google Cloud, Databricks, Barracuda Email Security, Microsoft Fabric. Include `name`, `logoPath` (undefined for all), `brandColor`, and `url` fields.
    - _Requirements: 4.1_

  - [x] 2.2 Create `lib/data/webinars.ts`
    - Export `Webinar` type and `webinars` array (empty array as initial value). Include `title`, `date`, `description`, `registrationUrl`, `youtubeUrl`, and `isUpcoming` fields.
    - _Requirements: 6.1, 6.2, 6.3_

  - [x] 2.3 Create `lib/data/differentiators.ts`
    - Export `Differentiator` type and `differentiators` array with the four differentiators: AWS Authorized Training Partner, Proven Pass Rates, Industry-Specific Training, Training Across Three Continents. Use `iconName` (string), `title`, and `description` fields. No em dashes, no forbidden phrases.
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

  - [x] 2.4 Create `lib/data/leadership.ts`
    - Export `LeadershipMember` type and `leadership` array with two members: Felix Mulei (CEO and Founder, no photo) and Pauline Namwakira (Co-Founder and Senior Technical Trainer, `/images/pauline.jpg`). Include `name`, `title`, `bio`, `photoPath`, and `linkedinUrl` fields.
    - _Requirements: 11.1, 11.2_

  - [x] 2.5 Update `lib/data/testimonials.ts`
    - Add optional `company?: string` field to the `Testimonial` type. Existing testimonial entries require no changes (field is optional).
    - _Requirements: 8.2_

- [x] 3. Replace Navbar
  - Rewrite `components/Navbar.tsx` as a light-background sticky navbar. White background (`bg-white`), subtle bottom border (`border-b border-gray-200`), `sticky top-0 z-50`. Logo (`/images/logo.png`) on the left. Desktop links on the right in order: Home (`/`), About Us (`/about`), Exam Prep Courses (`/courses`), Corporate Training (`/training`), Consulting (`/consulting`). "Get in Touch" CTA button linking to `/consulting` with accent blue background. Hamburger menu (lucide `Menu`/`X`) on mobile below 768px that expands a white dropdown. Remove the dark/transparent background and all personal links.
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

- [x] 4. Replace Footer
  - Rewrite `components/Footer.tsx` with dark navy background (`bg-[#0F172A]`). Three-column desktop layout: (1) logo + one-sentence company description, (2) page links (Home, About Us, Exam Prep Courses, Corporate Training, Consulting), (3) service links (AWS Certification Prep, Corporate Cloud Training, Cloud Consulting, Generative AI on AWS). YouTube and LinkedIn social icons only — remove GitHub. Copyright: `© {year} SentiBay Consulting. All rights reserved.`
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_

- [x] 5. Replace Hero section
  - Rewrite `components/home/Hero.tsx`. Dark gradient background (`bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0F172A]`) with a subtle green glow element. Two-column desktop layout (text left, visual right), single column on mobile. Left: small label "AWS Authorized Training Partner", H1 "AWS Cloud Training That Gets You Certified", subheadline (max 2 sentences about SentiBay Consulting), two CTA buttons ("Start Learning" → `/consulting` primary, "Browse Courses" → `/courses` secondary). Right: styled card showing a 3x3 grid of certification badge placeholders or level tiles. Stats bar at the bottom: "1,000+" Students Trained, "13" AWS Certifications, "5+" Years Experience, "3" Continents Served. No social media links (LinkedIn, GitHub, YouTube) in this section.
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_

- [x] 6. Create Partners section
  - Create `components/home/Partners.tsx`. Light background (`bg-[#F8FAFC]`). Centered heading "Technology Partners". Single horizontal row on desktop, wrapping grid on mobile. Five partner tiles (data from `lib/data/partners.ts`): each is a white rounded card with a subtle border. Since no logo assets exist, render each partner name in a styled text tile with a left border accent using the partner's `brandColor`. Include `onError` fallback logic for future logo support.
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [x] 7. Create TrainingOptions section
  - Create `components/home/TrainingOptions.tsx`. White background. Centered heading "How We Train". Three cards in `md:grid-cols-3`, single column on mobile. Cards: Live Virtual Training (lucide `Monitor`), Corporate On-Site Training (lucide `Building2`), Self-Paced Exam Prep (lucide `BookOpen`). Each card has a top color bar, icon in a colored circle, title, 2-3 sentence description, and a text link CTA. No "fly me a trainer" phrasing anywhere.
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

- [x] 8. Create Webinars section
  - Create `components/home/Webinars.tsx`. Light blue background (`bg-[#F0F9FF]`). Heading "Free Learning Sessions". Reads from `lib/data/webinars.ts`. When `webinars` is empty or has no upcoming entries, render fallback message: "No upcoming sessions right now. Watch our recorded webinars on YouTube." with a YouTube channel button. YouTube channel link always visible at the bottom regardless of webinar count. Cards in `md:grid-cols-2` when webinars exist.
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 9. Create Differentiators section
  - Create `components/home/Differentiators.tsx`. White background. Centered heading "Why SentiBay Consulting". Four cards in `md:grid-cols-2`, single column on mobile. Data from `lib/data/differentiators.ts`. Each card: white background, green left border accent (`border-l-4 border-[#059669]`), icon resolved from `iconName` string using a local icon map (lucide `BadgeCheck`, `TrendingUp`, `Briefcase`, `Globe`), title in dark navy, description in muted gray. No vague marketing phrases.
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 10. Update Testimonials section
  - Update `components/home/Testimonials.tsx`. Change background from dark to light (`bg-[#F8FAFC]`). Update card to white background with subtle shadow. Change quote accent from blue to green. Update heading to "What Our Students Say". Add optional `company` field display below the student name when present. Keep existing carousel mechanic (prev/next controls, dot indicators).
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [x] 11. Update landing page composition
  - Rewrite `app/page.tsx` to compose the new section order: `Hero`, `Partners`, `TrainingOptions`, `Webinars`, `Differentiators`, `Testimonials`, `CTABanner`. Remove imports for `Services`, `MeetInstructor`, `FeaturedProjects`, `Certifications`. Do not use `GalaxyBackground` or `section-barrier` classes. The page body uses a plain white background; each section manages its own background color.
  - _Requirements: 1.4, 12.1, 12.2, 12.3, 12.4_

- [x] 12. Checkpoint — landing page
  - Ensure all tests pass, ask the user if questions arise.

- [x] 13. Create CertificationCard component
  - Create `components/courses/CertificationCard.tsx`. Props: `cert: ExamPrepCourse`. White card with rounded corners, subtle border, hover shadow and lift (`hover:-translate-y-1 hover:shadow-md transition-all duration-300`). Vertically stacked: badge placeholder (72x72, styled with level color), level badge pill (Foundational: green, Associate: blue, Professional: deep blue, Specialty: amber), certification name, optional "View Outline" link with lucide `ExternalLink` icon when `cert.outlineUrl` exists. Badge image `onError` falls back to a styled placeholder showing the level abbreviation.
  - _Requirements: 10.3, 10.8_

- [x] 14. Create CertificationGroup component
  - Create `components/courses/CertificationGroup.tsx`. Props: `level: string`, `certs: ExamPrepCourse[]`. Section heading with the level name and a count badge (e.g., "Associate (6)"). Grid of `CertificationCard` components: `grid-cols-2 sm:grid-cols-3 md:grid-cols-4`.
  - _Requirements: 10.4_

- [x] 15. Replace Courses page
  - Rewrite `app/courses/page.tsx`. Page background `bg-[#F8FAFC]`. Header section (white): H1 "Exam Prep Courses", subheading "All 13 AWS certifications, grouped by level.", "AWS Authorized Training Partner" pill. Group `examPrepCourses` from `lib/data/courses.ts` by level and render four `CertificationGroup` sections (Foundational, Associate, Professional, Specialty) with alternating white / `#F0F9FF` backgrounds. CTA section (dark navy `#0F172A`): heading "Ready to start your certification journey?", subtext about enrolling or group pricing, "Get in Touch" button → `/consulting`. No "Coming Soon" placeholder.
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7_

- [x] 16. Checkpoint — courses page
  - Ensure all tests pass, ask the user if questions arise.

- [x] 17. Create LeadershipCard component
  - Create `components/about/LeadershipCard.tsx`. Props: `member: LeadershipMember` (from `lib/data/leadership.ts`). White card with subtle border. If `photoPath` is provided, render a rounded square photo; otherwise render an initials avatar (first letter of first name + first letter of last name) with a blue background. Name in dark navy, title in accent blue, bio in muted gray (2-4 sentences). Optional LinkedIn link at the bottom when `linkedinUrl` is present.
  - _Requirements: 11.1, 11.2_

- [x] 18. Create MissionVision component
  - Create `components/about/MissionVision.tsx`. Light blue background (`bg-[#F0F9FF]`). Two-column desktop layout (Mission left, Vision right), single column on mobile. Each column: colored top border, heading, statement text. Mission: "To accelerate the growth of professionals and organizations through technology training and cloud consulting that sets a high bar and delivers lasting results." Vision: "A future where every professional and every organization has the tools, skills, and support to grow without limits." Include the four values (Excellence, Client First, Integrity, Infinite Momentum) as a simple grid below the mission/vision columns.
  - _Requirements: 11.3_

- [x] 19. Replace About page
  - Rewrite `app/about/page.tsx`. Page background `bg-[#F8FAFC]`. Remove the personal hero, work experience timeline, founding year, and GitHub link. Sections in order: (1) company-focused hero/intro section (white), (2) `MissionVision` component (`#F0F9FF`), (3) Leadership section (white) with heading "Leadership" and two `LeadershipCard` components in `md:grid-cols-2`, (4) `Testimonials` carousel (`#F8FAFC`), (5) CTA section (dark navy `#0F172A`) with "Work with our team" heading and "Get in Touch" button → `/consulting`. Use the same `Color_System` and typography as the landing page.
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7_

- [x] 20. Checkpoint — about page
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 21. Set up testing framework and write unit tests
  - [x] 21.1 Install and configure testing dependencies
    - Install `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@vitejs/plugin-react`, and `jsdom` as dev dependencies. Create `vitest.config.ts` at the project root. Add a `test` script to `package.json`.
    - _Requirements: 1.3, 2.1_

  - [x] 21.2 Write unit tests for Navbar
    - Test: renders all 5 links in correct order. Test: "Get in Touch" CTA links to `/consulting`. Test: mobile menu hidden by default. Test: mobile menu opens on hamburger click.
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [ ]* 21.3 Write unit tests for Hero
    - Test: primary CTA links to `/consulting`. Test: secondary CTA links to `/courses`. Test: no LinkedIn, GitHub, or YouTube links rendered. Test: stats bar has at least 3 items.
    - _Requirements: 3.3, 3.4, 3.7_

  - [ ]* 21.4 Write unit tests for Partners
    - Test: all 5 partner names rendered. Test: text tile rendered when `logoPath` is undefined.
    - _Requirements: 4.1, 4.5_

  - [ ]* 21.5 Write unit tests for TrainingOptions
    - Test: exactly 3 training format cards rendered. Test: each card has a title, description, and CTA link. Test: "fly me a trainer" phrase not present.
    - _Requirements: 5.1, 5.2, 5.3_

  - [ ]* 21.6 Write unit tests for Webinars
    - Test: fallback message rendered when `webinars` array is empty. Test: YouTube channel link present in all states.
    - _Requirements: 6.3, 6.4_

  - [ ]* 21.7 Write unit tests for CertificationCard
    - Test: renders badge, certification name, and level pill. Test: "View Outline" link present when `outlineUrl` exists. Test: "View Outline" link absent when `outlineUrl` is undefined.
    - _Requirements: 10.3, 10.8_

  - [ ]* 21.8 Write unit tests for Courses page
    - Test: page heading is "Exam Prep Courses". Test: 13 certification cards rendered total. Test: cards grouped into 4 level sections.
    - _Requirements: 10.1, 10.2, 10.4_

  - [ ]* 21.9 Write unit tests for LeadershipCard
    - Test: renders name, title, and bio. Test: initials avatar rendered when `photoPath` is undefined. Test: photo rendered when `photoPath` is provided.
    - _Requirements: 11.1, 11.2_

  - [ ]* 21.10 Write unit tests for About page
    - Test: leadership section has exactly 2 cards. Test: Felix Mulei card present with correct title. Test: Pauline Namwakira card present with correct title. Test: no work experience timeline rendered. Test: no founding year text present.
    - _Requirements: 11.1, 11.4, 11.7_

  - [ ]* 21.11 Write unit tests for Footer
    - Test: YouTube and LinkedIn social links present. Test: GitHub social link absent. Test: copyright notice contains current year. Test: copyright notice contains "SentiBay Consulting".
    - _Requirements: 9.3, 9.4, 9.6_

- [ ] 22. Write property-based tests
  - [ ]* 22.1 Install fast-check
    - Install `fast-check` as a dev dependency.
    - _Requirements: 10.2, 10.4_

  - [ ]* 22.2 Write property test for certification data completeness
    - Using `fast-check`, generate arbitrary non-empty subsets of `examPrepCourses`. For each subset, render the Courses page and assert that every certification in the subset has a corresponding card in the output. No certification should be silently dropped.
    - **Property 1: Certification data completeness**
    - **Validates: Requirements 10.2, 10.3**

  - [ ]* 22.3 Write property test for certification grouping correctness
    - Using `fast-check`, generate arbitrary subsets of `examPrepCourses`. For each subset, render the Courses page and assert that all certifications with the same level value appear within the same rendered group section. No certification should appear in a group that does not match its level.
    - **Property 2: Certification grouping correctness**
    - **Validates: Requirements 10.4**

  - [ ]* 22.4 Write property test for em dash absence
    - Using `fast-check`, sample strings from all static data arrays (testimonials, differentiators, leadership bios, partner names, webinar descriptions, training option descriptions). Assert that no sampled string contains the em dash character (—).
    - **Property 3: Em dash absence**
    - **Validates: Requirements 1.7, 13.1**

  - [ ]* 22.5 Write property test for forbidden phrase absence
    - Using `fast-check`, sample strings from all static data arrays. Assert that no sampled string contains any of the forbidden phrases: "dive deep", "unlock your potential", "seamlessly", "leverage", "robust", "world-class", "cutting-edge", "best-in-class".
    - **Property 4: Forbidden phrase absence**
    - **Validates: Requirements 7.4, 13.2**

- [x] 23. Final checkpoint
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Checkpoints at tasks 12, 16, 20, and 23 ensure incremental validation
- Property tests (22.2-22.5) validate universal correctness properties across all data
- Unit tests validate specific examples and edge cases per component
- The `GalaxyBackground` component and `section-barrier` CSS class are removed from all redesigned pages; they may remain in other pages (consulting, training, projects) that are out of scope for this redesign
