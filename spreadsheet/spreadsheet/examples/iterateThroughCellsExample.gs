function iterateThroughCells() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getDataRange();

  for (let row = 1; row <= range.getNumRows(); row++) {
    for (let column = 1; column <= range.getNumColumns(); column++) {
      const cell = range.getCell(row, column);
      console.log(cell.getA1Notation());
    }
  }
}
