# Google Sheets Integration Setup

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Hackaccino 2026 - Community Partners"
4. Add these column headers in the first row:
   - A1: Timestamp
   - B1: Full Name
   - C1: College/University
   - D1: Email
   - E1: Phone
   - F1: Organization

## Step 2: Set Up Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code
3. Copy and paste the code from `google-apps-script.js` (below)
4. Click **Save** (💾 icon)
5. Click **Deploy > New deployment**
6. Click the gear icon ⚙️ next to "Select type"
7. Choose **Web app**
8. Configure:
   - Description: "Hackaccino Community Partner Form"
   - Execute as: **Me**
   - Who has access: **Anyone**
9. Click **Deploy**
10. Copy the **Web app URL** (it will look like: https://script.google.com/macros/s/XXXXX/exec)
11. Click **Done**

## Step 3: Update React App

1. Create a `.env` file in the project root: `D:/GitHub/hackaccino-4.0/.env`
2. Add this line (replace with your actual URL):
   ```
   REACT_APP_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
3. Restart your development server

## Google Apps Script Code

Save this in your Apps Script editor:

\`\`\`javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the POST data
    var data = JSON.parse(e.postData.contents);
    
    // Create timestamp
    var timestamp = new Date();
    
    // Append the data to the sheet
    sheet.appendRow([
      timestamp,
      data.fullName,
      data.collegeName,
      data.email,
      data.phone,
      data.organization
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Data recorded successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function doGet(e) {
  return ContentService
    .createTextOutput('Google Apps Script is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}
\`\`\`

## Testing

1. After deployment, test the script by visiting the Web app URL in your browser
2. You should see: "Google Apps Script is working!"
3. Submit a test form entry
4. Check your Google Sheet for the new row

## Security Note

The script is set to "Anyone" access because it's a public form. The script only accepts POST requests with the specific data structure, so it's safe for this use case.
