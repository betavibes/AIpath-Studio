from PIL import Image, ImageDraw, ImageFont
import os

# Create images directory if it doesn't exist
output_dir = r"c:\Users\Anuj Singh\Desktop\AI DigiNext\Website - Vibe Coding\AIpath Studio\public\images\services"
os.makedirs(output_dir, exist_ok=True)

# Service configurations with gradients
services = [
    {
        "name": "ai-chatbot",
        "icon": "💬",
        "gradient": [(59, 130, 246), (6, 182, 212)],  # blue to cyan
        "title": "AI Chatbots"
    },
    {
        "name": "automation",
        "icon": "⚡",
        "gradient": [(168, 85, 247), (236, 72, 153)],  # purple to pink
        "title": "Automations"
    },
    {
        "name": "branding",
        "icon": "🎨",
        "gradient": [(249, 115, 22), (239, 68, 68)],  # orange to red
        "title": "Product Branding"
    },
    {
        "name": "content-writing",
        "icon": "✍️",
        "gradient": [(34, 197, 94), (20, 184, 166)],  # green to teal
        "title": "Content Writing"
    },
    {
        "name": "social-media",
        "icon": "📱",
        "gradient": [(99, 102, 241), (168, 85, 247)],  # indigo to purple
        "title": "Social Media"
    },
    {
        "name": "ai-photoshoot",
        "icon": "📸",
        "gradient": [(236, 72, 153), (244, 63, 94)],  # pink to rose
        "title": "AI Photoshoots"
    },
    {
        "name": "ai-blogs",
        "icon": "📝",
        "gradient": [(234, 179, 8), (249, 115, 22)],  # yellow to orange
        "title": "AI-Based Blogs"
    },
    {
        "name": "email-campaigns",
        "icon": "📧",
        "gradient": [(59, 130, 246), (99, 102, 241)],  # blue to indigo
        "title": "Email Campaigns"
    },
    {
        "name": "lead-generation",
        "icon": "📍",
        "gradient": [(239, 68, 68), (236, 72, 153)],  # red to pink
        "title": "Lead Generation"
    }
]

def create_gradient(width, height, color1, color2):
    """Create a gradient image"""
    base = Image.new('RGB', (width, height), color1)
    top = Image.new('RGB', (width, height), color2)
    mask = Image.new('L', (width, height))
    mask_data = []
    for y in range(height):
        for x in range(width):
            # Diagonal gradient
            mask_data.append(int(255 * ((x + y) / (width + height))))
    mask.putdata(mask_data)
    base.paste(top, (0, 0), mask)
    return base

def add_pattern(draw, width, height):
    """Add geometric pattern overlay"""
    # Add circles
    for i in range(0, width + 200, 200):
        for j in range(0, height + 200, 200):
            draw.ellipse([i-100, j-100, i+100, j+100], outline=(255, 255, 255, 30), width=2)
    
    # Add lines
    for i in range(0, width, 100):
        draw.line([(i, 0), (i + height, height)], fill=(255, 255, 255, 20), width=1)

# Generate images
for service in services:
    print(f"Generating image for {service['title']}...")
    
    # Create base gradient
    width, height = 1200, 800
    img = create_gradient(width, height, service['gradient'][0], service['gradient'][1])
    
    # Add overlay for depth
    overlay = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    
    # Add pattern
    add_pattern(draw, width, height)
    
    # Add semi-transparent overlay
    overlay_layer = Image.new('RGBA', (width, height), (0, 0, 0, 40))
    img = Image.alpha_composite(img.convert('RGBA'), overlay_layer)
    img = Image.alpha_composite(img, overlay)
    
    # Try to add text with icon
    try:
        # Use a larger font size for the icon
        font_size = 200
        try:
            # Try to use a system font that supports emojis
            font = ImageFont.truetype("seguiemj.ttf", font_size)
        except:
            try:
                font = ImageFont.truetype("arial.ttf", font_size)
            except:
                font = ImageFont.load_default()
        
        # Draw icon in center
        text = service['icon']
        draw = ImageDraw.Draw(img)
        
        # Get text bounding box
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        # Center position
        x = (width - text_width) // 2
        y = (height - text_height) // 2
        
        # Draw text with shadow
        draw.text((x+5, y+5), text, font=font, fill=(0, 0, 0, 100))
        draw.text((x, y), text, font=font, fill=(255, 255, 255, 200))
        
    except Exception as e:
        print(f"Could not add text: {e}")
    
    # Save image
    output_path = os.path.join(output_dir, f"{service['name']}.jpg")
    img.convert('RGB').save(output_path, 'JPEG', quality=90, optimize=True)
    print(f"✓ Saved: {output_path}")

print("\n✅ All service images generated successfully!")