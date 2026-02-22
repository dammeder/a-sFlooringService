# Deployment Guide - A&S Flooring Website

Complete step-by-step guide to deploy your website to GitHub Pages with your custom domain from Namecheap.

## Overview

Your website will be hosted on **GitHub Pages** (free) with your custom domain **ansflooringservices.com**. GitHub Pages automatically provides **free HTTPS/SSL** - you don't need to purchase a certificate from Namecheap!

## Prerequisites

- ✅ GitHub account
- ✅ Domain purchased from Namecheap (ansflooringservices.com)
- ✅ All website files ready
- ✅ Images added to `images/` folder

## Part 1: Push to GitHub Repository

### Step 1: Initialize Git Repository (if not already done)

```bash
# Navigate to your project folder
cd /Users/mederemilev/github/a-sFlooringService

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - A&S Flooring website"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon → **"New repository"**
3. Repository settings:
   - **Repository name**: `a-sFlooringService` (or any name you prefer)
   - **Description**: "Professional flooring services website"
   - **Public** (required for free GitHub Pages)
   - **Do NOT** initialize with README (you already have files)
4. Click **"Create repository"**

### Step 3: Push Your Code

GitHub will show you commands. Use these:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/a-sFlooringService.git

# Push your code
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Part 2: Enable GitHub Pages

### Step 1: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (gear icon)
3. In the left sidebar, click **"Pages"**
4. Under **"Source"**:
   - Branch: Select **"main"**
   - Folder: Select **"/ (root)"**
5. Click **"Save"**

### Step 2: Wait for Deployment

- GitHub will automatically build and deploy your site
- This takes 1-2 minutes
- You'll see a message: "Your site is live at https://YOUR_USERNAME.github.io/a-sFlooringService/"
- You can visit this URL to test your site before connecting the custom domain

## Part 3: Configure Namecheap DNS

### Step 1: Log into Namecheap

1. Go to [Namecheap.com](https://www.namecheap.com)
2. Sign in to your account
3. Go to **"Domain List"**
4. Click **"Manage"** next to ansflooringservices.com

### Step 2: Configure DNS Settings

1. Click on **"Advanced DNS"** tab
2. You'll see a list of DNS records
3. **Delete** any existing A Records and CNAME Records (if present)
4. Add the following records:

#### A Records (for apex domain)

Click **"Add New Record"** and add these **4 A Records**:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |

#### CNAME Record (for www subdomain)

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME Record | www | YOUR_USERNAME.github.io. | Automatic |

**Important**: Replace `YOUR_USERNAME` with your actual GitHub username. Don't forget the period (.) at the end!

### Step 3: Save Changes

1. Click **"Save All Changes"**
2. DNS changes can take **24-48 hours** to propagate (usually much faster, often 1-2 hours)

## Part 4: Configure Custom Domain in GitHub

### Step 1: Add Custom Domain

1. Go back to your GitHub repository
2. Click **"Settings"** → **"Pages"**
3. Under **"Custom domain"**, enter: `ansflooringservices.com`
4. Click **"Save"**

### Step 2: Verify CNAME File

- GitHub automatically creates/updates the `CNAME` file in your repository
- You should already have this file with content: `ansflooringservices.com`
- If it's missing, create it manually

### Step 3: DNS Check

GitHub will check your DNS configuration. You'll see one of these messages:

- ✅ **"DNS check successful"** - Great! Move to next step
- ⏳ **"DNS check in progress"** - Wait a few minutes and refresh
- ❌ **"DNS check failed"** - Verify your Namecheap DNS settings

## Part 5: Enable HTTPS (Free SSL)

### Step 1: Wait for DNS Propagation

- After DNS check is successful, wait 10-15 minutes
- GitHub needs to provision your free SSL certificate

### Step 2: Enable HTTPS

1. In GitHub Pages settings, you'll see **"Enforce HTTPS"** checkbox
2. If it's grayed out, wait a bit longer for SSL provisioning
3. Once available, **check the box** to enforce HTTPS
4. Click **"Save"**

### Step 3: Verify HTTPS

- Visit `https://ansflooringservices.com`
- You should see a padlock icon 🔒 in the browser
- Your site is now secure with free SSL!

## Part 6: Verify Everything Works

### Checklist

- [ ] Website loads at `https://ansflooringservices.com`
- [ ] Website loads at `https://www.ansflooringservices.com`
- [ ] Both URLs redirect to HTTPS (secure)
- [ ] Mobile menu works on phone
- [ ] All images load correctly
- [ ] Contact form progresses through all 3 steps
- [ ] Address autocomplete works (if Google Places API is set up)
- [ ] Form submission works (if Google Sheets is set up)
- [ ] SMS notifications work (if configured)

## Troubleshooting

### Website not loading on custom domain

**Issue**: "This site can't be reached" or similar error

**Solutions**:
1. **Wait longer**: DNS can take up to 48 hours (usually 1-2 hours)
2. **Check DNS settings**: Verify all 4 A Records and CNAME are correct in Namecheap
3. **Clear DNS cache**: 
   ```bash
   # Mac/Linux
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   
   # Windows
   ipconfig /flushdns
   ```
4. **Check DNS propagation**: Use [whatsmydns.net](https://www.whatsmydns.net) to see if DNS has propagated globally

### HTTPS not available

**Issue**: "Enforce HTTPS" checkbox is grayed out

**Solutions**:
1. Wait 15-30 minutes after DNS check succeeds
2. Verify custom domain is set correctly in GitHub Pages
3. Try removing and re-adding the custom domain
4. Check that DNS is fully propagated

### Images not loading

**Issue**: Broken image icons on website

**Solutions**:
1. Verify all images are in the `images/` folder
2. Check image filenames match exactly (case-sensitive)
3. Make sure images are committed and pushed to GitHub
4. Clear browser cache

### Form not submitting

**Issue**: Form doesn't submit or shows error

**Solutions**:
1. Check browser console (F12) for JavaScript errors
2. Verify Google Apps Script URL is correct in `script.js`
3. Test the Google Apps Script separately
4. Check that the script is deployed as "Anyone" can access

### "404 - File not found"

**Issue**: GitHub Pages shows 404 error

**Solutions**:
1. Verify `index.html` is in the root directory (not in a subfolder)
2. Check that GitHub Pages source is set to "main" branch and "/ (root)" folder
3. Wait a few minutes for GitHub to rebuild the site
4. Try pushing a new commit to trigger a rebuild

## DNS Propagation Timeline

- **Immediate**: Changes saved in Namecheap
- **5-15 minutes**: Some DNS servers update
- **1-2 hours**: Most DNS servers updated (site usually works)
- **24-48 hours**: All DNS servers globally updated (guaranteed)

You can check propagation status at [whatsmydns.net](https://www.whatsmydns.net)

## Updating Your Website

### Making Changes

```bash
# Make your changes to files
# Then commit and push

git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Pages will automatically rebuild and deploy your site (takes 1-2 minutes).

### No GitHub Actions Required!

Unlike some setups, GitHub Pages for static HTML sites **does not require** GitHub Actions workflows. It automatically deploys when you push to the main branch. Simple!

## Cost Summary

| Service | Cost |
|---------|------|
| GitHub Pages Hosting | **FREE** |
| HTTPS/SSL Certificate | **FREE** (via GitHub Pages) |
| Domain (Namecheap) | ~$10-15/year (already purchased) |
| Google Places API | **FREE** (28,000 requests/month) |
| Textbelt SMS (testing) | **FREE** (1 text/day) |
| Textbelt SMS (production) | $0.007/lead (2 SMS) |

**Total ongoing cost**: ~$1-2/month for SMS (depending on lead volume)

## Performance Tips

### Optimize Images

```bash
# If images are too large, compress them
# Use online tools like:
# - https://squoosh.app
# - https://cloudconvert.com

# Or use command line (Mac with webp installed)
cwebp input.jpg -q 80 -o output.webp
```

### Monitor Performance

- Use [Google PageSpeed Insights](https://pagespeed.web.dev)
- Test on mobile devices
- Check loading speed on 3G/4G

## Security Best Practices

1. ✅ **HTTPS Enforced**: All traffic is encrypted
2. ✅ **API Keys Restricted**: Only your domain can use them
3. ✅ **No Sensitive Data**: No passwords or secrets in code
4. ✅ **Form Validation**: Both client and server-side

## Backup Your Website

Your website is automatically backed up in GitHub. To download a backup:

1. Go to your repository on GitHub
2. Click **"Code"** → **"Download ZIP"**
3. Save the ZIP file to your computer

## Need Help?

### GitHub Pages Documentation
- https://docs.github.com/en/pages

### Namecheap DNS Help
- https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain

### Check DNS Propagation
- https://www.whatsmydns.net

### Test SSL Certificate
- https://www.ssllabs.com/ssltest/

## Next Steps After Deployment

1. ✅ Test website on multiple devices
2. ✅ Submit to Google Search Console for SEO
3. ✅ Set up Google Analytics (optional)
4. ✅ Share website link with customers
5. ✅ Monitor leads in Google Sheet
6. ✅ Replace stock images with actual project photos
7. ✅ Update contact information with real details

Congratulations! Your website is now live! 🎉
