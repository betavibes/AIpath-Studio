# Customization Guide

Quick guide to customize your AIpath website.

---

## 🎨 Change Colors

### Option 1: Update Tailwind Config
Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    },
  },
}
```

### Option 2: Direct in Components
Replace gradient classes like:
- `from-blue-600 to-purple-600` → `from-green-600 to-teal-600`

---

## ✏️ Edit Text Content

### Hero Section
**File:** `components/HeroSection.tsx`
- Line 10-14: Brand name and tagline
- Line 18-28: Description text
- Line 32-42: CTA button text

### Services
**File:** `components/ServicesSection.tsx`
- Line 3-52: Services array with titles, descriptions, icons

### Why Choose Section
**File:** `components/WhyChooseSection.tsx`
- Line 3-24: Reasons array with titles and descriptions

### CTA Section
**File:** `components/CTASection.tsx`
- Line 8-12: Main heading and subheading
- Line 16-26: Button text

---

## 🖼️ Add Images/Logos

### 1. Create Public Folder
```bash
mkdir public
mkdir public/images
```

### 2. Add Your Images
Place images in `public/images/`

### 3. Use in Components
```tsx
import Image from 'next/image'

<Image 
  src="/images/logo.png" 
  alt="AIpath Logo"
  width={200}
  height={50}
/>
```

### Replace Brand Name with Logo
In `components/Navbar.tsx` (line 13-17):
```tsx
<Image 
  src="/images/logo.png" 
  alt="AIpath"
  width={120}
  height={40}
/>
```

---

## 🔗 Update Navigation Links

**File:** `components/Navbar.tsx`

### Desktop Menu (lines 21-47)
```tsx
<Link href="/your-page">Your Link</Link>
```

### Mobile Menu (lines 73-103)
Same structure, just update href attributes

---

## 📄 Add New Pages

### 1. Create Page File
```bash
# Create folder and file
app/your-page/page.tsx
```

### 2. Add Content
```tsx
export default function YourPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <h1>Your Page Title</h1>
      <p>Your content here</p>
    </div>
  );
}
```

### 3. Add to Navigation
Update `components/Navbar.tsx` with new link

---

## 🎯 Modify Service Cards

**File:** `components/ServicesSection.tsx`

### Add New Service
```tsx
{
  title: "Your Service",
  description: "Your description here.",
  icon: "🎯",
  gradient: "from-blue-500 to-green-500",
}
```

### Remove Service
Delete the service object from the array

### Change Icon
Replace emoji or use:
```tsx
<svg>...</svg>  // Custom SVG icon
```

---

## 📊 Update Statistics

### Hero Section Stats
**File:** `components/HeroSection.tsx` (lines 47-62)
```tsx
<div className="text-4xl font-bold text-blue-600 mb-2">
  YOUR_NUMBER
</div>
<div className="text-sm text-gray-600">
  Your Label
</div>
```

### Why Choose Stats
**File:** `components/WhyChooseSection.tsx` (lines 58-85)
Same structure as above

---

## 🔘 Customize Buttons

### Change Button Style
Find button code and modify classes:

```tsx
// Gradient Button
className="bg-gradient-to-r from-blue-600 to-purple-600 
           text-white px-8 py-4 rounded-full"

// Outline Button
className="bg-white text-gray-900 border-2 border-gray-300 
           px-8 py-4 rounded-full"

// Solid Button
className="bg-blue-600 text-white px-8 py-4 rounded-lg"
```

---

## 🌐 Update Footer

**File:** `components/Footer.tsx`

### Change Links (lines 17-48)
```tsx
<Link href="/your-page">Your Link</Link>
```

### Update Social Media (lines 56-76)
Replace `href="#"` with your social media URLs

### Change Copyright (line 79)
```tsx
© 2024 Your Company. All rights reserved.
```

---

## 📱 Adjust Responsive Behavior

### Change Grid Columns
```tsx
// Current: 1 column mobile, 2 tablet, 3 desktop
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Change to: 1 column mobile, 3 tablet, 4 desktop
className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
```

### Adjust Spacing
```tsx
// Padding
className="py-20"  // Change to py-10, py-16, py-24, etc.

// Gap between items
className="gap-8"  // Change to gap-4, gap-6, gap-12, etc.
```

---

## 🎭 Add Animations

### Install Framer Motion (Optional)
```bash
npm install framer-motion
```

### Use in Components
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

---

## 🔍 SEO Optimization

### Update Metadata
**File:** `app/layout.tsx` (lines 9-12)
```tsx
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
};
```

### Add Page-Specific Metadata
In any page file:
```tsx
export const metadata = {
  title: "Page Title",
  description: "Page description",
};
```

---

## 🚀 Performance Tips

### 1. Optimize Images
- Use WebP format
- Compress images before uploading
- Use Next.js Image component

### 2. Lazy Load Components
```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'))
```

### 3. Minimize Bundle Size
- Remove unused imports
- Use tree-shaking
- Check bundle with: `npm run build`

---

## 🐛 Common Issues

### Issue: Styles not applying
**Solution:** Restart dev server
```bash
Ctrl + C
npm run dev
```

### Issue: Changes not showing
**Solution:** Clear browser cache or hard refresh
```
Ctrl + Shift + R (Windows)
Cmd + Shift + R (Mac)
```

### Issue: Build errors
**Solution:** Check TypeScript errors
```bash
npm run build
```

---

## 📚 Useful Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React Icons:** https://react-icons.github.io/react-icons/
- **Google Fonts:** https://fonts.google.com/

---

## 💡 Pro Tips

1. **Test Responsiveness:** Use browser dev tools (F12) to test different screen sizes
2. **Use Git:** Version control your changes
3. **Component Reusability:** Extract repeated code into reusable components
4. **Accessibility:** Add alt text to images, use semantic HTML
5. **Performance:** Monitor with Lighthouse in Chrome DevTools

---

## 🎉 Quick Wins

### 1. Change Primary Color (5 minutes)
Find and replace all instances of `blue-600` with your color

### 2. Update All Text (10 minutes)
Edit the 4 main component files with your content

### 3. Add Your Logo (5 minutes)
Replace brand text in Navbar with Image component

### 4. Customize Footer (5 minutes)
Update links and social media URLs

### 5. Deploy to Vercel (10 minutes)
```bash
npm install -g vercel
vercel
```

---

Happy customizing! 🚀