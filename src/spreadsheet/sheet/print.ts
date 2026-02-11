function printRange_(range = SpreadsheetApp.getActiveSheet().getDataRange()) {
  console.log(range.getA1Notation());
}

function printSheetNames(
  spreadsheet = SpreadsheetApp.getActiveSpreadsheet(),
  sheetNamesToExclude = [],
) {
  console.log(
    spreadsheet
      .getSheets()
      .map(sheet => sheet.getName())
      .filter(sheetName => !sheetNamesToExclude.includes(sheetName))
      .sort(),
  );
}
