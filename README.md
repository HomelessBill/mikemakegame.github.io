# Mike Make Game Website

Company website for Mike Make Game - an engineering-first game studio and consulting service.

## Tech Stack
- **Framework**: Astro
- **Styling**: Tailwind CSS v4
- **Deployment**: GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

### Core Functionality
- ✅ **Responsive Design** - Mobile-first layout that scales beautifully across all devices
- ✅ **Parallax Background** - Simplified grid background with smooth scroll-based parallax effect
- ✅ **Theme System** - 20+ color theme variations accessible via bottom-right switcher
- ✅ **Themed Scrollbar** - Custom scrollbar that adapts to selected theme colors
- ✅ **Lazy Loading** - Optimized image loading for better performance
- ✅ **Smooth Scrolling** - Enhanced navigation with smooth scroll behavior
- ✅ **Back-to-Top Button** - Fades in on scroll for easy navigation

### Design & Polish
- ✅ **Hero Banner** - Animated typewriter effect with custom timing and colors (40vh on desktop)
- ✅ **Game Section** - Steam-style layout with trailer, screenshot gallery, and description
  - Horizontal scrollable screenshot gallery (shows 3, scrolls to 5)
  - Click screenshots for fullscreen overlay (80% viewport)
  - YouTube trailer with `?preview` URL parameter for testing
- ✅ **Credits Section** - Theme-aware cards for major/minor contributions with copyright notice
- ✅ **Consulting Section** - Two-column expertise showcase with platform placeholders
- ✅ **About Section** - Professional bio with social links (LinkedIn, YouTube)

### Performance
- ✅ **Image Optimization** - 98% size reduction on all images
  - Credit cards: All under 60KB (from 20MB total to 365KB)
  - Hero banners: All under 273KB at 1920x600px
  - Screenshots: All under 210KB at 1280x720px
  - Auto-optimization script using Sharp
- ✅ **Lazy Loading** - Deferred loading for below-the-fold images
- ✅ **Preloading** - Critical assets preloaded for faster initial render
 
## Special Features

### Trailer Preview Mode
Add `?preview` to the URL to show the YouTube trailer embed (e.g., `http://localhost:4321/?preview` or `https://mikemakegame.com/?preview`). Without the parameter, shows "Trailer Coming Soon" placeholder.

### Theme Customization
- 20+ built-in themes (laser variations, cyberpunk, synthwave, etc.)
- Custom scrollbar colors that adapt to each theme
- Persisted selection in localStorage
- Accessible via bottom-right theme switcher button

## TODO

### Content Needed
- [ ] **Bricknosis Assets**
  - [ ] Real screenshots (currently using placeholders from other games)
  - [ ] Final trailer (currently using test video)
- [ ] **Branding Assets**
  - [ ] Favicon and touch icons (16x16, 32x32, 192x192)
  - [ ] Professional headshot for About section
  - [ ] Platform logos (PlayStation, Xbox, Steam, Unreal, etc.)

### Future Enhancements
- [ ] Scroll-triggered fade-in animations
- [ ] WebP format with JPG fallback
- [ ] Analytics integration
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] SEO optimization review

## Image Guidelines

### Credit Cards
- **Dimensions**: 600x340px (16:9 ratio)
- **Format**: JPG
- **Quality**: 80-85%
- **Max size**: 100KB

### Hero Banners
- **Dimensions**: 1920x600px (or 1920x480px for more compact)
- **Format**: JPG
- **Quality**: 85%
- **Max size**: 200KB
- **Focus**: Center-crop with key artwork visible

### Screenshots
- **Dimensions**: 1280x720px (16:9 ratio)
- **Format**: JPG
- **Quality**: 85%
- **Max size**: 300KB
- **Usage**: Scrollable gallery + fullscreen overlay

## Directory Structure

```
/
├── src/
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page files (routes)
│   └── styles/         # CSS and theme files
├── public/
│   ├── credits/        # Game credit images (600x340)
│   ├── banners/        # Hero banner images (1920x600)
│   └── screenshots/    # Game screenshots (1280x720)
├── SourceArt/          # Original high-res images
├── optimize-images.js  # Image optimization script
└── dist/               # Build output
```

## Deployment

Site automatically deploys to GitHub Pages when pushing to main branch.
