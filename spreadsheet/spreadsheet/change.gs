function autoResizeAllColumns(sheet) {
  sheet.autoResizeColumns(1, sheet.getLastColumn());
}

function freezeHeaderRow(sheet) {
  sheet.setFrozenRows(1);
}

function fillMonthCalendar() {
  const year = 2025;
  const month = 7;

  SpreadsheetApp.getActiveSpreadsheet().setSpreadsheetLocale("ja");
  const sheet = SpreadsheetApp.getActiveSheet();

  sheet
    .clear()
    .getRange("1:1")
    .setValues([["日付", "開始時刻", "終了時刻"]]);

  sheet.setFrozenRows(1);

  fillDaysInColumnA_(sheet, year, month);

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
