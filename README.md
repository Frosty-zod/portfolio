# Abhishek Rawat — Portfolio

A personal portfolio site built with plain HTML, CSS, and JavaScript — no framework, no build step. Dark/light theme, scroll animations, and a dev-dashboard visual style tying into the data-analytics side of my work.

[![HTML5](https://img.shields.io/badge/HTML-5-e34c26)](https://github.com/Frosty-zod/portfolio) [![CSS3](https://img.shields.io/badge/CSS-3-264de4)](https://github.com/Frosty-zod/portfolio) [![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-f7df1e)](https://github.com/Frosty-zod/portfolio) [![No dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)](https://github.com/Frosty-zod/portfolio) [![Live Demo](https://img.shields.io/badge/demo-live-2DD4BF)](https://frosty-zod.github.io/portfolio/) [![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## 🚀 Live site

**[frosty-zod.github.io/portfolio](https://frosty-zod.github.io/portfolio/)**

## 📋 Overview

- **Stack:** semantic HTML, CSS custom properties (no preprocessor), vanilla JS — deliberately dependency-free so every interaction is easy to explain.
- **Design:** dark terminal/dashboard aesthetic — IBM Plex Mono for headings and labels, IBM Plex Sans for body text, teal/gold accent palette borrowed from data-visualization colors.
- **Sections:** Hero, About, Education & Certifications, Skills, Projects, Contact.

## ✨ Features

- 🌓 **Dark/light theme toggle** — persisted via `localStorage`, falls back to `prefers-color-scheme` on first visit, with the active label visually distinct
- 📜 **Scroll-reveal animations** via `IntersectionObserver`, with a feature-detection fallback so content is never stuck invisible if it's unavailable
- 📱 **Responsive mobile nav** with a hamburger toggle
- 📋 **Click-to-copy email** using the Clipboard API
- ⬆️ **Back-to-top button** that appears after scrolling
- 📄 **Real certificate & résumé links** — actual PDFs, opened directly, no fake modals
- ♿ **Accessible by default** — `scroll-margin-top` so the sticky header never covers section headings, visible focus states, `aria` labels on icon-only controls
- 🕹️ A small console easter egg — open devtools and say hi

## 📁 Project structure

```
├── index.html
├── style.css
├── script.js
├── resume.pdf
├── certificates/
│   ├── python-developer-intern-certificate.pdf
│   ├── power-bi-for-beginners-certificate.pdf
│   └── introduction-to-generative-ai-certificate.pdf
├── favicon.svg / favicon.ico / favicon-32.png / apple-touch-icon.png
├── portfolio-preview.webp
└── LICENSE
```

## 🛠️ Running locally

No build tools needed:

1. Clone or download this repo
2. Open `index.html` directly in a browser, **or** for the cleanest local experience, serve it with a local server (e.g. VS Code's "Live Server" extension) to avoid `file://`-specific browser quirks
3. That's it — no `npm install`, no bundler

## 🔗 Related projects

- **[Flipkart Sales Analytics Dashboard](https://github.com/Frosty-zod/flipkart-sales-dashboard)** — Power BI dashboard featured in the Projects section of this site
- **[Codec Technologies Internship Projects](https://github.com/Frosty-zod/Codec-Technologies-Projects)** — Python mini-projects from my developer internship

## 📌 About this project

Built as a solo JavaScript course project (CSE, Uttaranchal University), and doubles as an actual portfolio site.

## 🙏 Acknowledgements

- [IBM Plex](https://www.ibm.com/plex/) — typeface family (Mono + Sans)
- [Google Fonts](https://fonts.google.com/) — font hosting

## 👤 Author

**Abhishek Rawat** — B.Tech CSE, Uttaranchal Institute of Technology, Uttaranchal University
[GitHub](https://github.com/Frosty-zod) · [LinkedIn](https://www.linkedin.com/in/abhishek-rawat777)
