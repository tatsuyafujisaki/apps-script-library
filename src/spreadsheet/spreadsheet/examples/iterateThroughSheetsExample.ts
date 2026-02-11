function iterateThroughSheetsExample(
  spreadsheet = SpreadsheetApp.getActiveSpreadsheet(),
  sheetNamesToExclude = [],
) {
  console.log(spreadsheet.getName());
  for (const sheet of spreadsheet.getSheets()) {
    if (sheetNamesToExclude.includes(sheet.getName())) {
      continue;
    }
    console.log(sheet.getName());
  }
}
