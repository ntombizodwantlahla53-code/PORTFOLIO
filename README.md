# ♡ Ntombizodwa Ntlahla | Portfolio

A modern dark portfolio with a pink glow, made to impress recruiters.
Built with **React + TypeScript + Vite**, styled with **CSS modules**.

## 🎬 The moving parts

- **Typing headline** that writes and erases your roles
- **Glowing, shimmering** last name and pulsing "open to work" light
- **Floating tech badges** and a spinning ring around your avatar
- **Scrolling tech strip** under the hero
- **Sections fade in** as you scroll and the stat numbers **count up**
- Cards that lift and glow when you hover them

## ✨ What's inside

- **Hero**: name, role, short intro, CV download and social links
- **About**: short story and quick stats
- **Skills**: business, web, database, tools, concepts, cloud and soft skills
- **Projects**: HotelApp (featured) plus my GitHub projects
- **Journey**: CodeTribe bootcamp, diploma, matric, Azure certifications and languages
- **Contact**: email, phone, LinkedIn, GitHub and location

## 🚀 Run it

You need [Node.js](https://nodejs.org) installed.

```bash
npm install
npm run dev
```

Open the link it shows (usually http://localhost:5173).

Make a production build:

```bash
npm run build
npm run preview
```

## ✏️ Change your details

Everything you read on the website is written **inside the component file** that shows it.
Open the file, change the text between the quotes, and save.

| What you want to change                      | File                                              |
| -------------------------------------------- | ------------------------------------------------- |
| Name, intro, typing words, tech strip, links | `src/components/hero/hero.tsx`                    |
| About text, location, number cards           | `src/components/about/about.tsx`                  |
| Skills and soft skills                       | `src/components/skills/skills.tsx`                |
| Projects                                     | `src/components/projects/projects.tsx`            |
| Bootcamp, education, certifications, languages | `src/components/journey/journey.tsx`            |
| Email, phone, LinkedIn, GitHub               | `src/components/contact/contact.tsx` (and `hero.tsx` for the icons) |
| Menu links                                   | `src/components/navbar/navbar.tsx`                |
| Footer name                                  | `src/components/footer/footer.tsx`                |

Look for the lines that start with `// ✏️` at the top of a file.

### Things to finish before you share it

1. **HotelApp live demo**: in `projects.tsx`, paste your Vercel link into `live: ""`. The "Live demo" button appears by itself.
2. **HotelApp code link**: check that `github` for HotelApp points to your real repo name.
3. **Project descriptions**: read the short texts for Weather with Notes, Shopping List 2, MyTask and LibraryDB and change them to say exactly what each one does.
4. **CV**: save your CV as `public/cv.pdf` so the "Download CV" button works.
5. **Photo (optional)**: put a picture in `public/` (for example `public/me.jpg`) and set `photo: "/me.jpg"` in `me`. Without a photo the page shows your initials.

## 🎨 Styling rules

- Every class name is **one word** (`.heading`, `.card`, `.button`) and used as `className={styles.card}`
- Every selector has **its own rule**, nothing is grouped
- No tag selectors, only classes

Colours are a deep plum background with pink and violet glow. Search for `#ff4d94` (main pink) in the `.module.css` files if you want to change the theme.

## 🌍 Put it online

### Vercel (easiest)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), click **Add New → Project** and import the repo.
3. Keep the default settings (Vite is detected automatically) and click **Deploy**.

### GitHub Pages

1. In `vite.config.js` add `base: "/your-repo-name/"` inside `defineConfig({ ... })`.
2. Run `npm run build` and publish the `dist` folder (for example with the `gh-pages` package).

## 📁 Folder structure

```
portfolio
├── index.html
├── vite.config.js       tells Vite to use React
├── public/              favicon, cv.pdf, photo
└── src
    ├── App.tsx          puts the sections together
    ├── App.module.css
    ├── main.tsx
    └── components
        ├── navbar
        ├── hero
        ├── reveal       fades sections in on scroll
        ├── about
        ├── skills
        ├── projects
        ├── journey
        ├── contact
        └── footer       each has a .tsx and a .module.css file
```

## 🔗 Find me

- GitHub: https://github.com/ntombizodwantlahla53-code
- LinkedIn: https://www.linkedin.com/in/ntombizodwa-ntlahla-95a173254/

Made with ♡ in KwaZulu-Natal.
