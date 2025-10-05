const fs = require('fs');
const path = require('path');

// Create images directory
const outputDir = path.join(__dirname, 'public', 'images', 'services');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Service configurations
const services = [
  { name: 'ai-chatbot', title: 'AI Chatbots', icon: '💬', colors: ['#3B82F6', '#06B6D4'] },
  { name: 'automation', title: 'Automations', icon: '⚡', colors: ['#A855F7', '#EC4899'] },
  { name: 'branding', title: 'Product Branding', icon: '🎨', colors: ['#F97316', '#EF4444'] },
  { name: 'content-writing', title: 'Content Writing', icon: '✍️', colors: ['#22C55E', '#14B8A6'] },
  { name: 'social-media', title: 'Social Media', icon: '📱', colors: ['#6366F1', '#A855F7'] },
  { name: 'ai-photoshoot', title: 'AI Photoshoots', icon: '📸', colors: ['#EC4899', '#F43F5E'] },
  { name: 'ai-blogs', title: 'AI-Based Blogs', icon: '📝', colors: ['#EAB308', '#F97316'] },
  { name: 'email-campaigns', title: 'Email Campaigns', icon: '📧', colors: ['#3B82F6', '#6366F1'] },
  { name: 'lead-generation', title: 'Lead Generation', icon: '📍', colors: ['#EF4444', '#EC4899'] }
];

// Generate SVG placeholder images
services.forEach(service => {
  const svg = `
    <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${service.name}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${service.colors[0]};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${service.colors[1]};stop-opacity:1" />
        </linearGradient>
        <pattern id="pattern-${service.name}" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
          <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
        </pattern>
      </defs>
      
      <!-- Gradient Background -->
      <rect width="1200" height="800" fill="url(#grad-${service.name})"/>
      
      <!-- Pattern Overlay -->
      <rect width="1200" height="800" fill="url(#pattern-${service.name})"/>
      
      <!-- Dark Overlay -->
      <rect width="1200" height="800" fill="rgba(0,0,0,0.15)"/>
      
      <!-- Icon -->
      <text x="600" y="450" font-size="200" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-family="Arial, sans-serif">
        ${service.icon}
      </text>
      
      <!-- Title -->
      <text x="600" y="650" font-size="48" font-weight="bold" text-anchor="middle" fill="rgba(255,255,255,0.95)" font-family="Arial, sans-serif">
        ${service.title}
      </text>
      
      <!-- Decorative circles -->
      <circle cx="150" cy="150" r="80" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="3"/>
      <circle cx="1050" cy="650" r="100" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="3"/>
      <circle cx="200" cy="700" r="60" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
      <circle cx="1000" cy="150" r="70" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
    </svg>
  `;
  
  const outputPath = path.join(outputDir, `${service.name}.svg`);
  fs.writeFileSync(outputPath, svg.trim());
  console.log(`✓ Generated: ${service.name}.svg`);
});

console.log('\n✅ All service images generated successfully!');
console.log(`📁 Location: ${outputDir}`);