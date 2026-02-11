function autoResizeAllSheetsColumnsAndRows() {
  SpreadsheetApp.getActiveSpreadsheet()
    .getSheets()
    .forEach(sheet => {
      autoResizeAllColumnsAndRows_(sheet);
    });
}
