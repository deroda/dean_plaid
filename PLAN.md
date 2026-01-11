# Plaid Cymru Candidate Website Plan

## 1. Brand Identity Integration
Based on the **Plaid Cymru Brand Guidelines**, the website will utilize the refreshed visual language to ensure consistency with the national campaign.

### Color Palette
- **Primary Greens:**
  - Vibrant Green: `#0aa77d`
  - Mid Green: `#008672`
  - Dark Green: `#075d55`
  - Deep Forest: `#043932`
- **Secondary/Highlight Colors:**
  - Campaign Yellow: `#ffe200` (Used for the Welsh Poppy and Primary CTAs)
  - Campaign Red: `#e1573e` (Used for critical alerts or secondary highlights)

### Typography
- **Primary Font:** **Roboto** (Google Fonts)
  - **Roboto Black:** Used for impactful headings and campaign slogans.
  - **Roboto Regular:** Used for body text and descriptive content.
- **Styling:** Key campaign headings may feature a **-12° vertical shear** to mirror the official campaign logo construction.

---

## 2. Website Structure & Sitemap

### [Page 1] Home (The Landing)
- **Hero Section:**
  - High-impact candidate photo in a local Welsh context.
  - Headline: "Standing up for [Constituency]" (Roboto Black).
  - Primary CTA: "Join the Campaign" (Yellow Button).
- **Mission Statement:** A brief "Pro-Wales" message emphasizing fairness and change.
- **Latest News:** A grid of the latest 3 updates/blog posts.
- **Newsletter Signup:** Integrated "Stay Updated" section.

### [Page 2] About [Candidate Name]
- **Biography:** Personal story, professional background, and connection to the community.
- **Values:** Why they are standing for Plaid Cymru.
- **Gallery:** Photos of the candidate engaging with the community.

### [Page 3] Our Priorities
- **Interactive Grid:** 4-6 key policy areas (e.g., Fair Funding, Healthcare, Local Economy).
- **Icons:** Custom icons using the Green/Yellow brand colors.
- **Details:** Deep dive into how Plaid Cymru's policies benefit the local area.

### [Page 4] Get Involved (Volunteer/Donate)
- **Donation Tiers:** Quick-select buttons for campaign contributions.
- **Volunteer Form:** Sign-up for leafleting, door-knocking, or digital support.
- **Events Calendar:** Upcoming town halls and meetups.

### [Page 5] Contact
- Direct contact form.
- Social media links (using `@plaidcymruwales` style integration).
- Office address and contact details.

---

## 3. Technical Implementation Plan

### Phase 1: Foundation
- **Tech Stack:** Vite + React + Vanilla CSS (for premium, custom aesthetics).
- **Project Setup:** Initialize repository and setup folder structure (`/components`, `/assets`, `/pages`).
- **Design System:** Implement CSS variables for all brand colors and typography.

### Phase 2: Design & UI
- **Aesthetic:** Modern, "Glassmorphism" touches on cards over dark green backgrounds.
- **Animations:** Subtle scroll-reveal animations for policy points.
- **Responsiveness:** Mobile-first approach, ensuring readability on all devices.

### Phase 3: Content & Assets
- Generate candidate-specific assets (using `generate_image` for placeholder illustrations if needed).
- Write compelling, brand-aligned copy.

### Phase 4: Final Polish & SEO
- Implement meta descriptions and OpenGraph tags for social sharing.
- Verify accessibility (contrast ratios for Yellow/Green combinations).

---

## 4. Design Mockup Strategy
I will proceed by building the **Home Page** first to establish the visual language.
- Use a **Sticky Navigation Bar** with the Plaid Cymru logo.
- Hero section will feature a gradient transition from `#008672` to `#043932`.
- Primary "Donate" button will use `#ffe200` with black text for maximum visibility.
