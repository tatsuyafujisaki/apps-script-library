function sortSheetByColumns(sortColumnIndexes) {
  const range = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getDataRange();
  const rangeWithoutHeaderRow = range.offset(1, 0, range.getNumRows() - 1, range.getNumColumns());

  for (var i = 0; i < sortColumnIndexes.length; i++) {
    rangeWithoutHeaderRow.sort([{ column: sortColumnIndexes[i] }]);
  }
}
