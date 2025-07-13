function autoResizeAllColumnsAndRows_(sheet = SpreadsheetApp.getActiveSheet()) {
  sheet
    .autoResizeColumns(1, sheet.getLastColumn())
    .autoResizeRows(1, sheet.getLastRow());
}

function setNotoSansJpFont(sheet = SpreadsheetApp.getActiveSheet()) {
  sheet
    .getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
    .setFontFamily("Noto Sans JP");
}

function setVerticallyMiddle(sheet = SpreadsheetApp.getActiveSheet()) {
  sheet
    .getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
    .setVerticalAlignment("middle");
}
