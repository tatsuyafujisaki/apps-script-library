function setJapaneseLocale() {
  SpreadsheetApp.getActiveSpreadsheet().setSpreadsheetLocale("ja");
}

function autoResizeAllSheetsColumns() {
  const sheets = SpreadsheetApp.getActiveSpreadsheet();
  for (const sheet of sheets) {
    sheet.autoResizeColumns(1, sheet.getLastColumn());
  }
}

function sortSheetByColumns(sheet, ...sortColumnIndexes) {
  const range = getDataRangeExceptFirstRow(sheet);

  for (let i = 0; i < sortColumnIndexes.length; i++) {
    range.sort([{ column: sortColumnIndexes[i] }]);
  }
}
