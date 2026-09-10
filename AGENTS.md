# agents.md

## Project Identity

This project is a modern personal portfolio and resume website for Kelvin Arias.

The design language should feel:

- Minimal
- Premium
- Futuristic
- Clean
- Technical
- Elegant
- Recruiter-friendly

The visual direction is inspired by:
- Linear
- Vercel
- Apple
- Modern SaaS landing pages
- Premium developer portfolios

Avoid:
- Overcrowded UI
- Excessive gradients
- Cartoonish visuals
- Heavy glassmorphism
- Generic template aesthetics
- Bright colorful palettes

---

# Core Design Principles

## 1. Minimalism First

Every section should breathe.

Use:
- large spacing
- subtle separators
- restrained color usage
- simple layouts

Avoid visual noise.

---

## 2. Strong Typography Hierarchy

Typography is one of the most important parts of the UI.

### Headings
- Bold
- Large
- Clean
- High contrast

### Body Text
- Neutral gray
- Easy to read
- Slightly soft contrast

---

## 3. Motion Philosophy

Animations should feel:
- smooth
- subtle
- premium
- responsive

Avoid:
- excessive bounce
- exaggerated motion
- spinning
- chaotic transitions

Preferred animations:
- fade in
- blur reveal
- soft upward motion
- opacity transitions
- subtle glow interactions

---

# Typography

## Primary Heading Font
Use:
- Space Grotesk

Fallbacks:
- Inter
- sans-serif

### Usage
Used for:
- Hero titles
- Main headings
- Large labels
- Navigation

---

## Body Font
Use:
- Inter

### Usage
Used for:
- Paragraphs
- Secondary labels
- Cards
- Supporting text

---

# Color Palette

## Background

Primary:
```css
#000000
```

Secondary dark surfaces:
```css
#050505
#0A0A0A
#111111
```

---

## Accent Color

Primary accent:
```css
#00D9FF
```

Alternative accents:
```css
#00C2FF
#38BDF8
```

Used for:
- Active navigation
- Glow effects
- Highlights
- Accent dots
- Hover states

Do NOT overuse accent colors.

---

## Text Colors

Primary text:
```css
#FFFFFF
```

Secondary text:
```css
rgba(255,255,255,0.7)
```

Muted text:
```css
rgba(255,255,255,0.45)
```

---

## Borders

Use subtle borders:
```css
rgba(255,255,255,0.08)
rgba(255,255,255,0.12)
```

Avoid harsh borders.

---

# Layout Philosophy

## Container Width

Preferred:
```tsx
max-w-[1400px] mx-auto px-6 lg:px-10
```

Never allow content to stretch too wide.

---

## Spacing

Prefer:
- generous whitespace
- balanced spacing
- breathing room

Typical spacing:
```tsx
gap-6
gap-8
gap-12
py-20
```

Avoid cramped layouts.

---

# Navigation Style

Navigation should feel:
- floating
- premium
- minimal

Preferred style:
- rounded-full
- subtle border
- backdrop blur
- low opacity background

Example:
```tsx
backdrop-blur-md bg-white/5 border border-white/10
```

Active nav items:
- cyan underline
- subtle glow

Navigation text:
- uppercase
- tracking-widest
- small font size

---

# Hero Section Style

Hero sections should contain:

## Left Side
- Strong heading
- Short subtitle
- Supporting sentence

## Center
- Circular profile image
- Subtle glow ring
- Minimal depth effects

## Right Side
- Clean information cards
- Minimal icon usage
- Technical summary

Avoid clutter.

---

# Cards & Panels

Cards should feel:
- soft
- elevated
- minimal

Preferred styles:
```tsx
bg-white/5
border border-white/10
rounded-2xl
```

Hover:
- subtle border glow
- slight brightness increase

Avoid large shadows.

---

# Glow Effects

Glow should be:
- subtle
- diffused
- soft

Preferred:
```css
box-shadow: 0 0 40px rgba(0, 217, 255, 0.15);
```

Avoid:
- neon overload
- strong bloom
- aggressive blur

---

# Icons

Icons should be:
- outline style
- thin
- modern
- monochrome or cyan accent

Preferred libraries:
- lucide-react
- phosphor-react

Avoid:
- colorful icons
- emoji-heavy UI
- skeuomorphic icons

---

# Responsiveness

On mobile:
- stack sections vertically
- preserve spacing rhythm
- reduce hero image size
- keep navigation usable

Avoid:
- tiny text
- compressed layouts
- oversized hero sections

---

# Technical Stack

Preferred stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion

Preferred architecture:
- reusable components
- clean separation
- scalable layout structure

---

# UI Tone

The website should feel:
- calm
- focused
- modern
- confident
- technical
- intentional

The UI should communicate:
"Experienced modern full-stack developer."

Not:
"Experimental creative studio."

---

# Important Rules

## Do
- Keep interfaces clean
- Use whitespace intentionally
- Use restrained accent colors
- Maintain strong alignment
- Prioritize readability

## Don't
- Overanimate
- Overdecorate
- Use random gradients
- Use too many colors
- Make layouts feel crowded
- Use outdated UI patterns

---

# Overall Experience Goal

The website should feel like:
- a premium SaaS product
- a polished developer portfolio
- a modern technical brand

The experience should immediately communicate:
- professionalism
- strong frontend skills
- modern UI understanding
- attention to detail