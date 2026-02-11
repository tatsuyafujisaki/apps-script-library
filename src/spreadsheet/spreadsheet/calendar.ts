function drawMonthCalendar() {
  const year = 2025;
  const month = 7;

  SpreadsheetApp.getActiveSpreadsheet().setSpreadsheetLocale('ja');
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet
    .clear()
    .getRange('1:1')
    .setValues([['日付', '開始時刻', '終了時刻', '備考']]);
  sheet.setFrozenRows(1);

  fillDaysInColumnA_(sheet, year, month);
  colorSaturdayRowsInBlue_(sheet);
  colorSundayRowsInRed_(sheet);

  sheet.autoResizeColumns(1, sheet.getLastColumn());
}
