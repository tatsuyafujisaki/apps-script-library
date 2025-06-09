function printCellAddresses() {
  for (const cell of getCells()) {
    Logger.log(cell.getA1Notation());
  }
}

function printCellAddress(address) {
  const cell = getCell(address);
  Logger.log(cell.getA1Notation());
}

function printCellBackground(address) {
  const cell = getCell(address);
  Logger.log(cell.getBackground());
}

function printAllSheetNames() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log('spreadsheet.getSheetName(): ' + spreadsheet.getSheetName());
  Logger.log('spreadsheet.getName(): ' + spreadsheet.getName());

  const sheet = spreadsheet.getActiveSheet();
  Logger.log('sheet.getSheetName(): ' + sheet.getSheetName());
  Logger.log('sheet.getName(): ' + sheet.getName());

  for (const sheet of spreadsheet.getSheets()) {
    Logger.log('sheet.getName(): ' + sheet.getName());
  }
}

