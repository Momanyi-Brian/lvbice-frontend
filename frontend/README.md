# Lake Victoria Basin International Conference & Exhibition 2026 Website

## Overview

This project is the official website for the **Lake Victoria Basin International Conference and Exhibition 2026**, themed:

> **Harnessing Innovation and Emerging Technologies for Sustainable Development in the Lake Victoria Basin**

## Project Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

---

## ✅ Recommended File Structure (Next.js + shadcn + GSAP)

```bash
lvbice-2026/
│
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
│
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── logo.png
│   │   ├── speakers/
│   │   └── sponsors/
│   │
│   ├── icons/
│   └── videos/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx                # Homepage
│   ├── globals.css
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── programme/
│   │   └── page.tsx
│   │
│   ├── speakers/
│   │   └── page.tsx
│   │
│   ├── exhibition/
│   │   └── page.tsx
│   │
│   ├── registration/
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   └── api/
│       └── register/
│           └── route.ts
│
├── components/
│   ├── ui/                     # shadcn components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── navbar.tsx
│   │   └── accordion.tsx
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ThemeTracks.tsx
│   │   ├── SpeakersPreview.tsx
│   │   ├── ScheduleSection.tsx
│   │   ├── SponsorsSection.tsx
│   │   └── CTASection.tsx
│   │
│   └── animations/
│       ├── fadeUp.ts
│       ├── scrollReveal.ts
│       └── heroIntro.ts
│
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   └── gsap.ts
│
├── data/
│   ├── speakers.ts
│   ├── schedule.ts
│   ├── sponsors.ts
│   └── tracks.ts
│
└── hooks/
    ├── useScrollAnimation.ts
    └── useMobileMenu.ts
```
