function fillDaysInColumnA_(
  year,
  month,
  sheet = SpreadsheetApp.getActiveSheet(),
) {
  const daysInMonth = new Date(year, month, 0).getDate();

  const dates = Array.from({length: daysInMonth}, (_, day) => [
    new Date(year, month - 1 /* zero-based */, day + 1),
  ]);

  sheet
    .getRange(2 /* excludes header row */, 1, dates.length, 1)
    .setValues(dates)
    .setNumberFormat('yyyy年m月d日(ddd)');
}

function colorSaturdayRowsInBlue_(sheet = SpreadsheetApp.getActiveSheet()) {
  conditionalFormat_(sheet, '=WEEKDAY($A2)=7', '#C9DAF8');
}

function colorSundayRowsInRed_(sheet = SpreadsheetApp.getActiveSheet()) {
  conditionalFormat_(sheet, '=WEEKDAY($A2)=1', '#F4CCCC');
}
