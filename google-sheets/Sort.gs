function sortSheetByMultipleColumns() {
  const range = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getDataRange();
  const rangeWithoutHeaderRow = range.offset(1, 0, range.getNumRows() - 1, range.getNumColumns());

  rangeWithoutHeaderRow.sort([{ column: 3 }]); // Sorts by columns C
  rangeWithoutHeaderRow.sort([{ column: 2 }]); // Sorts by columns B
  rangeWithoutHeaderRow.sort([{ column: 1 }]); // Sorts by columns A
}
