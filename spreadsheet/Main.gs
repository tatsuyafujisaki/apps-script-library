function resetInputCellValues() {
  const targetBackgroundColor = '#e6b8af';
  const emoji = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣'];

  for (const row of getGrid()) {
    let manualInputCellCount = 0;
    for (const cell of row) {
      if (cell.getBackground() === targetBackgroundColor && manualInputCellCount < emoji.length) {
        cell.setValue(emoji[manualInputCellCount]);
        manualInputCellCount++;
      }
    }
  }
}
