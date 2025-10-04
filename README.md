# AIpath Studio - Next.js Website

A modern, professional SaaS-style website for AIpath - an AI-powered automation, branding, and digital growth platform.

## Features

- **Modern Design**: Clean, professional UI with gradient effects and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Next.js 14**: Built with the latest Next.js App Router
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Project Structure

```
AIpath Studio/
├── app/
│   ├── layout.tsx          # Root layout with Navbar and Footer
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Top navigation bar
│   ├── HeroSection.tsx     # Hero section with tagline and CTA
│   ├── ServicesSection.tsx # Services grid with 9 AI services
│   ├── WhyChooseSection.tsx # Why choose AIpath section
│   ├── CTASection.tsx      # Call-to-action section
│   └── Footer.tsx          # Footer with links and social media
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### 3. Build for Production

```bash
npm run build
npm start
```

## Homepage Sections

### 1. Hero Section
- Brand name: **AIpath**
- Tagline: **Automate. Create. Accelerate.**
- Compelling description about AI-powered solutions
- Two CTA buttons: "Get Started" and "Explore Services"
- Quick stats showcase

### 2. Services Section
Nine AI-powered services displayed in a responsive grid:
- AI Chatbots
- Automations
- Product Branding
- Content Writing Services
- Social Media Automation
- AI Photoshoots
- AI-Based Blogs
- Email Campaigns
- Leads Collection from Google Maps

### 3. Why Choose AIpath Section
Four key benefits:
- All-in-One AI Marketing & Automation Platform
- Scalable for Startups, SMBs, and Enterprises
- Saves Time and Costs While Improving Results
- Backed by Cutting-Edge AI Innovations

### 4. CTA Section
Final call-to-action encouraging visitors to:
- Get Started Free
- Request a Demo

## Customization

### Colors
The website uses a gradient color scheme. You can customize colors in `tailwind.config.ts` or directly in components using Tailwind classes.

### Content
All content is in the component files. Edit the following files to update content:
- `components/HeroSection.tsx` - Hero section text
- `components/ServicesSection.tsx` - Services descriptions
- `components/WhyChooseSection.tsx` - Benefits and reasons
- `components/CTASection.tsx` - Call-to-action text

### Navigation
Update navigation links in `components/Navbar.tsx`.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## License

This project is private and proprietary.

## Support

For support, contact the AIpath team.