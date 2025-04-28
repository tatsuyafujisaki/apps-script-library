function getGrid() {
  function getAllRows() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const maxRows = sheet.getMaxRows();
    const ranges = [];
    for (let i = 1; i <= maxRows; i++) {
      ranges.push(`${i}:${i}`);
    }
    return sheet.getRangeList(ranges).getRanges();
  }

  return getAllRows().map(row => {
    const numColumns = row.getNumColumns();
    return Array.from({ length: numColumns }, (_, column) => row.getCell(1, column + 1));
  });
}


function getAllCells() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getDataRange();
  const numRows = range.getNumRows();
  const numCols = range.getNumColumns();
  const cells = [];

  for (let row = 1; row <= numRows; row++) {
    for (let column = 1; column <= numCols; column++) {
      cells.push(sheet.getRange(row, column));
    }
  }
  return cells;
}

function getCell(address) {
  return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(address);
}
