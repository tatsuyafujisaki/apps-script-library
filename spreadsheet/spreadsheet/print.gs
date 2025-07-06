function printAllSheetsAllRange_() {
  SpreadsheetApp.getActiveSpreadsheet()
    .getSheets()
    .forEach((sheet) => printAllRange_(sheet));
}

function printAllSheetsDataRange_() {
  SpreadsheetApp.getActiveSpreadsheet()
    .getSheets()
    .forEach((sheet) => printDataRange_(sheet));
}
