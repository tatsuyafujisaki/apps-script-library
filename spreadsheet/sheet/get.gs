function getDataRangeExceptHeaderRow(sheet) {
  return excludeHeaderRow_(sheet.getDataRange());
}

function excludeHeaderRow_(range) {
  return range.offset(1, 0, range.getNumRows() - 1, range.getNumColumns());
}
