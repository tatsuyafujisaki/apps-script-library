function sortSheetByColumns_(sheet, ...sortColumnIndexes) {
  const range = getHeaderlessRange_(sheet);
  for (let i = 0; i < sortColumnIndexes.length; i++) {
    range.sort([{ column: sortColumnIndexes[i] }]);
  }
}
