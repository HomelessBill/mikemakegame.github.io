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

## TODO List

### Mike's Remaining Asset Tasks
- [ ] **Bricknosis Assets** (Priority: HIGH)
  - [ ] Get YouTube or Steam trailer embed URL
  - [ ] Capture 4-6 screenshots (16:9 aspect ratio, 1280x720 minimum)
  - [ ] Optional: Create Bricknosis logo/header image to replace text title

- [ ] **Logo Optimization** (Priority: MEDIUM)
  - [ ] Optimize PNG logos while preserving transparency
  - [ ] Create favicon from icon (16x16, 32x32, 192x192)

- [ ] **Platform Logos** (Priority: LOW)
  - [ ] Gather platform logos for Consulting section (PlayStation, Xbox, Steam, Unreal, etc.)

### Today's Completed Updates
- [x] **Image Optimization** - All game images optimized (98% size reduction!)
  - [x] Credit cards: All under 60KB (from 20MB total to 365KB)
  - [x] Hero banners: Created at 1920x600px, all under 261KB
  - [x] Auto-optimization script created using Sharp
- [x] **Bricknosis Content** - Updated with real game copy and features
- [x] **Consulting Services** - Side-by-side layout with expertise bullets
- [x] **Platform logo placeholders** - Grid layout ready for real logos
- [x] **Multi-paragraph support** - GameCard now handles paragraph breaks

### Recent Updates
- [x] Laser theme as default with 8 variants
- [x] Bricknosis game section with 60/40 trailer/description layout
- [x] Steam button with official SVG branding
- [x] Header with split logo (icon + text)
- [x] Enhanced hero text drop shadow (stronger readability)

### Upcoming Features
- [ ] Add professional headshot to About section
- [ ] Add LinkedIn link
- [ ] Add favicon and touch icons
- [ ] Add Open Graph image for social sharing
- [ ] Implement trailer embed when available
- [ ] Add real screenshots when ready

### Future Optimizations
- [ ] Set up automated image processing with Sharp
- [ ] Add WebP format with JPG fallback
- [ ] Implement proper SEO meta tags
- [ ] Add structured data for Google
- [ ] Set up analytics
- [ ] Performance audit and optimization
- [ ] Cross-browser testing
- [ ] Accessibility audit

### Completed
- [x] Fix hamburger menu on mobile
- [x] Restructure with Astro components
- [x] Theme system with Laser variations
- [x] Fix section dividers
- [x] Add credit card images
- [x] Remove duplicate headings
- [x] Update release date and Steam link

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

## Directory Structure

```
/
├── src/
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page files (routes)
│   └── styles/         # CSS and theme files
├── public/
│   ├── credits/        # Game credit images
│   └── hero/           # Hero banner images (to be created)
├── SourceArt/          # Original high-res images
└── dist/               # Build output
```

## Deployment

Site automatically deploys to GitHub Pages when pushing to main branch.