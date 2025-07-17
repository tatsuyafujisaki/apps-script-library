function iterateThrowRowsExample(sheet = SpreadsheetApp.getActiveSheet()) {
  for (let i = 1; i <= sheet.getLastRow(); i++) {
    const row = sheet.getRange(i, 1, 1, sheet.getLastColumn());
    console.log(row.getA1Notation());
  }
}
