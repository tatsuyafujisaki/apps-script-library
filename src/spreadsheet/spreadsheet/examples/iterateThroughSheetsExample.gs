function iterateThroughSheetsExample1() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log("spreadsheet.getName(): " + spreadsheet.getName());
  spreadsheet.getSheets().forEach((sheet) => console.log(sheet.getName()));
}

function iterateThroughSheetsExample2() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log("spreadsheet.getName(): " + spreadsheet.getName());
  for (const sheet of spreadsheet.getSheets()) {
    Logger.log("sheet.getName(): " + sheet.getName());
  }
}
