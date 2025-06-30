function sortColumns() {
  activateSheetByName_("Sheet1");
  sortSheetByColumns_(SpreadsheetApp.getActiveSheet(), 1);
}
