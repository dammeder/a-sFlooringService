# A&S Flooring Website

Professional flooring installation services website for A&S Flooring, serving the Philadelphia area.

## Features

- 🎨 Modern, mobile-first responsive design
- 📱 Multi-step contact form with validation
- 📍 Google Places Autocomplete for addresses
- 📊 Google Sheets integration for lead tracking
- 📱 Dual SMS notifications (owner + customer)
- 🔒 Licensed & Insured badges
- 🖼️ Service showcase and gallery
- ⚡ Fast loading with WebP images
- 🌐 Custom domain with free HTTPS

## Tech Stack

- HTML5, CSS3, JavaScript (Vanilla)
- Google Places API
- Google Apps Script
- Textbelt SMS API
- GitHub Pages hosting

## Project Structure

```
a-sFlooringService/
├── index.html              # Main website file
├── styles.css              # Styling (mobile-first)
├── script.js               # Form logic & interactions
├── CNAME                   # Custom domain configuration
├── images/                 # Website images
│   ├── logo.webp          # Company logo
│   ├── hero.webp          # Hero background
│   ├── hardwood.webp      # Service images
│   ├── laminate.webp
│   ├── vinyl.webp
│   ├── carpet.webp
│   ├── tile.webp
│   ├── refinishing.webp
│   ├── gallery-1.webp     # Gallery images
│   ├── gallery-2.webp
│   ├── gallery-3.webp
│   ├── gallery-4.webp
│   ├── gallery-5.webp
│   └── gallery-6.webp
├── DEPLOYMENT.md          # Deployment instructions
├── GOOGLE_SHEETS_SETUP.md # Google Sheets integration guide
├── GOOGLE_PLACES_SETUP.md # Google Places API setup
└── README.md              # This file
```

## Setup Instructions

### 1. Add Images

See `images/IMAGE_GUIDE.md` for detailed instructions on adding all required images.

**Quick start**: Add your logo as `images/logo.webp` (300x100px or 400x150px recommended)

### 2. Set Up Google Places API

Follow `GOOGLE_PLACES_SETUP.md` to enable address autocomplete.

**Summary**:
1. Create Google Cloud project
2. Enable Places API
3. Get API key
4. Update `index.html` with your API key

### 3. Set Up Google Sheets Integration

Follow `GOOGLE_SHEETS_SETUP.md` to connect the form to Google Sheets and enable SMS notifications.

**Summary**:
1. Create Google Sheet for leads
2. Set up Google Apps Script
3. Configure owner phone number and Textbelt API key
4. Deploy as web app
5. Update `script.js` with web app URL

### 4. Deploy to GitHub Pages

Follow `DEPLOYMENT.md` for complete deployment instructions.

**Summary**:
1. Push code to GitHub repository
2. Enable GitHub Pages
3. Configure Namecheap DNS
4. Wait for DNS propagation
5. Enable HTTPS

## Local Development

To test the website locally:

```bash
# Option 1: Python 3
python3 -m http.server 8000

# Option 2: Python 2
python -m SimpleHTTPServer 8000

# Option 3: Node.js (if you have it)
npx http-server

# Then open: http://localhost:8000
```

**Note**: Google Places API and form submission won't work locally until you:
- Add `http://localhost:*/*` to your API key restrictions
- Set up the Google Apps Script web app

## Customization

### Update Contact Information

Edit `index.html` and replace placeholder contact info:
- Phone: `(215) 555-0100` → Your actual phone
- Email: `contact@ansflooringservices.com` → Your actual email
- Address: `Philadelphia, PA` → Your actual address

### Update Company Information

In `index.html`, update:
- Owner name (currently: Ozzy Oswaldo)
- Years in business
- Service area description

### Change Colors

Edit `styles.css` CSS variables at the top:
```css
:root {
    --primary-brown: #8B7355;
    --primary-tan: #A0826D;
    --secondary-cream: #F5F5DC;
    --secondary-beige: #FAF8F3;
    --accent-dark: #6B5D4F;
}
```

### Add/Remove Services

Edit the services section in `index.html` (around line 40). Each service card follows this structure:

```html
<div class="service-card">
    <div class="service-image">
        <img src="images/service-name.webp" alt="Service Name">
    </div>
    <h3>Service Name</h3>
    <p>Service description...</p>
    <a href="#contact" class="service-link">Get Free Quote</a>
</div>
```

## Form Fields

The multi-step contact form collects:

**Step 1 - Contact Info**:
- Full Name (required)
- Phone Number (required)
- Email (optional)

**Step 2 - Project Details**:
- Service Type (required)
- Floor Material
- Square Footage
- Address (required, with autocomplete)

**Step 3 - Timeline & Notes**:
- Timeline (required)
- Additional Notes (optional)

## SMS Notifications

When a form is submitted:
1. ✅ Data saved to Google Sheet
2. ✅ SMS sent to owner with lead details
3. ✅ SMS sent to customer with confirmation

**Textbelt Pricing**:
- Free: 1 text/day (testing)
- Paid: $0.0035/text
- 2 SMS per lead = $0.007/lead

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Mobile-first responsive design
- WebP images for optimal compression
- Lazy loading for gallery images
- Minimal JavaScript dependencies
- Fast loading on 3G/4G networks

## Security

- ✅ HTTPS enabled via GitHub Pages
- ✅ API keys restricted to specific domains
- ✅ Form validation on client and server side
- ✅ No sensitive data stored in code

## Maintenance

### Update Gallery Images
Replace `images/gallery-*.webp` files with actual project photos. Keep dimensions at 800x600px for consistency.

### Monitor Leads
Check your Google Sheet regularly for new submissions.

### Check API Usage
Monitor Google Places API usage in Google Cloud Console to ensure you stay within free tier.

### Update Content
Edit `index.html` to update services, pricing, or company information.

## Troubleshooting

### Form not submitting
- Check browser console for errors
- Verify Google Apps Script URL is correct in `script.js`
- Test Google Apps Script deployment

### Address autocomplete not working
- Verify Google Places API is enabled
- Check API key in `index.html`
- Ensure domain is in API key restrictions

### SMS not sending
- Check phone number format in Apps Script
- Verify Textbelt API key
- Check Apps Script execution logs

### Website not loading on custom domain
- Verify DNS settings in Namecheap
- Wait for DNS propagation (up to 48 hours)
- Check GitHub Pages settings

## Support

For issues or questions:
1. Check the setup guides in this repository
2. Review browser console for errors
3. Check Google Apps Script execution logs
4. Verify all API keys and URLs are correct

## License

© 2026 A&S Flooring. All rights reserved.

## Credits

- Design inspired by modern flooring service websites
- Stock images from Unsplash/Pexels (to be replaced with actual project photos)
- Icons from Lucide (inline SVG)
