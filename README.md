# Cars Classic Autotrader

React + TypeScript + Tailwind CSS implementation of the Figma design (mobile 360px, tablet, desktop 1920px).

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm test         # Vitest + Testing Library
npm run build
```

## Structure
- `src/components` – reusable UI (Button, Pill, Header, Footer, CarCard, CarGrid, FaqSection, ServicesSection, StatsShowcase…)
- `src/pages` – Home, Cars, CarDetail (`/cars/:id`), About, Services, Contacts, NotFound
- `src/data` – placeholder inventory + page content (swap for an API later)
- `src/context` – request/“Rent” form modal
- `tailwind.config.js` – design colors (`paper`, `ink`, `muted`), font and fluid type scale

## Font
The design uses a wide geometric sans. Montserrat Alternates (Google Fonts) is the closest match.
To use the exact font from Figma, add its `@font-face` in `src/index.css` and put it first in
`fontFamily.sans` inside `tailwind.config.js`.
