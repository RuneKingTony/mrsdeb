---
name: Amare Kharis
description: A black-and-gold fashion flagship set in wide grotesk capitals for a discreet executive and concierge service.
colors:
  ink: "#1b1b1b"
  ink-raised: "#2b2b2b"
  ink-deep: "#141414"
  gold: "#ca8a04"
  gold-bright: "#dfa21c"
  bone: "#f4efe4"
  stone: "#a8a29e"
  line: "rgba(244, 239, 228, 0.14)"
  line-strong: "rgba(244, 239, 228, 0.28)"
  line-field: "rgba(244, 239, 228, 0.42)"
  error-rule: "#e2725b"
  error-text: "#f0a08e"
typography:
  display-xl:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 7.4vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 125"
  display-l:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 4.4vw, 3.75rem)"
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 125"
  display-m:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2.4vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 125"
  index-name:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 125"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  body-lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0"
  action:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    letterSpacing: "0"
  wordmark:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 125"
  monogram:
    fontFamily: "Ballet, cursive"
    fontSize: "2.1rem"
    lineHeight: 1
rounded:
  none: "0px"
  pill: "999px"
spacing:
  shell-gutter: "clamp(1rem, 4vw, 3.5rem)"
  shell-max: "88rem"
  nav-height: "4.5rem"
  grid-gap: "32px"
  row-sm: "24px"
  row-md: "32px"
  section-sm: "96px"
  section-md: "144px"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "0 1.75rem"
    height: "3.25rem"
  button-gold-hover:
    backgroundColor: "{colors.gold-bright}"
  button-gold-active:
    backgroundColor: "{colors.bone}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "0 1.75rem"
    height: "3.25rem"
  button-line-active:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
  nav-pill:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  link-rule:
    textColor: "{colors.bone}"
    typography: "{typography.action}"
    padding: "0.4rem 0"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0"
  index-row:
    textColor: "{colors.bone}"
    typography: "{typography.index-name}"
    padding: "32px 0"
  index-row-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
  gold-band:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.display-l}"
    padding: "112px 0"
---

# Design System: Amare Kharis

## Overview

**Creative North Star: "The Black-and-Gold Flagship"**

The site behaves like a fashion house's flagship on an ink ground, spoken in one voice: Archivo, stretched to its widest cut for uppercase headlines and set at normal width for everything a visitor reads. Full-bleed photography opens the site with the name set in heavy capitals across the bottom of the frame. Below the hero, wide dark space, hairline-ruled indexes and one solid band of gold carry the brand. There are no serifs, no italics and no tracked-caps labels, so the site cannot be confused with a cloth-and-foil sister brand.

Density is low and deliberate. Sections breathe on a 12-column grid with long vertical runs (96px mobile, 144px desktop). Headlines sit left, supporting copy is pushed right, and every page ends in a direct human channel. Actions are soft pills. Content structure stays square and ruled. Motion is slow and eased (`cubic-bezier(0.16, 1, 0.3, 1)`): mask-up headline reveals, a 7-second look-to-look crossfade behind the name, and index rows that fill with gold from the left.

**Key Characteristics:**
- Ink ground (`ink`) with bone text. Gold marks actions and accents, plus one solid gold band per page.
- One family, Archivo: wide (125%) heavy uppercase for display, normal width in sentence case for reading.
- Pill-shaped actions against square, hairline-ruled content.
- Every photograph passes through one shared warm grade.
- Typographic indexes and ruled lists replace cards.

## Colors

A pinned two-note palette: warm near-black grounds and one deep gold, with bone and stone carrying the text.

### Primary
- **Flagship Gold** (`gold`): the primary action fill (WhatsApp buttons and form submit), the solid skills band, active nav underline, the slideshow progress bar, the short accent phrases (the hero tagline, "with precision and reliability"), the monogram "A", selection, focus outlines, and the full-row fill of the business index on hover. Anything set on gold is `ink`.
- **Lit Gold** (`gold-bright`): hover state of the gold button only.

### Neutral
- **Ink** (`ink`): the page ground, solid nav, mobile menu, footer, and the text colour on gold.
- **Raised Ink** (`ink-raised`): the ground behind the hero photographs while they load.
- **Deep Ink** (`ink-deep`): the deepest step of the ground. It is defined as a token but rarely painted.
- **Bone** (`bone`): primary text, headlines, line-button text, the active state of buttons.
- **Stone** (`stone`): secondary copy, ledes beside titles, inactive nav, form labels, icons at rest.
- **Hairline** (`line`): section dividers, index and list rules, aside borders, footer rules.
- **Strong Hairline** (`line-strong`): line-button and nav-pill borders, link-rule base line, the hero's divider rule, slideshow tracks.
- **Field Hairline** (`line-field`): the input underline, set at the opacity that clears 3:1 against ink.
- **Error Rule / Error Text** (`error-rule`, `error-text`): an invalid field's underline and its message. The message uses the lighter tint so it stays legible on ink.

### Named Rules
**The One Gold Field Rule.** Gold fills one action per view and at most one full-width band per page (the skills band). On top of that, only the index row's hover fill may paint gold. Gold text is limited to short accent phrases and links, never paragraphs.

**The Ink Ground Rule.** There is no light mode and no white panel. Depth comes from photography, hairlines and the single gold band, not from lighter surfaces.

## Typography

**Display and Body Font:** Archivo (variable, width 62–125, weight 300–800; fallback system-ui, sans-serif)
**Monogram:** Ballet (cursive), used only for the wordmark "A"

**Character:** A single grotesk used in two widths. Headings run at 125% width (`font-stretch: 125%`), heavy and in capitals, so they read like a fashion masthead. Body, labels and buttons stay at normal width in sentence case, which keeps them calm. Emphasis comes from weight and gold, never italics.

### Hierarchy
- **Display XL** (700, 125% width, uppercase, `clamp(2rem, 7.4vw, 6rem)`, 0.92, -0.025em): page titles and the closing "Need to know more?". The hero name is the same style at `clamp(2.75rem, 9.4vw, 6rem)` and rises out of a mask line by line.
- **Display L** (650, 125% width, uppercase, `clamp(1.5rem, 4.4vw, 3.75rem)`, 0.98): section titles (Businesses, Professional services) and the rows of the gold skills band.
- **Display M** (600, 125% width, sentence case, `clamp(1.375rem, 2.4vw, 2rem)`, 1.15): sub-section and aside headings, and the skills band title.
- **Index Name** (600, 125% width, uppercase, 1.25rem mobile to 1.875rem desktop, -0.01em): business names in the index and in the mobile menu (1.875rem).
- **Lede** (500, normal width, 1.5 to 1.625rem mobile, 2.25 to 2.75rem desktop, 1.15 to 1.3): the single statement paragraph that opens Home and About, offset into the grid. Its closing phrase may turn gold.
- **Body** (400, 1.0625rem, 1.65): running text. Long-form service copy is held to 68ch.
- **Body Lead** (400, 1.125rem, 1.25rem on desktop, `stone`): introductory paragraphs beside titles, 24 to 38rem wide.
- **Label** (500, 0.875rem, sentence case, no tracking): nav links, form labels, channel names, footer headings.
- **Action** (600, 0.9375rem, sentence case): button and rule-link text.

### Named Rules
**The Two Widths Rule.** Display and index names are 125% wide. Everything people read in sentences is 100% wide. The wordmark (wide, uppercase, 0.08em tracking) is the only tracked text.

**The No Italic Rule.** Nothing is italic. Emphasis is weight or gold.

**The Monogram Only Rule.** Ballet appears once per wordmark, as the gold "A".

## Layout

A single `shell` container (max 88rem, side padding `clamp(1rem, 4vw, 3.5rem)`) holds a 12-column grid with a 32px gutter from `md` (768px) up. Below that, everything stacks. Compositions are asymmetric: the title spans columns 1 to 7 and supporting copy is pushed to 8 to 12 or 9 to 12, bottom-aligned. Ledes start at column 2 or 4. Directories run as 2-column (`sm`) to 3-column (`lg`, 1024px) ruled definition lists beneath their heading row.

The hero is full-bleed and fills the viewport. Graded photographs crossfade behind an ink gradient, the name sits at the foot of the frame, and a `line-strong` rule separates it from a split row: the offer on the left, actions on the right. Under that row sit the caption and slideshow controls. Full-bleed photographic interludes and the gold band break the shell between text sections.

Vertical rhythm: content sections run 96px top and bottom on mobile and 144px on desktop. The gold band runs 80 to 112px. Inner pages start at nav height plus 5rem (8rem on desktop). Index and list rows get 24px of vertical padding (32px on desktop). Sticky side columns pin at nav height plus 2rem.

The fixed nav is 4.5rem tall. It is transparent over the hero and turns solid `ink` with a bottom hairline after 24px of scroll. On mobile it becomes a full-screen ink menu of wide uppercase links, with a full-width gold pill at the foot.

## Elevation & Depth

The system is flat: there are no box-shadows anywhere. Depth comes from graded photography, ink gradients laid over photos so type stays legible, hairline rules between planes, and position (the fixed nav, the sticky aside, the floating back-to-top circle).

### Named Rules
**The No-Shadow Rule.** Separation is a 1px hairline, a gradient into ink, or a change of photograph. Never a drop shadow or glow.

**The Shared Grade Rule.** Every photograph carries the house grade (`saturate(0.82) contrast(1.06) brightness(0.9) sepia(0.1)`), or the deep grade (`saturate(0.7) contrast(1.12) brightness(0.62) sepia(0.32)`) for full-bleed interludes.

## Shapes

There are two shapes, and each has its own job. Interactive controls are full pills (999px): gold and line buttons, the nav WhatsApp link, the back-to-top circle, the pause control and the 2px slideshow tracks. Content structure is square (0px): photo frames, the service aside, index rows, ruled lists, the gold band, and the input underlines. Borders are 1px only, in `line`, `line-strong` or `line-field`, turning `bone` or `gold` on interaction. Photo frames hold fixed aspect ratios (4:5, 4:3) with `object-fit: cover`. The menu toggle is two 1px bars that cross into an X.

## Components

### Buttons
Soft pills with a confident weight.
- **Shape:** full pill (999px), minimum height 3.25rem, 1.75rem horizontal padding, 0.75rem icon gap, Action type.
- **Gold (primary):** `gold` fill with `ink` text. One per view: the WhatsApp action or the form submit.
- **Hover / Active / Focus:** hover lifts to `gold-bright` and active flashes to `bone`, over 0.3s on the house ease. Focus is the global 1px gold outline at a 4px offset. Disabled is 50% opacity.
- **Line (secondary):** transparent with a 1px `line-strong` border and `bone` text. Hover brightens the border to `bone`. Active inverts to a bone fill with ink text.
- **Nav pill:** the header's WhatsApp link in Label type, with 20px by 10px padding and a `line-strong` border. Border and text turn gold on hover. Back-to-top is a 48px circle with the same treatment.

### Rule Link
The tertiary action: Action type over a 1px `line-strong` underline. On hover or focus, a gold line draws in from the left over 0.5s. It pairs with a gold button ("Explore the businesses") and closes sections ("All businesses", "About Amare Kharis").

### Inputs / Fields
- **Style:** square and transparent, with a single 1px `line-field` bottom rule, 12px vertical padding, Body type in `bone`, and a warm grey placeholder (#8a847c). The Label sits above in `stone`.
- **Focus:** the rule turns `gold`. Hover lightens it to `stone`.
- **Error:** the rule turns `error-rule`, and a 0.875rem message in `error-text` follows.

### Navigation
Label-type links in `stone` that turn `bone` on hover. The active link is `bone` with a 1px gold underline. The wordmark sits at the left: a gold Ballet "A", then "mare Kharis" in wide uppercase Archivo 600.

### Business Index (signature)
The seven business lines as a typographic index between hairlines. Each row has an uppercase wide Index Name, a one-line `stone` description and an up-right arrow. On hover or focus, a gold field scales in from the left over 0.7s, the text reverses to `ink`, and the arrow rotates 45 degrees. Never rendered as cards.

### Full-Bleed Look Hero (signature)
Three graded photographs crossfade every 7 seconds (a 1.6s fade with a slow 1.08 to 1 scale drift) behind an ink gradient. The name sits at the foot in Display XL. Below a hairline, the offer (with the gold tagline) faces the actions. The caption line reads title · gold "View details", next to three pill progress tracks that fill gold and a pause/play control. Under reduced motion, the cycle stops.

### Gold Band (signature)
The page's single full-width gold field: `ink` text, a Display M title in a 3-column side slot, and the five qualities as Display L uppercase rows separated by ink rules at 25% opacity.

### Ruled Lists
Directory content (professional services, contact channels, service bullet points) is set as ruled rows: 1px `line` rules, 24px vertical padding, a 600-weight `bone` lead and a `stone` detail. Contact channels add a large tabular value that turns gold on hover, plus a rotating arrow.

## Do's and Don'ts

### Do:
- **Do** keep every surface on `ink` (#1b1b1b) and carry structure with 1px hairlines.
- **Do** set display type in Archivo at 125% width: uppercase at 650 to 700 for XL and L, sentence case at 600 for M.
- **Do** keep body, labels and buttons at normal width, in sentence case, with no tracking.
- **Do** make interactive controls full pills (999px) and keep content containers and inputs square.
- **Do** limit gold to one primary action per view, one full gold band per page, short accent phrases, and active marks.
- **Do** pass every photograph through the shared grade, or the deep grade for full-bleed interludes.
- **Do** use the house ease `cubic-bezier(0.16, 1, 0.3, 1)` with slow durations (0.3s for state, 0.5 to 0.7s for draws and fills, 1.1 to 1.6s for reveals), and honour reduced motion.

### Don't:
- **Don't** use serif faces or italics; this world is one grotesk.
- **Don't** set labels in tracked uppercase; the only tracked text is the wordmark.
- **Don't** add box-shadows or glows.
- **Don't** present business lines or services as card grids or chips; use the index or ruled rows.
- **Don't** use Ballet beyond the wordmark monogram.
- **Don't** set paragraphs in gold, or put any colour other than `ink` on gold.
- **Don't** introduce a light surface or light mode.
