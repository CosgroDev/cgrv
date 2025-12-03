## Dale Cosgrove | Quality & Food Safety CV Site

Single-page, static CV website with a bold professional aesthetic. Built with vanilla HTML, CSS, and JS so it can live on any static host (Netlify, Vercel, GitHub Pages, or basic file hosting).

### Structure
- `index.html` - page markup and sections
- `style.css` - layout and animations
- `script.js` - timeline interactions, scroll reveals, micro-interactions
- `assets/dale-portrait.png` - add your portrait image (used in the hero card)

### Getting Started
1) Open `index.html` in a browser to preview locally.
2) Add your portrait to `assets/dale-portrait.png` to populate the hero image.
3) Update copy in `index.html` or colours in `style.css` as needed.

### Hosting Options
- Netlify: Drag-and-drop the folder onto https://app.netlify.com/drop or connect a repo with no build command.
- Vercel: Import the repo/folder, choose “Other” for the framework, and use the project root as the output directory.
- GitHub Pages: Push to a repo and enable Pages from the main branch with the root as the site folder.
- Any static host: Upload the three files. No server-side code required.

### Notes
- All animations are CSS/JS only; no dependencies or build step.
- Theme is locked to light for consistency.
- Scroll reveals use IntersectionObserver; experience timeline cards update the detail pane on click/tap.
