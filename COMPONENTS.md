# Maestrio LP — Component & Design System Reference

## Stack

| Tool | Version / Detail |
|------|-----------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`) |
| Icons | iconoir-react |
| Fonts | next/font/google (self-hosted) |
| Package manager | bun |

---

## Color System

Design tokens live in two layers inside `src/app/globals.css`:

1. **`:root`** — Figma-named raw values (slashes replaced with dashes)
2. **`@theme inline`** — Tailwind utility mappings that reference the `:root` vars

### Foreground

| Figma token | CSS variable | Tailwind class | Hex / value |
|-------------|-------------|----------------|-------------|
| fg/brand | `--fg-brand` | `text-brand` `bg-brand` `border-brand` | `#00ff73` |
| fg/brand-dim | `--fg-brand-dim` | `text-brand-dim` `bg-brand-dim` | `#84ffa7` |
| fg/secondary | `--fg-secondary` | `text-fg-secondary` | `#9a9793` |
| fg/text-secondary | `--fg-text-secondary` | `text-fg-muted` | `#6b6b6b` |
| fg/over-primary | `--fg-over-primary` | `text-over-primary` | `#18181b` |
| fg/primary | `--fg-primary` | — (use `text-white`) | `#ffffff` |
| fg/fg1 | `--fg-fg1` | `text-fg1` | `#f3f4f6` |
| fg/slate-400 | `--fg-slate-400` | `text-slate-400` | `#94a3b8` |
| fg/sev-high | `--fg-sev-high` | `text-sev-high` | `#ff7a3e` |
| fg/sev-teal | `--fg-sev-teal` | `text-sev-teal` | `#3effc8` |

### Backgrounds

| Figma token | CSS variable | Tailwind class | Value |
|-------------|-------------|----------------|-------|
| bg/level1 | `--bg-level1` | `bg-level1` | `#030303` |
| bg/level1-hover | `--bg-level1-hover` | `bg-level1-hover` | `#010908` |
| bg/muted | `--bg-muted` | `bg-muted-bg` | `#111111` |
| bg/brand-10 | `--bg-brand-10` | `bg-brand-10` | `rgba(0, 255, 115, 0.10)` |
| bg/cyan-10 | `--bg-cyan-10` | `bg-cyan-10` | `rgba(62, 255, 200, 0.10)` |
| bg/sev-high-10 | `--bg-sev-high-10` | `bg-sev-high-10` | `rgba(255, 122, 62, 0.10)` |
| bg/sev-neutral | `--bg-sev-neutral` | `bg-neutral-10` | `rgba(255, 255, 255, 0.10)` |

### Borders

| Figma token | CSS variable | Tailwind class | Value |
|-------------|-------------|----------------|-------|
| border/brand-muted-20 | `--border-brand-muted-20` | `border-brand-border-muted` | `rgba(77, 178, 122, 0.20)` |
| border/brand-30 | `--border-brand-30` | `border-brand-border` | `rgba(0, 255, 115, 0.30)` |
| border/muted | `--border-muted` | `border-muted-border` | `rgba(255, 255, 255, 0.15)` |
| border/sev-neutral | `--border-sev-neutral` | `border-neutral-border` | `rgba(255, 255, 255, 0.30)` |
| border/orange-30 | `--border-orange-30` | `border-orange-border` | `rgba(255, 122, 62, 0.30)` |
| border/cyan-30 | `--border-cyan-30` | `border-cyan-border` | `rgba(62, 255, 200, 0.30)` |

---

## Typography

All fonts are loaded via `next/font/google` in `src/app/layout.tsx` and exposed as CSS variables.

| Font | CSS variable | Tailwind class | Usage |
|------|-------------|----------------|-------|
| Space Grotesk | `--font-space-grotesk` | `font-space-grotesk` | Headings (h1–h3), logo, nav labels |
| DM Mono | `--font-dm-mono` | `font-dm-mono` | Eyebrow labels, tags, badges, monospace UI |
| DM Sans | `--font-dm-sans` | `font-dm-sans` | Body text, descriptions |
| Inter | `--font-inter` | `font-inter` | Buttons, inputs, form elements |
| Space Mono | `--font-space-mono` | `font-space-mono` | Large stat numbers |

---

## Global Effects

Defined in `src/app/globals.css`:

### Grain texture
A fixed `body::before` pseudo-element overlays a seamless SVG `feTurbulence` noise at `opacity: 0.035`, covering the full viewport with `pointer-events: none`.

### Hero gradient animation
`@keyframes hero-gradient` shifts `background-position` from `0% 50%` → `100% 50%` → `0% 50%` over 12 seconds. Applied via inline style on the `<Hero>` section with `background-size: 300% 300%`.

---

## Hover Pattern

All interactive cards share the same hover convention:

```
transition-all duration-200
hover:bg-level1-hover      /* #010908 — very dark green tint */
hover:border-brand-border  /* rgba(0,255,115,0.30) — green border */
```

---

## Components

### `Navbar` — `src/components/Navbar.tsx`

Fixed top bar with backdrop blur. Contains:
- **Logo** — "Maestrio" wordmark (`font-space-grotesk bold`)
- **Nav links** — Features, Docs, Company, Pricing (hidden on mobile, visible `md:`)
- **Sign in** — ghost text button (hidden on mobile)
- **Start free** — solid button with `bg-[#d1d5db]` (light grey) and `ArrowRight` icon

```tsx
<Navbar />
```

---

### `Hero` — `src/components/Hero.tsx`

Full-screen section (`min-h-screen`) with animated dark green gradient background.

Contains:
- **Eyebrow** — "Coming soon · Reserve your spot" (`font-dm-mono text-brand`)
- **Headline** — "User reported a bug. It's already fixed." with `text-brand-dim` / `text-brand` highlights
- **Subtitle** — product description (`font-dm-sans text-fg-secondary`)
- **Email form** — input + "SIGN UP" button (`bg-brand`, text `text-over-primary`)
- **Hint** — "Get the news when we launch · 10 free runs"

```tsx
<Hero />
```

---

### `Stats` — `src/components/Stats.tsx`

Horizontal stat bar, 2-col on mobile / 4-col on desktop. Bordered top and bottom with `border-brand-border-muted`. Dividers between columns via `border-r`.

| Stat | Label |
|------|-------|
| `<15m` | avg bug-to-merged-PR time |
| `0 loc` | written by your team |
| `1-click` | approval for complex changes |
| `BYOK` | bring your own keys |

Values use `font-space-mono bold text-brand`.

```tsx
<Stats />
```

---

### `HowItWorks` — `src/components/HowItWorks.tsx`

4-column step grid (1-col mobile / 2-col sm / 4-col lg) with teal box-shadow. Each card is a plain `div` (no cursor pointer) with step number, icon, title, and description.

| # | Icon | Title |
|---|------|-------|
| 01 | `MessageText` | Get feedback |
| 02 | `BrainElectricity` | AI triage & scores |
| 03 | `GitFork` | Maestrio opens a PR |
| 04 | `GitMerge` | Approve or Merge |

First card has rounded left corners; last has rounded right. Corner classes adapt at `sm:` breakpoint.

```tsx
<HowItWorks />
```

---

### `ConfidenceLevels` — `src/components/ConfidenceLevels.tsx`

2×2 grid explaining the AI confidence scoring system. Each card uses a `SevTag` sub-component.

#### `SevTag` (internal)

| Type | Label | Colors |
|------|-------|--------|
| `auto` | Auto-resolve | `bg-brand-10` / `border-brand-border` / `text-brand` / dot `bg-brand` |
| `approve` | One-click approve | `bg-cyan-10` / `border-cyan-border` / `text-sev-teal` / dot `bg-sev-teal` |
| `human` | human-review | `bg-sev-high-10` / `border-orange-border` / `text-sev-high` / dot `bg-sev-high` |
| `customize` | Customize | `bg-neutral-10` / `border-neutral-border` / `text-white` |

#### Cards

| Card | Tag | Confidence |
|------|-----|-----------|
| 01 | Auto-resolve | HIGH ≥70% — AI opens, tests, and merges PR |
| 04 | One-click approve | MEDIUM 40–69% — AI drafts PR, PM one-click ships |
| 01 | Human-review | LOW <40% — routed to engineering team |
| 04 | Customize | Tune thresholds per repo |

```tsx
<ConfidenceLevels />
```

---

### `Features` — `src/components/Features.tsx`

6 feature cards inside a shared container (`bg-level1 border border-brand-border-muted`). Cards flex-wrap: full-width on mobile, 50% on sm, fixed `310px` on lg.

| Icon | Feature |
|------|---------|
| `Puzzle` | Feedback Widget |
| `KanbanBoard` | Kanban Board |
| `Cpu` | Agentic AI Engineer |
| `Key` | Bring Your Own Keys or Use Ours |
| `Bell` | Closed-loop Notifications |
| `GitCompare` | Team Analytics |

Icon containers use `bg-[#868686]` (neutral grey).

```tsx
<Features />
```

---

### `Integrations` — `src/components/Integrations.tsx`

4-col grid (2-col on mobile) of integration cards. Logos pulled from `https://cdn.simpleicons.org/{slug}/ffffff`.

#### `StatusTag` (internal)

| State | Style |
|-------|-------|
| `live: true` | `bg-brand-10 border-brand-border text-brand` + pulsing dot |
| `live: false` | `bg-neutral-10 border-neutral-border text-white` |

#### Integrations list

| Slug | Display | Live |
|------|---------|------|
| anthropic | Anthropic | ✅ |
| github | GitHub | ✅ |
| openai | OpenAI | ✅ |
| slack | Slack | soon |
| notion | Webhooks | soon |
| github | Rest API | ✅ |
| github | MCP Server | soon |
| notion | Webhooks | soon |

```tsx
<Integrations />
```

---

### `CTA` — `src/components/CTA.tsx`

Centered email sign-up section with large stacked headline ("Be the first in line when **Maestrio** Launches") and the same email + "SIGN UP" form as the Hero.

```tsx
<CTA />
```

---

### `Footer` — `src/components/Footer.tsx`

Slim footer with backdrop blur. Left: Maestrio wordmark + © 2026. Right: Privacy · Terms text buttons.

```tsx
<Footer />
```

---

## Page Composition

`src/app/page.tsx` assembles sections in this order:

```
Navbar
Hero
Stats
HowItWorks
ConfidenceLevels
Features
Integrations
CTA
Footer
```
