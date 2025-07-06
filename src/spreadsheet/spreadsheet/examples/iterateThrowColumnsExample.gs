function iterateThroughColumnsExample() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastColumn = sheet.getLastColumn();
  for (let i = 1; i <= lastColumn; i++) {
    const column = sheet.getRange(1, i, sheet.getLastRow(), 1);
    console.log(column.getA1Notation());
  }
}
