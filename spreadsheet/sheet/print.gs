function printAllRange_(sheet) {
  console.log(
    sheet
      .getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
      .getA1Notation()
  );
}

function printDataRange_(sheet) {
  console.log(sheet.getDataRange().getA1Notation());
}
