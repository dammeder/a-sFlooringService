# Google Places API Setup Guide

This guide will help you set up Google Places Autocomplete for the address field in your contact form.

## Why Google Places API?

- Professional searchable address input (autocomplete as you type)
- Validates addresses automatically
- Better user experience
- **Free tier**: 28,000 requests/month (plenty for a lead generation website)

## Step-by-Step Setup

### Step 1: Create a Google Cloud Account

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Sign in with your Google account (same one you use for Google Sheets is fine)
3. Accept the terms of service if prompted

### Step 2: Create a New Project

1. Click the project dropdown at the top (says "Select a project")
2. Click **"New Project"**
3. Enter project details:
   - **Project name**: "A&S Flooring Website"
   - **Organization**: Leave as "No organization"
4. Click **"Create"**
5. Wait for the project to be created (takes ~30 seconds)
6. Select your new project from the dropdown

### Step 3: Enable Places API

1. In the Google Cloud Console, click the hamburger menu (☰) → **"APIs & Services"** → **"Library"**
2. Search for **"Places API"**
3. Click on **"Places API"** (not "Places API (New)")
4. Click **"Enable"**
5. Wait for it to enable (~10 seconds)

### Step 4: Create API Credentials

1. Click **"APIs & Services"** → **"Credentials"**
2. Click **"+ Create Credentials"** → **"API key"**
3. Your API key will be created and displayed
4. **IMPORTANT**: Click **"Restrict Key"** (for security)

### Step 5: Restrict Your API Key

1. Under **"API restrictions"**:
   - Select **"Restrict key"**
   - Check **"Places API"**
   
2. Under **"Website restrictions"** (recommended):
   - Select **"HTTP referrers (websites)"**
   - Click **"Add an item"**
   - Add these referrers:
     ```
     https://ansflooringservices.com/*
     https://www.ansflooringservices.com/*
     http://localhost:*/*
     http://127.0.0.1:*/*
     ```
   - This prevents unauthorized use of your API key

3. Click **"Save"**

4. **Copy your API key** - it will look like:
   ```
   AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### Step 6: Update Your Website

1. Open `index.html` in your website files
2. Find this line near the bottom (line ~365):
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initAutocomplete" async defer></script>
   ```
3. Replace `YOUR_API_KEY` with your actual API key
4. Save the file

**Example**:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&libraries=places&callback=initAutocomplete" async defer></script>
```

### Step 7: Test the Address Autocomplete

1. Open your website in a browser
2. Navigate to the contact form
3. Go to Step 2 (Project Details)
4. Start typing an address in the "Address" field
5. You should see autocomplete suggestions appear as you type
6. Select an address from the dropdown

## Pricing & Free Tier

### Free Tier (More Than Enough)
- **28,000 requests per month FREE**
- After that: $0.017 per request
- For a lead gen website, you'll likely never exceed the free tier

### Example Usage
- 100 form submissions/month = ~100-300 API requests
- Well within the 28,000 free tier

### Billing Setup (Required but Won't Charge)
Google requires a billing account even for free tier usage:

1. Go to **"Billing"** in Google Cloud Console
2. Click **"Link a billing account"**
3. Create a new billing account
4. Enter credit card info (won't be charged unless you exceed free tier)
5. **Set up budget alerts** (recommended):
   - Go to **"Budgets & alerts"**
   - Create budget: $1/month
   - Set alert at 50%, 90%, 100%
   - You'll get email if you approach the limit

## Security Best Practices

### 1. Restrict Your API Key
- ✅ Always restrict to specific APIs (Places API only)
- ✅ Add website restrictions (your domain only)
- ✅ Never commit API keys to public GitHub repos

### 2. Monitor Usage
- Check usage in Google Cloud Console → "APIs & Services" → "Dashboard"
- Set up billing alerts
- Review monthly to ensure no unexpected usage

### 3. Rotate Keys if Compromised
If your API key is ever exposed:
1. Go to "Credentials"
2. Delete the old key
3. Create a new one
4. Update your website

## Troubleshooting

### Autocomplete not working

**Check browser console for errors**:
1. Open website in Chrome
2. Press F12 to open Developer Tools
3. Click "Console" tab
4. Look for errors related to Google Maps

**Common issues**:

1. **"RefererNotAllowedMapError"**
   - Your domain is not in the allowed referrers
   - Add your domain to API key restrictions

2. **"ApiNotActivatedMapError"**
   - Places API is not enabled
   - Go back to Step 3 and enable it

3. **"InvalidKeyMapError"**
   - API key is incorrect
   - Double-check you copied the full key
   - Make sure there are no extra spaces

4. **No autocomplete appearing**
   - Check your internet connection
   - Verify the script tag is loading (check Network tab in DevTools)
   - Make sure you're typing a valid address

### API key not working on live site but works locally

- Add your live domain to the API key restrictions
- Make sure you're using HTTPS (required for production)
- Clear browser cache

### Billing concerns

- Set up budget alerts at $1/month
- Monitor usage in Cloud Console
- For a small business website, you'll stay well within free tier

## Alternative: No API Key (Fallback)

If you don't want to set up Google Places API:

1. The address field will still work as a regular text input
2. Users can type their address manually
3. No autocomplete, but form still functions
4. Simply remove or comment out the Google Maps script tag in `index.html`

## Monitoring Your Usage

### Check Monthly Usage
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select your project
3. Click **"APIs & Services"** → **"Dashboard"**
4. Click **"Places API"**
5. View usage graphs and metrics

### Expected Usage for A&S Flooring
- ~10-50 form submissions/month = ~30-150 API requests
- Well within 28,000 free tier
- Cost if exceeded: ~$0.05-$0.25/month (very unlikely)

## Need Help?

- Google Places API Documentation: https://developers.google.com/maps/documentation/places/web-service
- Google Cloud Support: https://cloud.google.com/support
- Check the browser console for specific error messages
