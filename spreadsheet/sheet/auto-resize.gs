function autoResizeAllColumnsAndRows_(sheet) {
  sheet
    .autoResizeColumns(1, sheet.getLastColumn())
    .autoResizeRows(1, sheet.getLastRow());
}
