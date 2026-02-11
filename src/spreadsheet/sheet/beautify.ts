function beautifySpreadsheet(
  spreadsheet = SpreadsheetApp.getActiveSpreadsheet(),
) {
  for (const sheet of spreadsheet.getSheets()) {
    alignVerticallyMiddle_(sheet);
    setFont_(sheet);
    wrap_(sheet);
    autoResizeAllColumnsAndRows_(sheet);
  }
}

function alignVerticallyMiddle_(sheet = SpreadsheetApp.getActiveSheet()) {
  getAllRange_(sheet).setVerticalAlignment('middle');
}

function setFont_(
  sheet = SpreadsheetApp.getActiveSheet(),
  fontFamily = 'Arial',
) {
  getAllRange_(sheet).setFontFamily(fontFamily).setFontSize(10);
}

function wrap_(sheet = SpreadsheetApp.getActiveSheet()) {
  getAllRange_(sheet).setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);
}

function autoResizeAllColumnsAndRows_(sheet = SpreadsheetApp.getActiveSheet()) {
  sheet
    .autoResizeColumns(1, sheet.getLastColumn())
    .autoResizeRows(1, sheet.getLastRow());
}
