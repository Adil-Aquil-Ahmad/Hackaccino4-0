/**
 * Google Apps Script for Hackaccino 4.0 Forms
 * Handles Community Partner, Sponsor, and Judge form submissions
 * 
 * Setup Instructions:
 * 1. Create THREE sheets in your Google Spreadsheet:
 *    - Sheet 1: "Community Partners" with columns: Timestamp | Full Name | College/University | Email | Phone | Organization
 *    - Sheet 2: "Sponsors" with columns: Timestamp | Company Name | Point of Contact | Email | Phone | Sponsorship Type | Sponsor Tier
 *    - Sheet 3: "Judges" with columns: Timestamp | Full Name | Designation | Organization | Email | Phone | Expertise | Experience
 * 2. This script will auto-create sheets if they don't exist
 * 3. Deploy as Web App with "Anyone" access
 */

function doPost(e) {
  try {
    // Parse the POST data
    var data = JSON.parse(e.postData.contents);
    var formType = data.formType || 'community';
    
    // Get the active spreadsheet
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet;
    var rowData;
    
    if (formType === 'sponsor') {
      // Get or create Sponsors sheet
      sheet = spreadsheet.getSheetByName('Sponsors');
      if (!sheet) {
        sheet = spreadsheet.insertSheet('Sponsors');
        sheet.appendRow(['Timestamp', 'Company Name', 'Point of Contact', 'Email', 'Phone', 'Sponsorship Type', 'Sponsor Tier']);
      }
      
      // Prepare sponsor data
      rowData = [
        new Date(),
        data.companyName || '',
        data.pointOfContact || '',
        data.email || '',
        data.phone || '',
        data.sponsorshipType || '',
        data.sponsorTier || ''
      ];
    } else if (formType === 'judge') {
      // Get or create Judges sheet
      sheet = spreadsheet.getSheetByName('Judges');
      if (!sheet) {
        sheet = spreadsheet.insertSheet('Judges');
        sheet.appendRow(['Timestamp', 'Full Name', 'Designation', 'Organization', 'Email', 'Phone', 'Expertise', 'Experience']);
      }
      
      // Prepare judge data
      rowData = [
        new Date(),
        data.fullName || '',
        data.designation || '',
        data.organization || '',
        data.email || '',
        data.phone || '',
        data.expertise || '',
        data.experience || ''
      ];
    } else {
      // Get or create Community Partners sheet
      sheet = spreadsheet.getSheetByName('Community Partners');
      if (!sheet) {
        sheet = spreadsheet.insertSheet('Community Partners');
        sheet.appendRow(['Timestamp', 'Full Name', 'College/University', 'Email', 'Phone', 'Organization']);
      }
      
      // Prepare community partner data
      rowData = [
        new Date(),
        data.fullName || '',
        data.collegeName || '',
        data.email || '',
        data.phone || '',
        data.organization || ''
      ];
    }
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Data recorded successfully',
        'formType': formType
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

// Test function
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      'status': 'active',
      'message': 'Hackaccino 4.0 Forms API is running',
      'sheets': ['Community Partners', 'Sponsors', 'Judges']
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
