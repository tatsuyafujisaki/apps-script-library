function autoResizeAllColumnsAndRows_(sheet = SpreadsheetApp.getActiveSheet()) {
  sheet
    .autoResizeColumns(1, sheet.getLastColumn())
    .autoResizeRows(1, sheet.getLastRow());
}
