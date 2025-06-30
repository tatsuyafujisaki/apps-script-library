function resetInputCellValues_(sheet) {
  const targetBackgroundColor = "#e6b8af";
  const range = sheet.getDataRange();

  for (let row = 1; row <= range.getNumRows(); row++) {
    for (let column = 1; column <= range.getNumColumns(); column++) {
      const cell = range.getCell(row, column);
      if (cell.getBackground() === targetBackgroundColor) {
        cell.setValue("❓");
      }
    }
  }
}
