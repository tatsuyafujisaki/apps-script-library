function showGetGridExample() {
  for (var row of getGrid()) {
    for (var column of row) {
      Logger.log(column.getA1Notation());
    }
  }
}
