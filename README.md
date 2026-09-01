# Shoaib Akhtar — Portfolio

Premium personal portfolio with **Dark / Light mode**, cyan–indigo accent system, and recruiter-focused layout.

## Tech

- React 18 + Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Run

```bash
npm install
npm run dev
```

## Theme

- Toggle in navbar (Sun / Moon)
- Preference saved in `localStorage`
- Respects system preference on first visit

## Content

All text lives in `src/data/portfolioData.js` — update email, links, projects there.

## Structure

```
src/
  components/   ← UI sections
  context/      ← ThemeProvider
  data/         ← portfolioData.js
  App.jsx
  main.jsx
  index.css     ← theme CSS variables
```
