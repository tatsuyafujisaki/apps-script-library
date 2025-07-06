function resetAllSheetsInputCellValues() {
  SpreadsheetApp.getActiveSpreadsheet()
    .getSheets()
    .forEach((sheet) => {
      resetInputCellValues_(sheet);
    });
}
