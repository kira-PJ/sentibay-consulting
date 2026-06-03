# Requirements Document

## Introduction

SentiBay Consulting (operating under the KiraTechHub brand) needs a complete visual and content redesign of its website. The current site has a working Next.js 14 structure but lacks the professional polish, clear company positioning, and structured content layout needed to convert visitors into clients and students. This redesign covers the landing page, exam prep courses page, and about us page. It introduces a new blue-green-white color system, a Koenig-inspired section layout, and updated content that reflects the company's two-person leadership team and expanded technology partnerships.

## Glossary

- **Site**: The SentiBay Consulting website built with Next.js 14 (App Router) and Tailwind CSS.
- **Landing_Page**: The root page at `/` that serves as the primary entry point for all visitors.
- **Courses_Page**: The page at `/courses` renamed and redesigned as the Exam Prep Courses page.
- **About_Page**: The page at `/about` redesigned to reflect the two-person leadership team.
- **Navbar**: The sticky top navigation component shared across all pages.
- **Footer**: The bottom navigation and contact component shared across all pages.
- **Hero_Section**: The first visible section of the Landing_Page, above the fold.
- **Partners_Section**: The section on the Landing_Page displaying technology partner logos.
- **Training_Options_Section**: The section on the Landing_Page describing available training formats.
- **Webinar_Section**: The section on the Landing_Page promoting upcoming webinars.
- **Differentiators_Section**: The section on the Landing_Page explaining what makes SentiBay Consulting unique.
- **Testimonials_Section**: The section displaying client feedback on the Landing_Page and About_Page.
- **Color_System**: The set of brand colors used consistently across all pages.
- **Certification_Card**: A visual card component displaying one AWS certification badge, level, and name.
- **Leadership_Card**: A visual card component displaying one leadership team member's photo, name, and title.

---

## Requirements

### Requirement 1: Color System and Visual Identity

**User Story:** As a visitor, I want the site to feel professional and visually cohesive, so that I trust SentiBay Consulting as a credible training and consulting partner.

#### Acceptance Criteria

1. THE Color_System SHALL use shades of blue (primary: `#1E3A8A`, accent: `#3B82F6`), green (supporting: `#059669`, light: `#D1FAE5`), and white (`#FFFFFF`) as the three core color families.
2. THE Color_System SHALL define a light background variant (`#F0F9FF` or `#F8FAFC`) for alternating section backgrounds so adjacent sections are visually distinct without harsh contrast.
3. THE Site SHALL apply the Color_System consistently across all pages, components, and interactive states.
4. THE Site SHALL NOT use a pure black (`#000000`) background on any page section; dark sections SHALL use deep navy (`#0F172A` or `#1E3A8A`) instead.
5. WHEN a user hovers over a button or card, THE Site SHALL respond with a smooth color or elevation transition of no more than 300ms.
6. THE Site SHALL use the Inter font family for all body text and headings, loaded via the existing Next.js font setup.
7. THE Site SHALL NOT use em dashes anywhere in visible text content; simple commas, colons, or new sentences SHALL be used instead.

---

### Requirement 2: Navbar Redesign

**User Story:** As a visitor, I want a clear and easy-to-use navigation bar, so that I can find any section of the site quickly.

#### Acceptance Criteria

1. THE Navbar SHALL display the SentiBay Consulting logo on the left and navigation links on the right on desktop viewports (768px and above).
2. THE Navbar SHALL include the following links in order: Home, About Us, Exam Prep Courses, Corporate Training, Consulting.
3. THE Navbar SHALL display a visually distinct call-to-action button labeled "Get in Touch" that links to `/consulting`.
4. WHEN the viewport is below 768px, THE Navbar SHALL collapse all links into a hamburger menu that expands on tap.
5. THE Navbar SHALL remain sticky at the top of the viewport while the user scrolls.
6. THE Navbar SHALL use a white or light background with a subtle bottom border, NOT a dark or transparent background.

---

### Requirement 3: Hero Section

**User Story:** As a first-time visitor, I want to immediately understand what SentiBay Consulting does, so that I can decide whether the site is relevant to me.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a headline that clearly states the company's core value proposition in plain English, without jargon or AI-generated phrasing.
2. THE Hero_Section SHALL display a supporting subheadline of no more than two sentences that describes who the company serves.
3. THE Hero_Section SHALL display two call-to-action buttons: a primary button linking to `/consulting` and a secondary button linking to `/courses`.
4. THE Hero_Section SHALL display a statistics bar showing at minimum: number of students trained, number of AWS certifications held, and years of experience.
5. THE Hero_Section SHALL use a visually appealing background that combines the Color_System blues and greens, avoiding a plain white or plain dark background.
6. THE Hero_Section SHALL be fully responsive and readable on viewports from 320px to 1440px wide.
7. THE Hero_Section SHALL NOT include personal social media links (LinkedIn, GitHub, YouTube) in the hero area; those belong in the Footer.

---

### Requirement 4: Technology Partners Section

**User Story:** As a prospective client, I want to see which technology platforms SentiBay Consulting works with, so that I can confirm they cover the tools my team uses.

#### Acceptance Criteria

1. THE Partners_Section SHALL display logos or named tiles for the following five partners: AWS, Google Cloud, Databricks, Barracuda Email Security, and Microsoft Fabric.
2. THE Partners_Section SHALL display a section heading such as "Technology Partners" or "Trusted Platforms".
3. THE Partners_Section SHALL arrange partner logos in a single horizontal row on desktop and wrap gracefully on mobile.
4. THE Partners_Section SHALL use a light background to visually separate it from the Hero_Section above.
5. WHEN a partner logo is not available as a local asset, THE Partners_Section SHALL display the partner name in a styled text tile as a fallback.

---

### Requirement 5: Training Options Section

**User Story:** As a prospective student or corporate buyer, I want to understand the different ways I can train with SentiBay Consulting, so that I can choose the format that fits my situation.

#### Acceptance Criteria

1. THE Training_Options_Section SHALL display at least three distinct training formats as separate cards or tiles.
2. THE Training_Options_Section SHALL include the following formats: Live Virtual Training, Corporate On-Site Training, and Self-Paced Exam Prep.
3. THE Training_Options_Section SHALL NOT include a "fly me a trainer" option or any equivalent phrasing.
4. EACH training format card SHALL include a title, a short description of two to three sentences, and a call-to-action link.
5. THE Training_Options_Section SHALL use a heading such as "How We Train" or "Training Formats".
6. THE Training_Options_Section SHALL be fully responsive, displaying cards in a single column on mobile and two or three columns on desktop.

---

### Requirement 6: Webinar Section

**User Story:** As a visitor, I want to see upcoming webinars, so that I can register and learn from SentiBay Consulting's free content.

#### Acceptance Criteria

1. THE Webinar_Section SHALL display a section heading such as "Upcoming Webinars" or "Free Learning Sessions".
2. THE Webinar_Section SHALL display at least one webinar card containing a title, a short description, and a registration or YouTube link.
3. WHEN no upcoming webinars are scheduled, THE Webinar_Section SHALL display a message directing visitors to the YouTube channel for recorded sessions.
4. THE Webinar_Section SHALL include a link to the SentiBay Consulting YouTube channel.
5. THE Webinar_Section SHALL use a visually distinct background color from the Training_Options_Section directly above it.

---

### Requirement 7: Differentiators Section

**User Story:** As a prospective client, I want to understand what makes SentiBay Consulting different from other training providers, so that I can justify choosing them.

#### Acceptance Criteria

1. THE Differentiators_Section SHALL display a section heading such as "Why SentiBay Consulting" or "What Sets Us Apart".
2. THE Differentiators_Section SHALL list at least four distinct differentiators as separate cards or list items.
3. EACH differentiator SHALL include a short title and a one to two sentence explanation written in plain, human English.
4. THE Differentiators_Section SHALL NOT use vague marketing phrases such as "world-class", "cutting-edge", or "best-in-class".
5. THE Differentiators_Section SHALL reference concrete facts where available, such as certification pass rates, number of students trained, or specific industry sectors served.

---

### Requirement 8: Testimonials Section on Landing Page

**User Story:** As a prospective student, I want to read feedback from past students, so that I can trust that the training is effective.

#### Acceptance Criteria

1. THE Testimonials_Section SHALL display at least three client or student testimonials on the Landing_Page.
2. EACH testimonial SHALL include the student's name, a short quote, and optionally their role or company.
3. THE Testimonials_Section SHALL use a visually distinct card or quote layout that is easy to read.
4. THE Testimonials_Section SHALL use a section heading such as "What Our Students Say" or "Client Feedback".
5. THE Testimonials_Section SHALL be responsive, displaying one card per row on mobile and two or three per row on desktop.

---

### Requirement 9: Footer Redesign

**User Story:** As a visitor at the bottom of any page, I want quick access to key links and contact information, so that I can navigate or reach out without scrolling back to the top.

#### Acceptance Criteria

1. THE Footer SHALL display the SentiBay Consulting logo and a one-sentence description of the company.
2. THE Footer SHALL include navigation links grouped into at least two columns: one for site pages and one for services or resources.
3. THE Footer SHALL display social media icons linking to YouTube and LinkedIn.
4. THE Footer SHALL display a copyright notice with the current year and the company name.
5. THE Footer SHALL use a dark navy background (`#0F172A` or `#1E3A8A`) with white or light-colored text.
6. THE Footer SHALL NOT include GitHub as a social link; only YouTube and LinkedIn are required.

---

### Requirement 10: Exam Prep Courses Page

**User Story:** As a prospective student, I want to browse all AWS certification prep courses in one place, so that I can find the right certification path for my career goals.

#### Acceptance Criteria

1. THE Courses_Page SHALL display the page title "Exam Prep Courses" as the primary heading, NOT "Courses".
2. THE Courses_Page SHALL display all 13 AWS certifications that Pauline holds as Certification_Cards.
3. EACH Certification_Card SHALL display the certification badge image, the certification name, and the certification level (Foundational, Associate, Professional, or Specialty).
4. THE Courses_Page SHALL group Certification_Cards by level: Foundational, Associate, Professional, and Specialty.
5. THE Courses_Page SHALL use a light background with the Color_System blues and greens for card accents, avoiding a dark background.
6. THE Courses_Page SHALL include a call-to-action section at the bottom inviting visitors to contact SentiBay Consulting to enroll or get more information.
7. THE Courses_Page SHALL NOT display a "Coming Soon" placeholder; it SHALL show the full certification catalog.
8. WHEN a certification has an associated course outline URL, THE Certification_Card SHALL display a link to that outline.

---

### Requirement 11: About Us Page Redesign

**User Story:** As a prospective client or student, I want to learn about the people behind SentiBay Consulting, so that I can decide whether to trust them with my training or consulting needs.

#### Acceptance Criteria

1. THE About_Page SHALL display a "Leadership" section containing exactly two Leadership_Cards: one for Felix Mulei (CEO and Founder) and one for Pauline Namwakira (Co-Founder and Senior Technical Trainer).
2. EACH Leadership_Card SHALL display the person's name, title, and a short professional bio of two to four sentences.
3. THE About_Page SHALL display a "Mission and Vision" section containing the company mission statement and vision statement.
4. THE About_Page SHALL NOT display a founding year, a detailed company history, or excessive background details.
5. THE About_Page SHALL display a Testimonials_Section with at least three student feedback quotes.
6. THE About_Page SHALL use the same Color_System and typography as the Landing_Page for visual consistency.
7. THE About_Page SHALL NOT display a work experience timeline or a list of past employers.

---

### Requirement 12: Responsive Design

**User Story:** As a visitor on any device, I want the site to look and work well on my screen, so that I can browse without layout issues.

#### Acceptance Criteria

1. THE Site SHALL be fully functional and visually correct on viewport widths of 320px, 768px, and 1280px.
2. WHEN the viewport is below 768px, THE Site SHALL display all multi-column grid layouts as single-column stacks.
3. THE Site SHALL NOT display horizontal scroll bars on any page at any supported viewport width.
4. THE Site SHALL use Tailwind CSS responsive prefixes (`sm:`, `md:`, `lg:`) exclusively for all responsive layout rules; no CSS modules or inline styles SHALL be used for layout.

---

### Requirement 13: Content and Language Standards

**User Story:** As a visitor, I want to read content that sounds natural and human, so that I feel like I am engaging with real people rather than a marketing bot.

#### Acceptance Criteria

1. THE Site SHALL NOT use em dashes in any visible text content across all pages and components.
2. THE Site SHALL NOT use AI-generated filler phrases such as "dive deep", "unlock your potential", "seamlessly", "leverage", or "robust".
3. THE Site SHALL use plain, direct English in all headings, descriptions, and calls to action.
4. THE Site SHALL use "SentiBay Consulting" as the primary brand name in all body copy and headings.
5. THE Site SHALL use "KiraTechHub" only in contexts where it refers specifically to the YouTube channel or the original brand identity.
6. WHEN referring to the company's training services, THE Site SHALL use clear, specific language such as "AWS certification prep", "corporate cloud training", or "live virtual training" rather than generic terms like "solutions" or "offerings".
