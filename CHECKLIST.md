# A&S Flooring Website - Setup Checklist

Use this checklist to track your progress setting up the website.

## Phase 1: Images ⏱️ 15 minutes

- [ ] Run `./download-images.sh` to get sample images
- [ ] Add company logo as `images/logo.webp` (300x100px or 400x150px)
- [ ] Verify all 14 images are in `images/` folder:
  - [ ] logo.webp
  - [ ] hero.webp
  - [ ] hardwood.webp
  - [ ] laminate.webp
  - [ ] vinyl.webp
  - [ ] carpet.webp
  - [ ] tile.webp
  - [ ] refinishing.webp
  - [ ] gallery-1.webp through gallery-6.webp

## Phase 2: Google Places API ⏱️ 20 minutes

- [ ] Create Google Cloud account
- [ ] Create new project "A&S Flooring Website"
- [ ] Enable Places API
- [ ] Create API key
- [ ] Restrict API key to Places API only
- [ ] Add website restrictions (ansflooringservices.com)
- [ ] Copy API key
- [ ] Update `index.html` line 365 with API key
- [ ] Test address autocomplete locally

**Skip this if**: You want users to type addresses manually

## Phase 3: Google Sheets Integration ⏱️ 30 minutes

### Create Google Sheet
- [ ] Create new Google Sheet named "A&S Flooring Leads"
- [ ] Add column headers: Timestamp, Name, Phone, Email, Service, Material, Square Footage, Address, Timeline, Notes

### Set Up Apps Script
- [ ] Open Extensions → Apps Script
- [ ] Copy/paste the provided code from `GOOGLE_SHEETS_SETUP.md`
- [ ] Update `OWNER_PHONE` with Ozzy's phone number (+1XXXXXXXXXX format)
- [ ] Keep `TEXTBELT_API_KEY` as `'textbelt'` for free tier
- [ ] Save script as "A&S Flooring Form Handler"
- [ ] Test with `testSMS()` function
- [ ] Deploy as web app (Execute as: Me, Access: Anyone)
- [ ] Authorize the app
- [ ] Copy web app URL

### Update Website
- [ ] Open `script.js`
- [ ] Update line 157 with Google Apps Script web app URL
- [ ] Save file

### Test Form
- [ ] Test form submission locally
- [ ] Verify data appears in Google Sheet
- [ ] Verify owner receives SMS
- [ ] Verify customer receives SMS

## Phase 4: Customize Content ⏱️ 15 minutes

### Update Contact Information in `index.html`
- [ ] Replace `(215) 555-0100` with actual phone (appears ~8 times)
- [ ] Replace `contact@ansflooringservices.com` with actual email
- [ ] Replace `Philadelphia, PA` with actual address
- [ ] Update service area description if needed

### Verify Company Info
- [ ] Owner name: Ozzy Oswaldo (correct?)
- [ ] Years in business: 1-3 years (correct?)
- [ ] Licensed & Insured badges are present

## Phase 5: Deploy to GitHub Pages ⏱️ 30 minutes

### Push to GitHub
- [ ] Initialize git: `git init`
- [ ] Add files: `git add .`
- [ ] Commit: `git commit -m "Initial commit - A&S Flooring website"`
- [ ] Create repository on GitHub (public)
- [ ] Add remote: `git remote add origin https://github.com/YOUR_USERNAME/a-sFlooringService.git`
- [ ] Push: `git push -u origin main`

### Enable GitHub Pages
- [ ] Go to repository Settings → Pages
- [ ] Source: main branch, / (root) folder
- [ ] Save and wait for deployment
- [ ] Test at: https://YOUR_USERNAME.github.io/a-sFlooringService/

### Configure Namecheap DNS
- [ ] Log into Namecheap
- [ ] Go to Domain List → Manage ansflooringservices.com
- [ ] Click Advanced DNS tab
- [ ] Add 4 A Records pointing to GitHub Pages IPs:
  - [ ] @ → 185.199.108.153
  - [ ] @ → 185.199.109.153
  - [ ] @ → 185.199.110.153
  - [ ] @ → 185.199.111.153
- [ ] Add CNAME Record:
  - [ ] www → YOUR_USERNAME.github.io.
- [ ] Save all changes

### Configure Custom Domain in GitHub
- [ ] Go to repository Settings → Pages
- [ ] Custom domain: ansflooringservices.com
- [ ] Save
- [ ] Wait for DNS check to succeed
- [ ] Verify CNAME file exists in repository

### Enable HTTPS
- [ ] Wait 10-15 minutes after DNS check succeeds
- [ ] Check "Enforce HTTPS" in GitHub Pages settings
- [ ] Save

### Wait for DNS Propagation
- [ ] Check https://www.whatsmydns.net
- [ ] Wait 1-2 hours (usually) or up to 48 hours
- [ ] Test https://ansflooringservices.com
- [ ] Test https://www.ansflooringservices.com

## Phase 6: Final Testing ⏱️ 15 minutes

### Website Functionality
- [ ] Website loads at https://ansflooringservices.com
- [ ] HTTPS padlock icon appears in browser
- [ ] All images load correctly
- [ ] Mobile menu works (test on phone)
- [ ] Smooth scrolling works
- [ ] All navigation links work

### Contact Form
- [ ] Form Step 1 (Contact Info) works
- [ ] Phone number auto-formats as you type
- [ ] Form Step 2 (Project Details) works
- [ ] Address autocomplete works (if Google Places is set up)
- [ ] Form Step 3 (Timeline & Notes) works
- [ ] Form validation works (try submitting empty fields)
- [ ] Form submits successfully
- [ ] Success message appears

### Backend Integration
- [ ] Form data appears in Google Sheet
- [ ] Owner receives SMS with lead details
- [ ] Customer receives confirmation SMS
- [ ] All data fields are captured correctly

### Mobile Testing
- [ ] Test on iPhone/Android
- [ ] Hamburger menu works
- [ ] Form is easy to use on mobile
- [ ] Images load properly
- [ ] Touch targets are large enough
- [ ] Page loads quickly on mobile data

### Cross-Browser Testing
- [ ] Test in Chrome
- [ ] Test in Safari
- [ ] Test in Firefox
- [ ] Test in Edge (if available)

## Phase 7: Production Readiness ⏱️ 10 minutes

### Upgrade SMS (When Ready)
- [ ] Purchase Textbelt API key ($10 minimum)
- [ ] Update `TEXTBELT_API_KEY` in Google Apps Script
- [ ] Redeploy Apps Script
- [ ] Test SMS with paid key

### SEO & Analytics (Optional)
- [ ] Submit to Google Search Console
- [ ] Add Google Analytics (optional)
- [ ] Create sitemap.xml (optional)
- [ ] Add meta descriptions

### Content Updates
- [ ] Replace gallery stock photos with real A&S projects
- [ ] Add customer testimonials (optional)
- [ ] Add social media links (optional)
- [ ] Update any placeholder text

## Ongoing Maintenance

### Weekly
- [ ] Check Google Sheet for new leads
- [ ] Respond to all form submissions
- [ ] Monitor SMS delivery

### Monthly
- [ ] Check Google Places API usage
- [ ] Review SMS costs
- [ ] Update gallery with new projects
- [ ] Check website analytics

### As Needed
- [ ] Update services offered
- [ ] Update pricing (if displayed)
- [ ] Add new gallery photos
- [ ] Update contact information

## Troubleshooting Reference

If something doesn't work, check:

- **Images not loading**: `images/IMAGE_GUIDE.md`
- **Form not submitting**: `GOOGLE_SHEETS_SETUP.md`
- **Address autocomplete not working**: `GOOGLE_PLACES_SETUP.md`
- **Website not loading on domain**: `DEPLOYMENT.md`
- **General questions**: `README.md`

## Quick Links

- Repository: https://github.com/YOUR_USERNAME/a-sFlooringService
- Live Site: https://ansflooringservices.com
- Google Sheet: [Your Google Sheet URL]
- Google Apps Script: [Your Apps Script URL]
- Google Cloud Console: https://console.cloud.google.com
- Namecheap Dashboard: https://www.namecheap.com/myaccount/

## Status

**Current Phase**: _______________

**Estimated Completion**: _______________

**Notes**:
_____________________________________________
_____________________________________________
_____________________________________________

---

**Total Estimated Time**: 2-3 hours

**Last Updated**: _______________
