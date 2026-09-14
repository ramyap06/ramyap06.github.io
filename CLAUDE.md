# Portfolio Website

Personal portfolio site for Ramya Prasanna, deployed to GitHub Pages at https://ramyap06.github.io/.

## Stack

- **React 18** (JSX, no TypeScript)
- **Vite 5** — dev server and build tool
- **gh-pages** — deploy script

## Commands

```bash
npm run dev       # local dev server
npm run build     # production build to dist/
npm run deploy    # builds then pushes dist/ to gh-pages branch
```

## Project structure

```
index.html              # Vite entry point
public/
  404.html              # GitHub Pages catch-all; redirects /portfolio-website/* to https://ramyap06.github.io/
src/
  main.jsx              # mounts <App /> into #root
  App.jsx               # top-level layout: Navbar > Header > About > Timeline > Footer
  index.css             # global styles
  assets/               # images (jpeg)
  components/
    Navbar.jsx
    Header.jsx
    About.jsx
    Timeline.jsx        # journey section — see data shape below
    Footer.jsx
vite.config.js          # base: '/portfolio-website/' — update to '/' if fully moved to root
package.json            # homepage still set to /portfolio-website — update alongside vite.config
```

## Timeline.jsx data shape

`timelineItems` is an array of objects rendered as an alternating left/right card timeline.

```js
{
  type: 'milestone' | 'project' | 'experience',  // controls icon
  date: string,           // e.g. 'August 2024' or 'August 2025 – May 2026'
  title: string,
  subtitle: string,       // optional
  desc: string[],         // bullet points — rendered as <ul><li> list
  skills: string[],       // optional — rendered as tag chips
  link: string,           // optional — GitHub or external URL, renders "View →"
}
```

Type conventions:
- `milestone` — major life events (admission, preparation phases)
- `project` — built artifacts: personal projects, course projects, hackathons
- `experience` — sustained roles: internships, research labs, clubs

## GitHub Pages redirect

`public/404.html` handles traffic from the old URL (`ramyap06.github.io/portfolio-website`).
GitHub Pages serves this file for any unmatched path. The script checks
`location.pathname.startsWith("/portfolio-website")` and calls `location.replace("https://ramyap06.github.io/")`.

## Known config discrepancy

`vite.config.js` has `base: '/portfolio-website/'` and `package.json` has
`homepage: "https://ramyap06.github.io/portfolio-website"`. If the site is fully
served from the root (`ramyap06.github.io/`), both should be updated to `/` and
`https://ramyap06.github.io` respectively before the next deploy.
