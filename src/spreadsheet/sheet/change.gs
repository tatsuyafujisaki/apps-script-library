function autoResizeAllColumnsAndRows_(sheet = SpreadsheetApp.getActiveSheet()) {
  sheet
    .autoResizeColumns(1, sheet.getLastColumn())
    .autoResizeRows(1, sheet.getLastRow());
}

function setFont(sheet = SpreadsheetApp.getActiveSheet()) {
  sheet
    .getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
    .setFontFamily("Noto Sans JP")
    .setFontSize(10);
}

function alignVerticallyMiddle(sheet = SpreadsheetApp.getActiveSheet()) {
  sheet
    .getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
    .setVerticalAlignment("middle");
}

function wrap(sheet = SpreadsheetApp.getActiveSheet()) {
  sheet
    .getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
    .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
}
