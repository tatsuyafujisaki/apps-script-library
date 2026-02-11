function iterateThroughColumnsExample(sheet = SpreadsheetApp.getActiveSheet()) {
  for (let i = 1; i <= sheet.getLastColumn(); i++) {
    const column = sheet.getRange(1, i, sheet.getLastRow(), 1);
    console.log(column.getA1Notation());
  }
}
