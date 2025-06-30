function autoResizeAllColumns(sheet) {
  sheet.autoResizeColumns(1, sheet.getLastColumn());
}

function freezeHeaderRow(sheet) {
  sheet.setFrozenRows(1);
}
