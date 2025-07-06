function getHeaderlessRange_(sheet = SpreadsheetApp.getActiveSheet()) {
  return sheet.getRange("2:" + sheet.getLastRow());
}
