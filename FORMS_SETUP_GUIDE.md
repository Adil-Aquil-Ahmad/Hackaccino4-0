# Google Sheets Integration Setup for Hackaccino 4.0

This guide will help you set up Google Sheets to collect form submissions from both the **Community Partner** and **Sponsor** forms.

## 📋 Prerequisites

- A Google account
- Access to Google Sheets and Google Apps Script

## 🚀 Step-by-Step Setup

### Step 1: Create Your Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Hackaccino 4.0 - Form Responses"
4. The script will automatically create two sheets:
   - **Community Partners** - with columns: Timestamp | Full Name | College/University | Email | Phone | Organization
   - **Sponsors** - with columns: Timestamp | Company Name | Point of Contact | Email | Phone | Sponsorship Type | Sponsor Tier

> **Note:** You can also manually create these sheets with the column headers above for better organization.

### Step 2: Set Up Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy the entire content from the `google-apps-script.js` file in your project
4. Paste it into the Apps Script editor
5. Click the **Save** icon (💾) or press `Ctrl+S` / `Cmd+S`
6. Give your project a name (e.g., "Hackaccino Form Handler")

### Step 3: Deploy as Web App

1. Click the **Deploy** button in the top right
2. Select **New deployment**
3. Click the gear icon (⚙️) next to "Select type"
4. Choose **Web app**
5. Configure the deployment:
   - **Description**: "Hackaccino 4.0 Forms API" (optional)
   - **Execute as**: Select **Me** (your email)
   - **Who has access**: Select **Anyone**
6. Click **Deploy**

### Step 4: Authorize the Script

1. A dialog will appear asking for authorization
2. Click **Authorize access**
3. Select your Google account
4. Click **Advanced** (if you see a warning)
5. Click **Go to [Your Project Name] (unsafe)**
6. Click **Allow** to grant the necessary permissions

### Step 5: Copy Your Web App URL

1. After deployment, you'll see a "Deployment" dialog
2. Copy the **Web app URL** (it should look like):
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```
3. Keep this URL handy - you'll need it in the next step

### Step 6: Configure Your React App

Your `.env` file is already configured with the URL. If you need to update it:

1. Open the `.env` file in your project root
2. Update the URL:
   ```
   REACT_APP_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
   ```
3. Save the file
4. Restart your development server

## ✅ Testing Your Integration

### Test Community Partner Form
1. Navigate to `http://localhost:3000/community-partner`
2. Fill out the multi-step form completely
3. Submit the form
4. Check your Google Sheet's **"Community Partners"** tab
5. You should see a new row with all the submitted data

### Test Sponsor Form
1. Navigate to `http://localhost:3000/sponsor`
2. Fill out the multi-step form completely
3. Submit the form
4. Check your Google Sheet's **"Sponsors"** tab
5. You should see a new row with all the submitted data

## 🔧 Troubleshooting

### Form submits but data doesn't appear in Google Sheets

1. Check the browser console for errors
2. Verify the Web App URL in your `.env` file is correct
3. Make sure you restarted the development server after updating `.env`
4. Check that the Google Apps Script is deployed as "Anyone" can access

### "Google Script URL not configured" error

- Make sure your `.env` file exists in the project root
- Verify the environment variable name is exactly `REACT_APP_GOOGLE_SCRIPT_URL`
- Restart your development server

### Script authorization issues

- Re-authorize the script in Apps Script settings
- Make sure you selected "Execute as: Me" during deployment
- Check that "Who has access" is set to "Anyone"

## 📊 Data Structure

### Community Partners Sheet
```
Timestamp | Full Name | College/University | Email | Phone | Organization
```

### Sponsors Sheet
```
Timestamp | Company Name | Point of Contact | Email | Phone | Sponsorship Type | Sponsor Tier
```

## 🔄 Updating the Script

If you need to update the Apps Script code:

1. Open your Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Make your changes to the code
4. Click **Save**
5. Click **Deploy** → **Manage deployments**
6. Click the edit icon (✏️) next to your active deployment
7. Update the version to "New version"
8. Click **Deploy**

> **Note:** The Web App URL remains the same, so you don't need to update your `.env` file.

## 🎉 Success!

Both forms are now connected to Google Sheets and will automatically save submissions to their respective sheets!

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all steps above were completed correctly
3. Test the Web App URL directly in your browser (you should see a JSON response)
4. Make sure both sheets exist in your Google Spreadsheet
