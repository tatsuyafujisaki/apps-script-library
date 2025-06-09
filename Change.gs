function autoResizeAllSheetsAllColumns() {
  SpreadsheetApp.getActiveSpreadsheet().getSheets().forEach(sheet => {
    const lastColumn = sheet.getLastColumn();
    if (lastColumn) sheet.autoResizeColumns(1, lastColumn);
  });
}

function capitalizeFirstLetter(str) {
  if (typeof str === 'string' && str.length) {
    return str[0].toUpperCase() + str.slice(1);
  } else {
    return str;
  }
}
