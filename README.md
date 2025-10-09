# Wedding Planner Registration – React (Vite + TS + Tailwind)

One-page romantic & modern contact site for wedding planning services. Client-only email via EmailJS.

## Features
- Hero section with romantic visual & CTA
- Sticky navbar with Contact link (smooth scroll)
- Contact form: Full Name, Email, Wedding Date, Phone
- Validation with react-hook-form
- Email sending via EmailJS (no backend)
- Tailwind CSS styling, responsive, accessible

## Tech
- React 19, Vite 5, TypeScript 5
- Tailwind CSS 3, RHF 7, EmailJS browser SDK 4

## Setup
1. `npm i`
2. Copy `.env.example` to `.env` and set:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. EmailJS: create template with variables `full_name`, `email`, `wedding_date`, `phone`.
4. `npm run dev`

## Build
- `npm run build` → `dist/`
- `npm run preview`

## Customize
- Edit colors/fonts in `tailwind.config.ts`.
- Change hero background in `Hero.tsx` (Unsplash URL).
- Add extra fields easily in `ContactForm.tsx` and `src/lib/email.ts` mapping.

## Deploy
- Static hosting: Netlify, Vercel, GitHub Pages.
