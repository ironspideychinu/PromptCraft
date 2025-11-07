# PromptCraft: NeoCity Portal (Synthwave Frontend)

This repository provides a unified, animated landing portal that links together all the NeoCity UI modules. It’s fully static (no build required), packed with neon micro‑interactions, hover/tilt effects, a lightbox gallery, and a secure‑link aesthetic.

## What’s New
- `index.html` — A new entry-point portal that:
	- Links to every module under `stitch_gang_application_form/*/code.html`
	- Uses images in `Reference/` as ornamental backgrounds and a gallery
	- Adds dynamic elements: preloader, cursor glow, tilt-on-hover cards, and a lightbox
	- Handles special characters in paths safely when navigating

## Repository Layout
- `index.html` — NeoCity Portal (open this file to start)
- `Reference/` — Provided reference screenshots used in hero/gallery
- `stitch_gang_application_form/` — All feature modules (forms, maps, comms, trials, dashboards, etc.)

Key modules (all linked from the portal):
- Recruitment Form v1/v2
- Comms Interface
- Lore & Archives
- Mission Assignments & Tracker
- Entry Points v1/v2
- Territory Maps v1/v2
- Recruitment Dashboard
- Reputation Leaderboard
- Role Assignment & Induction v1/v2
- Trial & Assessment Interface v2
- User Profile v2

## Run Locally
No dev server or toolchain is required.

1) Open the portal in your browser:
	 - Double‑click `index.html` (or drag it into a browser window).
	 - Use the Modules grid to navigate into the individual pages.

Notes:
- Paths with special characters (like `&`) are handled for you by the portal.
- Everything is static: Tailwind is loaded from a CDN.

## Interactions & Effects
- Neon preloader with scanline shimmer
- Card tilt and glow on hover
- Cursor glow that tracks the pointer (desktop)
- Reference Gallery with click‑to‑zoom lightbox (Esc to close)
- Theme toggle placeholder (dark by default)

## Customizing the Look
Edit `index.html`:
- Tailwind color tokens at the top (`tailwind.config` in a `<script id="tailwind-config">` block)
- Add/adjust animation keyframes under the same config
- Update the Modules grid (buttons with `data-path`) to add or remove pages

## Legacy (Previous Hackathon Demo)
The original Binary Serpents prototype (quiz‑based role assignment) described here was superseded by the NeoCity Portal. Those files are not part of this current workspace, but the note is preserved for context.

## License
Static UI showcase – adapt freely unless restricted by your event rules.