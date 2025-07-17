function sortByColumn2ThenColumn1Example(
  sheet = SpreadsheetApp.getActiveSheet()
) {
  sheet.sort(2).sort(1);
}
