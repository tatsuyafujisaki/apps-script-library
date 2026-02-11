function getAllRange_(sheet = SpreadsheetApp.getActiveSheet()) {
  return sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
}

function getHeaderlessRange_(sheet = SpreadsheetApp.getActiveSheet()) {
  return sheet.getRange('2:' + sheet.getLastRow());
}
