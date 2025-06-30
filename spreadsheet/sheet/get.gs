function getHeaderlessRange(sheet) {
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn());
}
