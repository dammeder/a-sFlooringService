# Quick Start Guide - A&S Flooring Website

Get your website up and running in 5 steps!

## Step 1: Add Images (15 minutes)

### Option A: Download Sample Images (Quick)

```bash
# Run the download script
./download-images.sh

# Then add your logo
# Place your logo as: images/logo.webp (300x100px or 400x150px)
```

### Option B: Manual Download

See `images/IMAGE_GUIDE.md` for detailed instructions.

**Required**:
- [ ] `images/logo.webp` - Your company logo
- [ ] `images/hero.webp` - Hero background
- [ ] 6 service images (hardwood, laminate, vinyl, carpet, tile, refinishing)
- [ ] 6 gallery images

---      

## Step 2: Set Up Google Places API (20 minutes)

This enables address autocomplete in the contact form.

**Follow**: `GOOGLE_PLACES_SETUP.md`

**Quick Summary**:
1. Create Google Cloud project
2. Enable Places API
3. Get API key
4. Update `index.html` line 365 with your API key

**Skip if**: You want users to type addresses manually (form still works)

---

## Step 3: Set Up Google Sheets + SMS (30 minutes)

This connects the form to Google Sheets and enables SMS notifications.

**Follow**: `GOOGLE_SHEETS_SETUP.md`

**Quick Summary**:
1. Create Google Sheet named "A&S Flooring Leads"
2. Set up Google Apps Script (copy/paste provided code)
3. Update owner phone number in script
4. Deploy as web app
5. Copy web app URL to `script.js` line 157

**Important**: Update these in the Apps Script:
- `OWNER_PHONE` - Ozzy's phone number
- `TEXTBELT_API_KEY` - Keep as `'textbelt'` for free tier

---

## Step 4: Deploy to GitHub Pages (30 minutes)

**Follow**: `DEPLOYMENT.md`

**Quick Summary**:

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit - A&S Flooring website"
git remote add origin https://github.com/YOUR_USERNAME/a-sFlooringService.git
git push -u origin main

# 2. Enable GitHub Pages
# Go to repo Settings → Pages → Source: main branch

# 3. Configure Namecheap DNS
# Add 4 A Records and 1 CNAME Record (see DEPLOYMENT.md)

# 4. Add custom domain in GitHub Pages
# Settings → Pages → Custom domain: ansflooringservices.com

# 5. Wait for DNS propagation (1-2 hours usually)

# 6. Enable HTTPS
# Settings → Pages → Check "Enforce HTTPS"
```

---

## Step 5: Test Everything (15 minutes)

### Checklist

- [ ] Website loads at `https://ansflooringservices.com`
- [ ] Mobile menu works on phone
- [ ] All images display correctly
- [ ] Contact form Step 1 → Step 2 → Step 3 works
- [ ] Address autocomplete works (if Google Places is set up)
- [ ] Form submission saves to Google Sheet
- [ ] Owner receives SMS notification
- [ ] Customer receives confirmation SMS

---

## Customization Checklist

Before going live, update these placeholders:

### In `index.html`:

- [ ] Phone number: `(215) 555-0100` → Your actual phone
- [ ] Email: `contact@ansflooringservices.com` → Your actual email
- [ ] Address: `Philadelphia, PA` → Your actual address
- [ ] All instances of placeholder contact info

### In Google Apps Script:

- [ ] `OWNER_PHONE` → Ozzy's actual phone number
- [ ] Test the `testSMS()` function

### Images:

- [ ] Replace gallery stock photos with actual A&S Flooring projects
- [ ] Add company logo

---

## Costs Summary

| Item | Cost |
|------|------|
| Domain (already purchased) | ~$12/year |
| GitHub Pages Hosting | FREE |
| SSL Certificate | FREE |
| Google Places API | FREE (28k requests/month) |
| SMS (Textbelt free tier) | FREE (1 text/day, testing only) |
| SMS (Textbelt paid) | $0.007/lead (production) |

**Monthly cost**: ~$1-2 for SMS (depending on leads)

---

## Common Issues

### Images not loading
- Check filenames match exactly (case-sensitive)
- Verify images are in `images/` folder
- Make sure images are committed to GitHub

### Form not submitting
- Check browser console (F12) for errors
- Verify Google Apps Script URL in `script.js`
- Test Apps Script separately

### Address autocomplete not working
- Verify Google Places API is enabled
- Check API key in `index.html`
- Add your domain to API key restrictions

### SMS not sending
- Check phone number format: `+1XXXXXXXXXX`
- Verify Textbelt API key
- Check Apps Script execution logs

### Website not loading on domain
- Wait for DNS propagation (up to 48 hours)
- Verify DNS settings in Namecheap
- Check GitHub Pages settings

---

## Getting Help

1. **Check the detailed guides**:
   - `DEPLOYMENT.md` - Deployment issues
   - `GOOGLE_SHEETS_SETUP.md` - Form/SMS issues
   - `GOOGLE_PLACES_SETUP.md` - Address autocomplete issues

2. **Check browser console** (F12):
   - Look for JavaScript errors
   - Check Network tab for failed requests

3. **Check Google Apps Script logs**:
   - Apps Script editor → Executions (clock icon)
   - View error messages

4. **Test DNS propagation**:
   - https://www.whatsmydns.net

---

## Next Steps After Launch

1. **Monitor leads**: Check Google Sheet regularly
2. **Update gallery**: Replace stock photos with real projects
3. **SEO**: Submit to Google Search Console
4. **Analytics**: Add Google Analytics (optional)
5. **Social media**: Add social media links to footer
6. **Reviews**: Add customer testimonials
7. **Upgrade SMS**: Move to paid Textbelt or Twilio when needed

---

## File Structure Reference

```
a-sFlooringService/
├── index.html                 # Main website
├── styles.css                 # Styling
├── script.js                  # JavaScript
├── CNAME                      # Domain config
├── images/                    # All images
├── QUICK_START.md            # This file
├── DEPLOYMENT.md             # Deployment guide
├── GOOGLE_SHEETS_SETUP.md    # Form integration
├── GOOGLE_PLACES_SETUP.md    # Address autocomplete
├── README.md                  # Full documentation
└── download-images.sh         # Image download script
```

---

## Support Resources

- **GitHub Pages**: https://docs.github.com/en/pages
- **Google Apps Script**: https://developers.google.com/apps-script
- **Google Places API**: https://developers.google.com/maps/documentation/places
- **Textbelt**: https://textbelt.com
- **Namecheap DNS**: https://www.namecheap.com/support/knowledgebase/category/38/dns-management/

---

**Estimated Total Setup Time**: 2-3 hours

Good luck with your A&S Flooring website! 🎉
