function iterateThrowRowsExample() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();
  for (let i = 1; i <= lastRow; i++) {
    const row = sheet.getRange(i, 1, 1, sheet.getLastColumn());
    console.log(row.getA1Notation());
  }
}
