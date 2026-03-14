# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Rosso Materiales' main website** - a construction materials e-commerce site serving Tucumán and Salta, Argentina. The site is a static HTML/CSS/JavaScript application with multiple utility tools and integration points to external services.

**Tech Stack:** Vanilla HTML5, CSS3, JavaScript (ES6+), Firebase (for admin panels), n8n webhooks (for chatbot), external catalog integration

## Key Architecture Patterns

### 1. Multi-Page Static Site Structure
- Each page is a standalone HTML file with inline styles and scripts
- Shared navigation/header markup is duplicated across pages (not templated)
- Common global styles in `style.css`, page-specific styles are inline `<style>` blocks
- Main JavaScript in `script.js` handles homepage functionality (sliders, mobile menu, newsletter)

### 2. Product Data Management
- **`todos_los_productos.js`**: Large JavaScript array containing all products for search functionality
- Product structure: `{ nombre, sku, categoria, url, imagen }`
- Used by homepage search and dedicated `buscador.html` page
- Products link to external catalog at `catalogo.rossomateriales.site`

### 3. External Service Integrations
- **Firebase/Firestore**: Used in `panel-admin.html`, `panel-corporativo.html`, `carga-masiva.html` for inventory management and corporate dashboards
- **n8n Webhook**: Powers the AI chatbot on homepage (`index.html`) at `https://n8n-production-4e14.up.railway.app/webhook/...`
- **Visualizer Service**: `visualizador-ia.html` sends images to backend service for AI-powered room visualization
- **Newsletter**: Uses Mailrelay form submission with AJAX (`newsletter-form-ajax` in `index.html`)

### 4. Utility Calculator Tools
Self-contained pages that help customers calculate materials needed:
- **`calculadora.html`**: Square meter calculator for tiles/flooring
- **`calculadora-viguetas.html`**: Calculates materials for T21/T180 beam slabs
- **`calculadora-placasdeyeso.html`**: Drywall/gypsum board material calculator
- **`calculadora-niveladores.html`**: Tile leveling system calculator (clips, wedges, pliers)

Each calculator is a standalone HTML page with embedded JavaScript for calculations.

### 5. Custom Chat Interface
Homepage includes a custom-built chat widget (not a third-party embed):
- Lives in `index.html` starting around line 612
- Floating action button triggers chat window
- Sends messages to n8n webhook with sessionId
- Supports Markdown rendering in bot responses (lists, bold, code blocks, links)
- Character limit: 300 characters per message

## Important Files

### Core Pages
- **`index.html`**: Homepage with hero slider, search, utilities section, brand partners, newsletter, chatbot
- **`buscador.html`**: Dedicated product search page with product carousel
- **`sucursales.html`**: Branch locations and contact info
- **`nosotros.html`**: About page

### Utility Pages
- **`visualizador-ia.html`**: AI room visualizer (upload photo, select product, submit for design)
- **`checklist.html`**: Construction material checklists
- **`glosario.html`**: Construction terminology glossary
- **`argumentarios.html`**: Sales argument templates

### Admin/Internal Pages
- **`panel-admin.html`**: Admin dashboard with Firebase authentication
- **`panel-corporativo.html`**: Corporate dashboard with birthday tracker, metrics, n8n webhooks
- **`carga-masiva.html`**: Bulk product upload interface
- **`mantenimiento.html`**: Maintenance mode page

### Static Assets
- **`script.js`**: Homepage interactions (slider, mobile menu, scroll reveals, newsletter AJAX)
- **`style.css`**: Global styles with CSS custom properties (design tokens at `:root`)
- **`todos_los_productos.js`**: Product database array (~3500+ lines)
- **`cumpleanos.json`**: Employee birthday data for corporate panel
- **`assets/`**: Images, logos, slider graphics organized in subdirectories

## Common Development Tasks

### Modifying the Homepage Slider
1. Locate the slider section in `index.html` (around line 130-180)
2. Add/remove `<div class="slide">` elements with `<picture>` tags
3. Desktop images in `assets/SLIDER/`, mobile in same directory with `-mobile` prefix
4. Slider logic in `script.js` starting line 22 (autoplay interval: 5000ms)

### Adding Products to Search
1. Edit `todos_los_productos.js`
2. Add object to `productos` array with required fields: `nombre`, `sku`, `categoria`, `url`, `imagen`
3. Search is case-insensitive, matches nombre/sku/categoria
4. Affects both homepage search and `buscador.html`

### Updating Navigation
Navigation is **duplicated** across all pages. To update:
1. Locate `<nav class="main-nav">` in each HTML file
2. Update both desktop (`<div class="nav-links">`) and mobile (`<div id="mobile-menu">`) menus
3. Keep dropdown structure consistent for "Utilidades" menu

### Styling Conventions
- Use CSS custom properties from `:root` in `style.css`:
  - `--brand`: Primary dark blue (#272e68)
  - `--accent`: Orange (#ec6434)
  - `--surface`, `--card`, `--shadow`: Layout utilities
- Page-specific styles go in inline `<style>` blocks (not in `style.css`)
- Follow existing BEM-like naming (e.g., `.chat-msg--bot`, `.card-link`)

### Firebase Configuration
Firebase is configured inline in admin pages. To modify:
1. Locate `firebaseConfig` object in `<script>` tags
2. Admin pages use authentication check before showing content
3. Service workers are intentionally unregistered in `panel-admin.html` (line 16-24)

## Design System Notes

### Color Palette
- **Brand Primary**: `#272e68` (dark blue)
- **Brand Secondary**: `#1f244f` (darker blue)
- **Accent**: `#ec6434` (orange) - used for CTAs, highlights
- **Backgrounds**: `#f9fafb` (surface), `#ffffff` (card)

### Typography
- Font family: "Inter" (loaded from Google Fonts)
- Weights used: 400 (regular), 500 (medium), 700 (bold), 800 (extra bold)
- Headings: `font-weight: 700-800`

### Responsive Breakpoints
- Mobile-first approach with `@media (max-width: 768px)` for phones
- Some utilities use `(max-width: 480px)` for very small screens
- Desktop navigation hidden on mobile, replaced with hamburger menu

## Testing Considerations

### Manual Testing Checklist
- Test mobile menu toggle on small screens
- Verify slider autoplay and manual controls (arrows, dots, keyboard, swipe)
- Check search functionality with various queries (accents, case, SKU numbers)
- Test chatbot: open/close, message sending, Markdown rendering, character counter
- Verify calculator outputs with known values
- Test newsletter form submission (check AJAX, success/error messages)

### Cross-Browser Notes
- Chat uses `scrollBehavior: smooth` (may need polyfill for old browsers)
- Service workers unregistered in admin panel to avoid Firestore conflicts
- PWA manifest exists (`manifest-vendedores.json`, `sw-vendedores.js`) but minimal implementation

## External Dependencies

### CDN Resources
- Font Awesome 6.5.2 (icons)
- Google Fonts (Inter family)
- jsPDF + AutoTable (admin panel PDF generation)
- Firebase SDK (admin/corporate panels)

### Third-Party Services
- **Google Analytics**: Tracking ID `G-QBM51JZ19R`
- **n8n Webhooks**: Railway-hosted at `n8n-production-4e14.up.railway.app`
- **Catalog**: External React app at `catalogo.rossomateriales.site`
- **Promotions**: External app at `rossomateriales.netlify.app`
- **Mailrelay**: Newsletter subscription at `rossomateriales1.ipzmarketing.com`

## Deployment Notes
- This is a static site - no build process required
- Deploy entire directory to web server (Apache, Nginx, Netlify, etc.)
- Ensure `.html` files are served with correct MIME types
- Images are already optimized (`.webp` format used extensively)
- No environment variables in frontend code - all config is inline
