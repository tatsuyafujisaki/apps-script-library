function autoResizeAllSheetsColumns(sheets) {
  for (const sheet of sheets) {
    autoResizeAllColumns(sheet);
  }
}

function autoResizeAllColumns(sheet) {
  sheet.autoResizeColumns(1, sheet.getLastColumn());
}

function capitalizeFirstLetter(str) {
  if (typeof str === "string" && str.length) {
    return str[0].toUpperCase() + str.slice(1);
  } else {
    return str;
  }
}
