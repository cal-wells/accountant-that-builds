---
name: The Accountant That Builds
description: Personal portfolio for an FP&A Manager and Chartered Accountant who builds with AI and code
colors:
  primary: "#2563eb"
  primary-dark: "#1d4fd7"
  secondary: "#4f46e5"
  danger: "#dc2626"
  ink: "#0a0a0a"
  muted: "#5b6168"
  surface: "#ffffff"
  background: "#fafafa"
  border: "#ECECE7"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Inter, sans-serif"
    fontSize: "clamp(3rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Bricolage Grotesque, Inter, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Bricolage Grotesque, Inter, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  lg: "8px"
  card: "16px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "#ffffff"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "24px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
---

# Design System: The Accountant That Builds

## 1. Overview

**Creative North Star: "Quiet Confidence"**

The system is built for a finance hiring manager skimming for 30 seconds: it has to read as credible and modern within the first glance, and stay legible without any technical literacy. The look is fintech-clean - generous white space, a true neutral off-white canvas, one confident cobalt-blue accent, and a characterful-but-professional grotesque for headings. Restraint carries the credibility; a single accent and a couple of soft ambient glows carry the personality.

It explicitly rejects four things: the generic AI-template aesthetic, scary/stuffy corporate finance (navy-and-gold, big-bank formality), the developer-experiment / terminal-flavoured look, and cluttered busy layouts. The proof of skill is the build quality itself, so the design's job is to feel intentional and effortless, never to shout.

**Key Characteristics:**
- True neutral off-white canvas (`#fafafa`), not warm "paper"
- One cobalt-blue accent doing all the work; indigo as a supporting tone
- Bricolage Grotesque headings + Inter body: distinctive, not the AI-default pairing
- Generous space, soft shadows, 16px-radius cards; nothing fights for attention
- Motion is subtle and always respects `prefers-reduced-motion`

## 2. Colors

A near-monochrome canvas with a single decisive cobalt accent; indigo supports, everything else is neutral ink.

### Primary
- **Cobalt Blue** (`#2563eb`): The brand accent (Chelsea-inspired). Carries CTAs, links, the eyebrow accent rule, the accented word in the tagline, focus rings, "In Progress" badges, and the hero's ambient glow. Hover/active deepens to **Cobalt Deep** (`#1d4fd7`).

### Secondary
- **Indigo** (`#4f46e5`): A supporting tone, never the lead. "Planned" project badges and the second hero glow. Sits in the same blue/purple family as the primary so the palette reads as one voice.

### Tertiary
- **Danger Red** (`#dc2626`): Form validation errors only (message text and invalid input borders). Never decorative.

### Neutral
- **Ink** (`#0a0a0a`): Primary text and headings.
- **Muted** (`#5b6168`): Secondary text, captions, body prose on the canvas (AA contrast verified).
- **Surface** (`#ffffff`): Cards and raised elements, one step brighter than the canvas.
- **Background** (`#fafafa`): The page canvas. True neutral off-white.
- **Border** (`#ECECE7`): Hairlines and dividers only.

### Named Rules
**The One Accent Rule.** Cobalt is the only attention colour. If a second hue is competing with it on a screen, the screen is wrong. Indigo supports; it never leads.

**The No-Navy Rule.** The blue is a bright, modern cobalt, never a dark corporate navy. Navy-and-gold is the scary-finance cliché this brand rejects.

## 3. Typography

**Display Font:** Bricolage Grotesque (with Inter, sans-serif fallback)
**Body Font:** Inter (with ui-sans-serif, system-ui fallback)

**Character:** A contemporary grotesque with genuine character for headings, paired with the clean neutral workhorse Inter for body. The pairing is deliberately *not* the Space-Grotesk-plus-Inter AI default; Bricolage gives the headings personality while staying professional.

### Hierarchy
- **Display** (700, `clamp(3rem, 6vw, 4.5rem)`, 1.05, -0.02em): The hero name only. `text-wrap: balance`.
- **Heading** (700, `clamp(1.5rem, 3vw, 2.25rem)`, 1.1, -0.02em): Section and page titles (H1/H2).
- **Body** (400, 1.125rem, 1.6): Prose. Capped around 65-75ch via `max-w-2xl` for readability. `text-wrap: pretty`.
- **Label** (600, 0.875rem, 0.1em tracking, UPPERCASE): The eyebrow line ("Group FP&A Manager · ICAS Chartered Accountant") and small kickers only.

### Named Rules
**The One Eyebrow Rule.** Uppercase tracked labels appear once (the hero eyebrow), never above every section. Repeated eyebrows are AI scaffolding.

## 4. Elevation

The system is mostly flat with soft, diffuse elevation reserved for cards and the headshot. Depth is conveyed by a one-step surface lift (`#ffffff` cards on a `#fafafa` canvas) plus gentle shadows, not by heavy borders or hard drop-shadows. The hero's sense of depth comes from blurred ambient colour glows behind the content, not from a panel or glass effect.

### Shadow Vocabulary
- **Soft** (`box-shadow: 0 1px 2px rgb(10 10 10 / 0.04), 0 8px 24px rgb(10 10 10 / 0.06)`): Resting state for cards, buttons, the headshot.
- **Lift** (`box-shadow: 0 2px 4px rgb(10 10 10 / 0.05), 0 16px 40px rgb(10 10 10 / 0.1)`): Hover state for project cards and the headshot's standing elevation.

### Named Rules
**The Soft-Only Rule.** Shadows are large, soft, and low-opacity. Never a tight, dark 2014-style drop shadow. If the shadow has a hard edge, it's wrong.

## 5. Components

### Buttons
- **Shape:** Fully rounded pill (`9999px`).
- **Primary:** Cobalt background, white text, `12px 24px` padding, soft shadow. The hero's "View my CV".
- **Secondary / Ghost:** White surface, ink text, hairline border; border darkens slightly on hover. The hero's "See my projects".
- **Hover / Focus:** Primary deepens to cobalt-deep; all interactive elements show the global focus ring (see Inputs).

### Cards
- **Corner Style:** 16px radius (`rounded-card`).
- **Background:** White surface on the off-white canvas.
- **Shadow Strategy:** Soft at rest, Lift on hover (project cards).
- **Border:** 1px hairline (`#ECECE7`).
- **Internal Padding:** 24px.
- Project cards carry a status badge (cobalt tint = In Progress, indigo tint = Planned, ink tint = Live) and a conditional link ("Visit site" / "View code") only when a URL exists.

### Inputs / Fields
- **Style:** White surface, 1px border, 8px radius, `12px 16px` padding.
- **Focus:** Border shifts to cobalt; plus the global focus-visible ring.
- **Error:** Border turns danger-red, with an inline per-field message beneath in danger-red and `aria-invalid` / `aria-describedby` wired up.
- **Global focus ring:** `outline: 2px solid #2563eb; outline-offset: 2px` on every interactive element.

### Navigation
- **Style:** Sticky, translucent backdrop-blurred header with a hairline bottom border. Brand wordmark left, links right.
- **States:** Active route in cobalt semibold; inactive muted, darkening to ink on hover.
- **Mobile:** Links collapse behind a hamburger; tapping opens a full overlay menu that closes on link tap, outside tap, and Escape (`aria-expanded` toggled).

### Motion
- **Reveal:** Content fades and slides up once as it scrolls into view (`whileInView`, fires once).
- **Page transition:** A short enter animation on every route change, driven by `app/template.tsx`.
- All motion is disabled under `prefers-reduced-motion`.

## 6. Do's and Don'ts

### Do:
- **Do** keep cobalt (`#2563eb`) as the single accent; let indigo only support.
- **Do** use Bricolage Grotesque for headings and Inter for body, with weight/scale contrast for hierarchy.
- **Do** keep the canvas a true neutral off-white (`#fafafa`) and lift surfaces one step to white.
- **Do** keep soft, low-opacity shadows and 16px card radii.
- **Do** translate technical capability into finance-native outcomes in copy (faster reporting, sharper forecasting).
- **Do** keep every interactive element keyboard-focusable with the cobalt focus ring, and honour reduced motion.

### Don't:
- **Don't** drift toward the generic AI-template look (the default AI-generated aesthetic).
- **Don't** use dark corporate navy-and-gold or big-bank/Big-4 formality.
- **Don't** lean terminal-flavoured, monospace-as-costume, or jargon-heavy "built by an engineer" styling.
- **Don't** clutter: no busy layouts, no second competing accent colour, no eyebrow label above every section.
- **Don't** use hard 2014-style drop shadows, gradient text, glassmorphism, or side-stripe (`border-left`) accents.
