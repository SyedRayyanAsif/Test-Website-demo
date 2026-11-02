# Dentora Dental Clinic — Demo Website

A premium, fictional dental clinic website built to demonstrate web development and digital
marketing services to real clinics. Built with **React, Vite and Tailwind CSS**.

> This is a sales demonstration project. "Dentora", its team, testimonials and gallery are all
> fictional, clearly labelled sample content. No real patient data is collected or transmitted
> anywhere in this project.

## Features

- Home, About, Services (+ 8 individual treatment pages), Dentists, Treatment Packages, Gallery,
  Contact and a dedicated Appointment Booking page.
- Interactive booking form with validation, past-date prevention, and a demo confirmation flow.
- Fully responsive (mobile, tablet, laptop, desktop), with a mobile navigation menu.
- Scroll reveal animations (Framer Motion) and WhatsApp contact button.
- Illustrative gradient/icon "photography" placeholders instead of hotlinked stock photos, so the
  site stays fast, self-contained and reliable for an in-person demo without depending on a third
  party image host.

## Running locally

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Deployment

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and
deploys to **GitHub Pages** automatically on every push to `main`/`master`. In the repository
settings, under **Pages**, set the source to **GitHub Actions** once this repo is pushed.

The Vite `base` in `vite.config.js` is set to `/dental-clinic-demo/` to match this repository
name for a GitHub Pages project site. If you rename the repository, update `base` to match.

## Replacing demo content with a real clinic's information

- **Branding**: update `src/components/Logo.jsx` and the clinic name in `index.html`.
- **Services**: edit `src/data/services.js`.
- **Dentists**: edit `src/data/dentists.js`.
- **Testimonials**: edit `src/data/testimonials.js` (use only real, consented reviews for a live site).
- **Packages & digital services**: edit `src/data/packages.js`.
- **Gallery**: edit `src/data/gallery.js`, or swap `PhotoCard` usages for real `<img>` photography.
- **Contact details**: edit `src/components/Footer.jsx`, `src/pages/Contact.jsx` and the WhatsApp
  number in `src/components/ui/WhatsAppButton.jsx`.
- **Images**: every "photo" in this demo is a crafted gradient + icon placeholder
  (`src/components/ui/PhotoCard.jsx`). Replace with real, licensed photography for a live clinic.

## Connecting a real booking backend

The booking form (`src/pages/Booking.jsx`) currently simulates a submission client-side only. To
make it real:

1. Replace the `window.setTimeout` in `handleSubmit` with a call to your backend API (e.g. a
   serverless function, or a service like a headless CMS / database with an API).
2. Store the submission in a database, and sync available time slots dynamically instead of the
   static `TIME_SLOTS` list.
3. Trigger an email and/or WhatsApp confirmation to the patient and a notification to staff.
4. Connect to the clinic's actual calendar (e.g. Google Calendar) to block booked slots and avoid
   double-booking.
5. Add authentication/rate limiting to the endpoint to prevent spam submissions.
