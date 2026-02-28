# Google Sheets Integration Setup Guide

This guide will walk you through setting up the contact form to save submissions to Google Sheets and send SMS notifications to both the owner and customer.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"Blank"** to create a new spreadsheet
3. Name it **"A&S Flooring Leads"**
4. Set up the following column headers in Row 1:

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Name | Phone | Email | Service | Material | Square Footage | Address | Timeline | Notes |

5. Save the spreadsheet

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy and paste the following code:

```javascript
// Configuration - UPDATE THESE VALUES
const OWNER_PHONE = '+12155550100'; // Replace with Ozzy's actual phone number (format: +1XXXXXXXXXX)
const TEXTBELT_API_KEY = 'textbelt'; // Use 'textbelt' for free tier, or your paid API key

// Main function to handle form submissions
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append the data to the sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.phone,
      data.email,
      data.service,
      data.material,
      data.sqft,
      data.address,
      data.timeline,
      data.notes
    ]);
```javascript
// Configuration - UPDATE THESE VALUES
const OWNER_PHONE = '+12155550100'; // Replace with Ozzy's actual phone number (format: +1XXXXXXXXXX)
const TEXTBELT_API_KEY = 'textbelt'; // Use 'textbelt' for free tier, or your paid API key

// Main function to handle form submissions
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append the data to the sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.phone,
      data.email,
      data.service,
      data.material,
      data.sqft,
      data.address,
      data.timeline,
      data.notes
```javascript
// Configuration - UPDATE THESE VALUES
const OWNER_PHONE = '+12155550100'; // Replace with Ozzy's actual phone number (format: +1XXXXXXXXXX)
const TEXTBELT_API_KEY = 'textbelt'; // Use 'textbelt' for free tier, or your paid API key

// Main function to handle form submissions
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append the data to the sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.phone,
      data.email,
      data.service,
      data.material,
      data.sqft,
      data.address,
      data.timeline,
      data.notes
```javascript
// Configuration - UPDATE THESE VALUES
const OWNER_PHONE = '+12155550100'; // Replace with Ozzy's actual phone number (format: +1XXXXXXXXXX)
const TEXTBELT_API_KEY = 'textbelt'; // Use 'textbelt' for free tier, or your paid API key

// Main function to handle form submissions
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append the data to the sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.phone,
      data.email,
      data.service,
      data.material,
      data.sqft,
      data.address,
      data.timeline,
      data.notes
    ]);
    
    // Send SMS to owner
    sendSMSToOwner(data);
    
    // Send SMS to customer
    sendSMSToCustomer(data);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Form submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to send SMS to owner (Ozzy)
function sendSMSToOwner(data) {
  const message = `New A&S Flooring Lead!\n\nName: ${data.name}\nService: ${data.service}\nPhone: ${data.phone}\nAddress: ${data.address}\nTimeline: ${data.timeline}`;
  
  sendTextbeltSMS(OWNER_PHONE, message);
}

// Function to send SMS to customer
function sendSMSToCustomer(data) {
  // Clean phone number (remove formatting)
  const customerPhone = data.phone.replace(/\D/g, '');
  const formattedPhone = '+1' + customerPhone;
  
  const message = `Thanks for contacting A&S Flooring! We received your request for ${data.service}. We'll reach out shortly. - A&S Flooring`;
  
  sendTextbeltSMS(formattedPhone, message);
}

// Function to send SMS via Textbelt API
function sendTextbeltSMS(phone, message) {
  const url = 'https://textbelt.com/text';
  
  const payload = {
    'phone': phone,
    'message': message,
    'key': TEXTBELT_API_KEY
  };
  
  const options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(payload),
    'muteHttpExceptions': true
  };
  
  try {
    const response = UrlFetchApp.fetch(url, options);
    const result = JSON.parse(response.getContentText());
    
    if (result.success) {
      Logger.log('SMS sent successfully to ' + phone);
    } else {
      Logger.log('SMS failed: ' + result.error);
    }
  } catch (error) {
    Logger.log('Error sending SMS: ' + error.toString());
  }
}

// Test function to verify SMS is working
function testSMS() {
  const testData = {
    name: 'Test Customer',
    phone: '(215) 555-0100',
    service: 'Hardwood Installation',
    address: '123 Main St, Philadelphia, PA',
    timeline: 'Within 1 week'
  };
  
  sendSMSToOwner(testData);
  Logger.log('Test SMS sent to owner');
}
```

4. **Update the configuration** at the top of the script:
   - Replace `OWNER_PHONE` with Ozzy's actual phone number (format: `+12155550100`)
   - Keep `TEXTBELT_API_KEY` as `'textbelt'` for free tier (1 text/day for testing)

5. Click **Save** (disk icon) and name the project **"A&S Flooring Form Handler"**

## Step 3: Deploy the Script as a Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "A&S Flooring Contact Form"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Authorize the app**:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```
8. Click **Done**

## Step 4: Update Your Website

1. Open `script.js` in your website files
2. Find this line (around line 157):
   ```javascript
   const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with the Web App URL you copied
4. Save the file

## Step 5: Test the Form

### Test SMS First (Optional but Recommended)

1. In Google Apps Script, click **Run** → **testSMS**
2. Check if you receive a test SMS at the owner's phone number
3. If it works, proceed to test the full form

### Test the Full Form

1. Open your website locally or deploy it
2. Fill out the contact form with test data
3. Submit the form
4. Verify:
   - ✅ Data appears in your Google Sheet
   - ✅ Owner receives SMS notification
   - ✅ Customer receives confirmation SMS
   - ✅ Success message shows on the website

## Step 6: Upgrade to Paid SMS (When Ready)

The free Textbelt tier allows 1 text per day. For production use:

### Option 1: Textbelt Paid ($0.0035/text)

1. Go to [Textbelt.com](https://textbelt.com)
2. Click **"Get API Key"**
3. Purchase credits (minimum $10 = ~2,857 texts)
4. Copy your API key
5. Update `TEXTBELT_API_KEY` in the Apps Script with your key
6. Redeploy the script

### Option 2: Twilio ($0.0079/text - More Reliable)

See `TWILIO_SETUP.md` for detailed Twilio integration instructions.

## Troubleshooting

### Form submissions not appearing in Google Sheet

1. Check the Apps Script execution log:
   - Go to Apps Script editor
   - Click **Executions** (clock icon on left)
   - Look for errors
2. Verify the Web App URL is correct in `script.js`
3. Make sure deployment is set to "Anyone" can access

### SMS not sending

1. Check phone number format: Must be `+1XXXXXXXXXX` (no spaces, dashes, or parentheses)
2. Verify Textbelt API key is correct
3. Check Apps Script logs for error messages
4. Test with the `testSMS()` function first

### "Authorization required" error

1. Redeploy the script
2. Make sure you authorized the app during deployment
3. Try using an incognito browser window

### Customer phone number format issues

The script automatically formats customer phone numbers from `(215) 555-0100` to `+12155550100`.

## Monitoring Your Leads

### View All Leads
- Open your Google Sheet anytime to see all submissions
- Sort by timestamp to see newest leads first

### Set Up Email Notifications (Optional)
1. In Google Sheets, click **Tools** → **Notification rules**
2. Choose **"Any changes are made"**
3. Set notification frequency
4. Click **Save**

### Export Leads
- File → Download → CSV or Excel format

## SMS Cost Estimates

**Textbelt Pricing**:
- Free: 1 text/day (testing only)
- Paid: $0.0035/text
- 2 SMS per lead (owner + customer) = $0.007/lead
- $10 = ~1,428 leads

**Twilio Pricing**:
- $0.0079/text
- 2 SMS per lead = $0.0158/lead
- More reliable, better delivery rates
- Recommended for production

## Security Notes

- Never share your Google Apps Script Web App URL publicly
- Keep your Textbelt/Twilio API keys private
- The script runs under your Google account permissions
- Form submissions are stored in your private Google Sheet

## Need Help?

- Google Apps Script Documentation: https://developers.google.com/apps-script
- Textbelt Documentation: https://textbelt.com
- Check the execution logs in Apps Script for detailed error messages 
https://ansflooringservices.com/
http://www.ansflooringservices.com/