function autoResizeAllSheetsColumns(sheets) {
  for (const sheet of sheets) {
    const lastColumn = sheet.getLastColumn();
    if (lastColumn) sheet.autoResizeColumns(1, lastColumn);
  }
}

function autoResizeAllColumns(sheet) {
  const lastColumn = sheet.getLastColumn();
  if (lastColumn) sheet.autoResizeColumns(1, lastColumn);
}

function capitalizeFirstLetter(str) {
  if (typeof str === "string" && str.length) {
    return str[0].toUpperCase() + str.slice(1);
  } else {
    return str;
  }
}
