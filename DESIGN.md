# Layne Fitness Design System

## Overview

Layne Fitness uses a sharp performance-lab visual language: hard training photography, grounded blue-green trust colors, controlled orange conversion accents, technical line diagrams, visible proof, and decisive typography. Surfaces stay flat and high contrast. Motion communicates progression and adjustment rather than decoration.

## Color

- Ink: `oklch(0.18 0.045 205)`
- White: `oklch(0.985 0 0)`
- Signal green: `oklch(0.74 0.16 156)`
- Action orange: `oklch(0.7 0.18 43)`
- Soft blue-green tint: `oklch(0.95 0.018 186)`
- Muted text: `oklch(0.38 0.035 205)`

Use ink and white for most surfaces. Signal green carries trust, local service, and proof marks. Orange is reserved for primary conversion actions only. Use ink text on green or orange.

## Typography

- Display: Barlow Condensed, 700-800, tight but never below `-0.03em` tracking.
- Body and interface: Atkinson Hyperlegible, 400-700.
- Display ceiling: 5.5rem desktop.
- Body copy: 1rem-1.125rem, maximum 70ch.

## Layout

- Maximum content width: 1180px.
- Section rhythm: 72-120px desktop, 56-80px mobile.
- Corners: 12-16px for framed media; pill shapes only for actions or tags.
- Use asymmetric bands and split layouts instead of repeated identical card grids.
- Portrait proof media always uses `object-fit: contain`.

## Components

- Header: ink surface, compact wordmark, six navigation links, phone and booking actions.
- Buttons: solid signal primary; bordered ink/white secondary; 48px minimum touch target.
- Mobile dock: two equal actions above the safe area.
- Media frame: strong 2px ink rule or no border; no border plus large shadow combination.
- FAQ: flat ruled accordion with large hit areas.
- Article: answer block, source list, author block, visible updated date, and breadcrumb.

## Motion

- One orchestrated hero entrance.
- Geometric SVG movement for barbell plates, macro segments, and peptide nodes.
- Scroll-linked progress line for the three-step process.
- Image reveals may use clip paths, never hide content by default.
- Under `prefers-reduced-motion`, remove translation, rotation, and scroll tracking while keeping content visible.
