# CHICADANCE Sales Page — PRD

## Original Problem Statement
Build a bold, colorful, fun, scrollable landing/offer page driving to the founder's Skool community. Detailed attached brief ("One Shot Framework 2: Adina") specifies full copy, structure, palette, guardrails, and conversion strategy for CHICADANCE, an online K-pop dance academy by Adina De Bezenac.

## User Personas
- Aspiring K-pop dancers (teens/young adults) worldwide who want structured training, technique feedback, and audition preparation without living in Korea.

## Core Requirements (static)
- Single conversion goal: all CTAs open https://www.skool.com/chicadi-7006 in a new tab (rel="noopener noreferrer").
- Offers: Trainee Track $20/mo (primary), Community $5/mo (secondary).
- Claim guardrails: no agency affiliation implied, no audition/debut guarantees, no invented testimonials. 1,500+ members is the only proof point.
- Palette: #415AB6, #D395FF, #9CDAFF, #38B6FF, #AD4BAD on deep ink #06060F.
- Copy from the brief used verbatim across all sections.

## Architecture
- Frontend-only React landing page (`/app/frontend`). Backend untouched (default FastAPI hello).
- `src/pages/Landing.jsx` composes 13 section components in `src/components/landing/`.
- `src/lib/constants.js` holds SKOOL_URL + 3 uploaded brand image URLs (hero dancers, CHICA DANCE card, K-POP DANCING card).
- Fonts: Archivo Black (display, skewed) + Outfit (body) via Google Fonts in `public/index.html`.
- Motion: framer-motion (masked line reveals, parallax hero, choreography-style card entrances), Lenis smooth scroll (anchors: true), CSS marquees, beat-dot pulses. All respect prefers-reduced-motion.

## Implemented (June 2026)
- Sticky glass header w/ nav (The Track, Meet Adina, Membership, FAQ), mobile menu, join CTAs.
- Kinetic hero: parallax brand image, masked headline reveal, 5-6-7-8 count markers, Trainee Mode badge, dual CTAs, trust strip.
- Editorial marquee (x2), Problem (3 tilted cards), Before/After Shift, 3-step Training Loop, Founder story + credibility ribbon + disclaimer footnote, Offer cards, Community proof (1,500+, image collage), Audition readiness + qualifier, FAQ accordion (8 Q&A), Final CTA, Footer with legal disclaimer + adinadebez@gmail.com.
- SEO: title, meta description, OG/Twitter cards.
- Verified: fonts loaded, CTAs correct, mobile menu, FAQ accordion, no horizontal overflow (390px + 1920px).
- Update (June 2026): Real founder photo of Adina in founder section; 4 uploaded dancer photos as transparent backgrounds behind each audition step (warm-up=studio floor, technical drill=hero dancers, choreography=green screen shoot, performance=stage set); tilted "FROM PRACTICE TO STAGE" pop image in the Shift section. Image URLs in `src/lib/constants.js`.
- Update (July 2026): Global-community block under section 07 (Audition) — "Join dancers from all over the world" heading + tagline + real Skool member world map (IMG.worldMap, `d0op09y9_image.png`). Instagram grid was added then REMOVED per user (June 2026 fork): `InstagramFeed.jsx` deleted, INSTA_GRID removed from constants; INSTAGRAM_URL kept (Footer).
- Update (June 2026 fork): Hero compacted to fit fully above the fold at 1920x800 (h-screen, smaller type/margins; trust strip bottom 760/800). Founder section 04 (792px) and Offer section 05 (776px) each compacted to fit one viewport scroll. Intro video added in section 06 (Community) directly under "Meet the CHICADANCE Community" button: `INTRO_VIDEO_URL` ("HOW TO TRAIN LIKE A K-POP TRAINEE FROM HOME!.mp4") rendered as native <video controls> with data-testid="community-intro-video". All verified via screenshot automation.
- Update (June 2026 fork, pt 2): Video poster added — frame extracted from mp4 at 10s via imageio-ffmpeg, saved as `/app/frontend/public/intro-video-poster.jpg`, set as `poster` on the intro video. Member-count overlay badge ("1,500+ DANCERS / Across 40+ countries", data-testid="global-community-count-overlay") added bottom-left over the world map in Audition.jsx. Both verified via screenshots.
- Update (June 2026 fork, pt 3): (1) FinalCta ("YOUR NEXT COUNT STARTS NOW") background swapped to custom AI image `IMG.finalCtaTraining` (kpop girls training in a studio, navy/blue/purple palette); overlay lightened to /70. (2) Section 07 (Audition) step-card images brightened opacity-30→60 with adjusted bottom gradient (labels still readable). (3) Section 06 (Community) collage images now fly in from left/right + badge scales in (motion.div with x/rotate); intro video REMOVED from Community. (4) New standalone `IntroVideo.jsx` section placed between Community and Audition — video (with poster) beside 4 "reasons to watch" + "Join and start training" CTA. (5) Extra Join CTAs added: intro-video-cta + audition-cta (data-testids). Reveal.jsx extended with optional `x` prop. All verified via screenshot automation.

## Pending / Backlog
- P1: Replace hero image with real muted training video loop (with pause control) when footage is supplied.
- P1: Real testimonials section when approved quotes are supplied.
- P2: Email lead-capture module (skipped by user choice — requires email service).
- P2: Analytics CTA-source tracking (no analytics tool configured).
