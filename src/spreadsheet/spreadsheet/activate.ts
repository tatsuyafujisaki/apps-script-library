function activateSheetByName_(name) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName(name));
}
