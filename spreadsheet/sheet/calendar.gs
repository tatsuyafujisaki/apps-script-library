function drawMonthCalendar() {
  const year = 2025;
  const month = 7;

  SpreadsheetApp.getActiveSpreadsheet().setSpreadsheetLocale("ja");
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet
    .clear()
    .getRange("1:1")
    .setValues([["日付", "開始時刻", "終了時刻", "備考"]]);
  sheet.setFrozenRows(1);

  fillDaysInColumnA_(sheet, year, month);
  colorSaturdayRowsInBlue_(sheet);
  colorSundayRowsInRed_(sheet);

  sheet.autoResizeColumns(1, sheet.getLastColumn());
}

function fillDaysInColumnA_(sheet, year, month) {
  const daysInMonth = new Date(year, month, 0).getDate();

  const dates = Array.from({ length: daysInMonth }, (_, day) => [
    new Date(year, month - 1 /* zero-based */, day + 1),
  ]);

  sheet
    .getRange(2 /* excludes header row */, 1, dates.length, 1)
    .setValues(dates)
    .setNumberFormat("yyyy年m月d日(ddd)");
}

function colorSaturdayRowsInBlue_(sheet) {
  conditionalFormat_(sheet, "=WEEKDAY($A2)=7", "#C9DAF8");
}

function colorSundayRowsInRed_(sheet) {
  conditionalFormat_(sheet, "=WEEKDAY($A2)=1", "#F4CCCC");
}

function conditionalFormat_(sheet, formula, color) {
  const rules = sheet.getConditionalFormatRules();
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
      .setRanges([getHeaderlessRange_(sheet)])
      .whenFormulaSatisfied(formula)
      .setBackground(color)
      .build()
  );
  sheet.setConditionalFormatRules(rules);
}

function getHeaderlessRange_(sheet) {
  return sheet.getRange("2:" + sheet.getLastRow());
}
