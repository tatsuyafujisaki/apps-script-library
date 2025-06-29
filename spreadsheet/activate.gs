function activateSheetByName(name) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(name);
  if (sheet) spreadsheet.setActiveSheet(sheet);
}
