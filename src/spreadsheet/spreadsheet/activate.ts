function activateSheetByName_(name) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(name);
  if (sheet) spreadsheet.setActiveSheet(sheet);
}
