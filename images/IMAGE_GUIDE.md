# Image Guide for A&S Flooring Website

This guide will help you add the required images to the website.

## Required Images (All in WebP format)

### 1. Logo
- **Filename**: `logo.webp`
- **Recommended Size**: 300x100px or 400x150px (3:1 ratio)
- **Format**: WebP with transparent background
- **Notes**: Your company logo

### 2. Hero Background
- **Filename**: `hero.webp`
- **Recommended Size**: 1920x1080px
- **Format**: WebP
- **Subject**: Beautiful flooring installation scene, modern living room with nice floors
- **Source Suggestions**:
  - Unsplash: https://unsplash.com/s/photos/hardwood-flooring
  - Pexels: https://www.pexels.com/search/flooring/

### 3. Service Images (6 total)

#### hardwood.webp
- **Size**: 800x600px
- **Subject**: Hardwood flooring installation or beautiful hardwood floor
- **Search**: "hardwood flooring" on Unsplash/Pexels

#### laminate.webp
- **Size**: 800x600px
- **Subject**: Laminate flooring
- **Search**: "laminate flooring" on Unsplash/Pexels

#### vinyl.webp
- **Size**: 800x600px
- **Subject**: Vinyl plank flooring (LVP)
- **Search**: "vinyl plank flooring" or "LVP flooring"

#### carpet.webp
- **Size**: 800x600px
- **Subject**: Carpet installation or nice carpet
- **Search**: "carpet flooring" on Unsplash/Pexels

#### tile.webp
- **Size**: 800x600px
- **Subject**: Tile flooring
- **Search**: "tile flooring" on Unsplash/Pexels

#### refinishing.webp
- **Size**: 800x600px
- **Subject**: Floor refinishing or sanding
- **Search**: "floor refinishing" or "wood floor restoration"

### 4. Gallery Images (6 total)

#### gallery-1.webp through gallery-6.webp
- **Size**: 800x600px each
- **Subject**: Various flooring projects (mix of hardwood, laminate, vinyl, tile, carpet)
- **Notes**: These are placeholders - replace with actual A&S Flooring project photos later

## How to Download and Convert Images

### Option 1: Using Online Tools (Easiest)

1. **Download from Unsplash/Pexels**:
   - Go to https://unsplash.com or https://pexels.com
   - Search for the subject (e.g., "hardwood flooring")
   - Download high-quality free images
   - Choose images that match the warm, professional aesthetic

2. **Convert to WebP**:
   - Go to https://cloudconvert.com/jpg-to-webp
   - Upload your downloaded images
   - Convert to WebP format
   - Download and rename according to the filenames above

### Option 2: Using Command Line (Mac/Linux)

```bash
# Install cwebp (WebP converter)
brew install webp

# Convert an image to WebP
cwebp input.jpg -q 80 -o output.webp

# Resize and convert
cwebp input.jpg -resize 800 600 -q 80 -o output.webp
```

### Option 3: Bulk Download Script

I've created a helper script below that you can use to download sample images from Unsplash.

## Quick Start: Download Sample Images

Run this command in the `images/` directory:

```bash
# Download hero image
curl -L "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1920&q=80" -o hero.jpg

# Download service images
curl -L "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80" -o hardwood.jpg
curl -L "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80" -o laminate.jpg
curl -L "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80" -o vinyl.jpg
curl -L "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" -o carpet.jpg
curl -L "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80" -o tile.jpg
curl -L "https://images.unsplash.com/photo-1621873495664-6f5c4f7e6c0e?w=800&q=80" -o refinishing.jpg

# Download gallery images
curl -L "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80" -o gallery-1.jpg
curl -L "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80" -o gallery-2.jpg
curl -L "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80" -o gallery-3.jpg
curl -L "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80" -o gallery-4.jpg
curl -L "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" -o gallery-5.jpg
curl -L "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80" -o gallery-6.jpg

# Convert all to WebP (requires cwebp)
for file in *.jpg; do
    cwebp "$file" -q 80 -o "${file%.jpg}.webp"
    rm "$file"
done
```

## Image Optimization Tips

- **Quality**: Use 80-85% quality for WebP to balance file size and quality
- **Size**: Keep images under 200KB when possible for fast loading
- **Dimensions**: Don't exceed recommended sizes to avoid unnecessary file size
- **Mobile**: WebP format provides excellent compression for mobile users

## Current Status

- [ ] logo.webp (You'll add your company logo)
- [ ] hero.webp
- [ ] hardwood.webp
- [ ] laminate.webp
- [ ] vinyl.webp
- [ ] carpet.webp
- [ ] tile.webp
- [ ] refinishing.webp
- [ ] gallery-1.webp
- [ ] gallery-2.webp
- [ ] gallery-3.webp
- [ ] gallery-4.webp
- [ ] gallery-5.webp
- [ ] gallery-6.webp

Once you have all images in place, the website will be fully functional!
