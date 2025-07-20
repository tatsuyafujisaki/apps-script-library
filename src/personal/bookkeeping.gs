const specialSheetNames = ["まとめ", "勘定科目一覧", "勘定科目別合計額"];

function sortSheets(spreadsheet = SpreadsheetApp.getActiveSpreadsheet()) {
  const prioritySheets = spreadsheet
    .getSheets()
    .filter((sheet) => specialSheetNames.includes(sheet.getName()));
  const nonPrioritySheets = spreadsheet
    .getSheets()
    .filter((sheet) => !specialSheetNames.includes(sheet.getName()));

  prioritySheets.forEach((sheet, index) => {
    spreadsheet.setActiveSheet(sheet);
    spreadsheet.moveActiveSheet(index + 1);
  });

  nonPrioritySheets.sort((a, b) => a.getName().localeCompare(b.getName()));
  nonPrioritySheets.forEach((sheet, index) => {
    spreadsheet.setActiveSheet(sheet);
    spreadsheet.moveActiveSheet(specialSheetNames.length + index + 1);
  });
}

function printFormulaToBePastedOnConsolidatedSheet(
  spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
) {
  const sheetNames = spreadsheet
    .getSheets()
    .map((sheet) => sheet.getName())
    .filter((sheetName) => !specialSheetNames.includes(sheetName));
  const result = formatArray_(sheetNames, "=SORT({", "'", ";", "'!A2:E", "})");
  console.log(result);
}

function formatArray_(
  items,
  outerPrefix = "",
  itemPrefix = "",
  itemSeparator = "",
  itemSuffix = "",
  outerSuffix = ""
) {
  return (
    outerPrefix +
    items.map((item) => itemPrefix + item + itemSuffix).join(itemSeparator) +
    outerSuffix
  );
}
