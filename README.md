# rizkynfal — Portfolio

Personal portfolio of **Rizky Naufal Alghifary**, Software Engineer (Backend · Gen AI · Mobile).
Live: https://rizkynfal.vercel.app

## Stack

- Next.js 15 (App Router) + React 18
- Tailwind CSS 3
- Framer Motion (scroll reveals, tab/filters, counters — respects `prefers-reduced-motion`)
- lucide-react icons

## Editing content

All copy (profile, stats, services, experience, projects, skills, education) lives in
[`src/data/profile.js`](src/data/profile.js). Update it there and every page picks it up.
Project screenshots live in `public/assets/img/<project>/`, and the CV is
`public/assets/static/Rizky_Naufal_Alghifari.pdf`.

## Structure

```
src/
  app/                    routes (home, /experiences, company + case-study pages)
  components/
    navbar/, footer/
    sections/             Hero, About, Services, Experience, Work, Skills, Contact, CaseStudy
    ui/                   Reveal, CountUp, Marquee, Gallery, Spotlight, SectionHeading
  data/profile.js         content
```

## Development

```bash
npm install
npm run dev
```
