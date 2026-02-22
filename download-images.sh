#!/bin/bash

# A&S Flooring - Image Download Script
# This script downloads sample stock images from Unsplash for the website
# You can replace these with actual A&S Flooring project photos later

echo "🖼️  Downloading sample images for A&S Flooring website..."
echo ""

cd images

# Download hero image
echo "Downloading hero image..."
curl -L "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1920&q=80" -o hero.jpg

# Download service images
echo "Downloading hardwood flooring image..."
curl -L "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80" -o hardwood.jpg

echo "Downloading laminate flooring image..."
curl -L "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80" -o laminate.jpg

echo "Downloading vinyl flooring image..."
curl -L "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80" -o vinyl.jpg

echo "Downloading carpet image..."
curl -L "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" -o carpet.jpg

echo "Downloading tile flooring image..."
curl -L "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80" -o tile.jpg

echo "Downloading refinishing image..."
curl -L "https://images.unsplash.com/photo-1621873495664-6f5c4f7e6c0e?w=800&q=80" -o refinishing.jpg

# Download gallery images
echo "Downloading gallery images..."
curl -L "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80" -o gallery-1.jpg
curl -L "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80" -o gallery-2.jpg
curl -L "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80" -o gallery-3.jpg
curl -L "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80" -o gallery-4.jpg
curl -L "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" -o gallery-5.jpg
curl -L "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80" -o gallery-6.jpg

echo ""
echo "✅ Downloaded all JPG images"
echo ""

# Check if cwebp is installed
if command -v cwebp &> /dev/null; then
    echo "Converting images to WebP format..."
    for file in *.jpg; do
        if [ -f "$file" ]; then
            echo "Converting $file..."
            cwebp "$file" -q 80 -o "${file%.jpg}.webp"
            rm "$file"
        fi
    done
    echo ""
    echo "✅ All images converted to WebP format"
else
    echo "⚠️  cwebp not found. Images are in JPG format."
    echo "To convert to WebP:"
    echo "  1. Install webp: brew install webp"
    echo "  2. Run: for f in *.jpg; do cwebp \$f -q 80 -o \${f%.jpg}.webp && rm \$f; done"
    echo ""
    echo "Or use an online converter: https://cloudconvert.com/jpg-to-webp"
fi

echo ""
echo "📝 Don't forget to add your logo as 'logo.webp' (300x100px or 400x150px)"
echo ""
echo "🎉 Done! Check the images/ folder"
