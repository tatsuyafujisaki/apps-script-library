function autoResizeAllSheetsColumns() {
  const sheets = SpreadsheetApp.getActiveSpreadsheet();
  for (const sheet of sheets) {
    sheet.autoResizeColumns(1, sheet.getLastColumn());
  }
}

function sortSheetByColumns(sheet, ...sortColumnIndexes) {
  const range = sheet.getDataRange();
  const rangeWithoutHeaderRow = range.offset(
    1,
    0,
    range.getNumRows() - 1,
    range.getNumColumns()
  );

  for (let i = 0; i < sortColumnIndexes.length; i++) {
    rangeWithoutHeaderRow.sort([{ column: sortColumnIndexes[i] }]);
  }
}
