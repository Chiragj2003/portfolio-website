# 🚀 Chirag J - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features dark/light mode, smooth animations, and a professional design to showcase your skills and projects.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-black?style=for-the-badge&logo=framer)
![Status](https://img.shields.io/badge/Status-Working%20✅-green?style=for-the-badge)

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Built with Next.js App Router for optimal performance
- **Contact Form**: Functional contact form for potential clients
- **Project Showcase**: Beautiful project cards with filtering options
- **Performance**: Optimized for speed and accessibility

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Footer.tsx         # Footer component
│   ├── Navbar.tsx         # Navigation bar
│   ├── ProjectCard.tsx    # Project display card
│   ├── Section.tsx        # Section wrapper
│   ├── ThemeToggle.tsx    # Theme switcher
│   └── theme-provider.tsx # Theme context provider
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Chiragj2003/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update the following files with your information:

- **`src/app/layout.tsx`**: Change title, description, and metadata
- **`src/components/Navbar.tsx`**: Update your name in the navigation
- **`src/components/Footer.tsx`**: Update social media links
- **`src/app/page.tsx`**: Modify hero section and skills
- **`src/app/about/page.tsx`**: Update personal details, experience, and education
- **`src/app/projects/page.tsx`**: Add your own projects
- **`src/app/contact/page.tsx`**: Update contact information

### Styling

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Theme**: Update `tailwind.config.ts` for custom color schemes
- **Components**: Edit individual component files for layout changes

### Projects

To add your projects, edit `src/app/projects/page.tsx`:

```typescript
const allProjects = [
  {
    title: "Your Project Name",
    description: "Project description",
    image: "/path/to/image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "full-stack",
    githubUrl: "https://github.com/username/project",
    liveUrl: "https://project-demo.vercel.app",
  },
  // Add more projects...
]
```

## 📱 Pages

### Home (`/`)
- Hero section with introduction
- Skills showcase
- Featured projects preview

### About (`/`)
- Personal information
- Work experience
- Education background
- Technical skills

### Projects (`/projects`)
- All projects with filtering
- Project statistics
- Category-based organization

### Contact (`/contact`)
- Contact form
- Contact information
- Social media links

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **Railway**: Deploy directly from GitHub
- **AWS/GCP**: Build and deploy manually

## 🔧 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
```

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for best user experience
- **SEO**: Built with Next.js for optimal search engine optimization
- **Accessibility**: WCAG 2.1 AA compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons

## 📞 Contact

- **Email**: chiragj2003@gmail.com
- **GitHub**: [@Chiragj2003](https://github.com/Chiragj2003)
- **LinkedIn**: [Chirag J](https://linkedin.com/in/chiragj2003)
- **Portfolio**: [chiragj.vercel.app](https://chiragj.vercel.app)

---

⭐ **Star this repository if you found it helpful!**
