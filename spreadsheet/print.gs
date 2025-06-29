function printCellAddress(address) {
  const cell = getCell(address);
  Logger.log(cell.getA1Notation());
}

function printCellBackground(address) {
  const cell = getCell(address);
  Logger.log(cell.getBackground());
}
