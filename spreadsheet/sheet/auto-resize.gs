function autoResizeAllColumnsAndRows_(sheet) {
  sheet.autoResizeColumns(1, sheet.getLastColumn());
  sheet.autoResizeRows(1, sheet.getLastRow());
}
