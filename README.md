# YamitGC Developer Portfolio

A personal developer portfolio built with pure HTML5, CSS3, and vanilla JavaScript (ES Modules). It showcases my background, projects, and skills as a backend-focused developer, with support for dark/light themes and English/Spanish localization.

**Live demo:** [https://YamitGC.github.io/Web-Portfolio/](https://YamitGC.github.io/Web-Portfolio/)

---

## Features

- **Responsive design** — Adapts cleanly across desktop, tablet, and mobile breakpoints.
- **Dark / Light theme switcher** — Toggle persisted in `localStorage`, powered by CSS custom properties (design tokens).
- **Bilingual (ES / EN)** — Instant content translation via a lightweight i18n module, with the selected language also saved to `localStorage`.
- **Modular CSS architecture** — Styles split into variables, core layout/components, and responsive rules, imported through a single entry point.
- **No frameworks or build step** — 100% static site; just open `index.html` or deploy as-is.
- **Sections included:**
  - Hero introduction with availability badge
  - About me
  - Featured projects with tech stack tags and repository links
  - Skills & competencies grouped by category
  - Contact form (front-end only, ready to be wired to a form handler)

---

## Tech Stack

| Layer     | Technology                              |
| --------- | --------------------------------------- |
| Markup    | HTML5 (semantic structure)              |
| Styling   | CSS3 (custom properties, Flexbox, Grid) |
| Scripting | Vanilla JavaScript (ES Modules)         |
| Fonts     | Google Fonts — Inter & Fira Code       |
| Hosting   | GitHub Pages                            |

---

## Project Structure

```
.
├── assets/
│   └── favicon.png
├── css/
│   ├── variables.css      # Design tokens: colors, typography, spacing, dark/light theme
│   ├── portfolio.css      # Core layout and component styles
│   └── responsive.css     # Media queries for tablet and mobile
├── js/
│   ├── main.js             # Entry point, initializes theme and language switchers
│   ├── theme.js             # Dark/light theme logic
│   ├── i18n.js               # Language switcher logic
│   └── translations.js       # ES/EN translation strings
├── index.html              # Main page
├── style.css                # CSS entry point (imports all stylesheets)
└── README.md
```

---

## Getting Started

This is a static site with no dependencies or build tools required.

### Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/YamitGC/Web-Portfolio.git
   cd Web-Portfolio
   ```
2. Open `index.html` directly in your browser, **or** serve it locally (recommended, since JS is loaded as ES Modules and some browsers restrict `file://` imports):

   ```bash
   # Using Python
   python -m http.server 5500
   ```

   Then visit `http://localhost:5500`.

### Deploy with GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and the `/ (root)` folder.
5. Save. Your site will be published at:
   ```
   https://YamitGC.github.io/Web-Portfolio/
   ```

---

## Customization

- **Colors & spacing:** edit the design tokens in `css/variables.css` (`:root` for dark theme, `[data-theme="light"]` for light theme).
- **Content & translations:** update the `es` and `en` objects in `js/translations.js`. Elements with `data-i18n="key"` and `data-i18n-placeholder="key"` in `index.html` map to these keys.
- **Projects:** duplicate a `.project-card` block in `index.html` and add matching translation keys.
- **Contact form:** the form currently has no backend (`action="#"`). Connect it to a service such as [Formspree](https://formspree.io/), [Netlify Forms](https://www.netlify.com/products/forms/), or a custom API endpoint.

---

## Author

**Yamit Garcia Cueto**

- GitHub: [@YamitGC](https://github.com/YamitGC)
- LinkedIn: [Yamit Garcia Cueto](https://www.linkedin.com/in/yamit-garcia-cueto-928207426/?locale=en-US)
