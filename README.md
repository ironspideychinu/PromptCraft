# PromptCraft: Underground Gang Recruitment Portal (Binary Serpents)

This repository contains a fully static, cyberpunk-themed recruitment portal for the hackathon project: **"Underground Gang Recruitment Portal"** featuring **The Binary Serpents**.

## Files
- `index.html` – Landing portal with lore + call to action.
- `quiz.html` – Client-side initiation quiz (no form action, no backend).
- `quiz.js` – Pure front-end logic to tally answers and redirect to role pages.
- `style.css` – Shared neon cyberpunk aesthetic (glow, glitch, custom radios, responsive).
- `role-netrunner.html` / `role-enforcer.html` / `role-fixer.html` – Static result role pages.

## How It Works (No Backend Illusion)
1. User selects answers to 3 scenario questions.
2. JavaScript tallies role scores locally in the browser.
3. Highest score decides the role; ties default to Fixer.
4. Browser performs a simple `window.location.href` redirect to the matching static HTML page.

## Running Locally
Just open `index.html` in any modern browser (Chrome/Firefox). No build, no dependencies.

## Customization Tips
- Add more questions by following the pattern in `quiz.html` and updating logic in `quiz.js`.
- Change theme colors via CSS variables in `style.css` (`:root` block).
- Swap fonts by updating the Google Fonts import line at the top of `style.css`.

## Accessibility & Fallbacks
- Reduced motion respected via `prefers-reduced-motion`.
- Clear focus states on interactive elements.

## License
Hackathon demo – adapt freely unless restricted by event rules.

---
Built entirely by AI per hackathon constraints. No server. No database. Pure static illusion.