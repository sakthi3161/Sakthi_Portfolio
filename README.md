# Sakthimurugan E - Portfolio Website

A modern, responsive portfolio website showcasing AI & Data Science projects, web development skills, and professional experience.

## ✨ Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: System preference detection with manual toggle
- **Performance Optimized**: Lighthouse score ≥ 90
- **Accessible**: WCAG AA compliant with proper ARIA labels
- **SEO Ready**: OpenGraph, Twitter Cards, structured data
- **Glassmorphism Design**: Modern aesthetic with backdrop blur effects
- **Smooth Animations**: Respects `prefers-reduced-motion`
- **Easy Content Management**: JSON-based configuration

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom utilities
- **Icons**: Lucide React  
- **Fonts**: Poppins, Inter, JetBrains Mono (Google Fonts)
- **Deployment**: Ready for Netlify, Vercel, or similar

## 📦 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx          # Navigation with mobile drawer
│   │   └── Footer.tsx          # Footer with links & structured data
│   ├── Sections/
│   │   ├── Hero.tsx            # Landing section with CTA
│   │   ├── About.tsx           # Education & achievements
│   │   ├── Experience.tsx      # Timeline of work experience
│   │   ├── Skills.tsx          # Skills with progress indicators
│   │   ├── Projects.tsx        # Project showcase with filtering
│   │   └── Contact.tsx         # Contact form & information
│   └── UI/
│       ├── ThemeToggle.tsx     # Dark/Light/System theme switcher
│       └── SocialLinks.tsx     # Social media links
├── hooks/
│   └── useActiveSection.ts     # Track active section for navigation
├── config/
│   └── portfolio.json          # All content configuration
├── App.tsx                     # Main app component
├── index.css                   # Global styles & utilities
└── main.tsx                    # App entry point
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sakthimurugan-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Content Management

All content is managed through `src/config/portfolio.json`. Update this file to:

- Personal information and contact details
- Skills and technologies
- Projects with descriptions and links
- Work experience and achievements
- Education and certifications

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js` and throughout the components:
- Primary: Blue (#1d4ed8)
- Accent: Emerald (#10b981)
- Dark: Slate (#0f172a)

### Fonts
Current font stack (defined in `index.css`):
- Headings: Poppins
- Body: Inter
- Code: JetBrains Mono

### Animations
Animations respect user preferences and can be customized in the CSS variables:
```css
:root {
  --animation-duration: 300ms;
}
```

## 🌐 SEO & Metadata

The site includes comprehensive SEO setup:
- Dynamic page titles and descriptions
- OpenGraph tags for social media
- Twitter Card metadata  
- Structured data (JSON-LD) for rich snippets
- Proper canonical URLs
- Sitemap and robots.txt

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Skip-to-content link
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Screen reader friendly

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import project from GitHub
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

**Sakthimurugan E**
- Email: sakthimurugan3161@gmail.com
- Phone: +91 93453 92724
- LinkedIn: [Connect with me](https://linkedin.com/in/sakthimurugan)
- GitHub: [View my projects](https://github.com/sakthimurugan)

---

Built with ❤️ and lots of ☕ by Sakthimurugan E