/**
 * Actives a specific sheet in the active spreadsheet by its name.
 * @param {string} name - The name of the sheet to activate.
 */
function activateSheetByName(name) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(name);
  if (sheet) spreadsheet.setActiveSheet(sheet);
}
