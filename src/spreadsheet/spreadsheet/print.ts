function printAllSheetsAllRange_() {
  SpreadsheetApp.getActiveSpreadsheet()
    .getSheets()
    .forEach(sheet => printRange_(sheet.getDataRange()));
}

function printAllSheetsDataRange_() {
  SpreadsheetApp.getActiveSpreadsheet()
    .getSheets()
    .forEach(sheet => printRange_(sheet.getDataRange()));
}
