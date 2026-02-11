function autoResizeAllSheetsColumnsAndRows() {
  SpreadsheetApp.getActiveSpreadsheet().forEachSheet(sheet => {
    autoResizeAllColumnsAndRows_();
  });
}
