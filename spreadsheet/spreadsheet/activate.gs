function activateSheetByName_(name) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName(name));
}
