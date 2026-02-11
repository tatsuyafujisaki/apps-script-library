function importJsonFileToSheet() {
  const fileName = 'Text Substitutions.json';

  const files = DriveApp.getFilesByName(fileName);

  if (!files.hasNext()) {
    return;
  }

  const file = files.next();
  const content = file.getBlob().getDataAsString();
  const json = JSON.parse(content);

  const data = [['shortcut', 'phrase']];

  json.forEach(item => {
    data.push([item.shortcut || '', item.phrase || '']);
  });
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clear();
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
}

function exportSheetToJsonFile() {
  const fileName = 'Text Substitutions.json';
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const rows = sheet.getDataRange().getValues();

  // Exclude the header row and rows where the third column is TRUE.
  const dataRows = rows.slice(1).filter(row => row[2] !== true);

  const jsonData = dataRows.map(row => {
    return {
      shortcut: row[0] || '',
      phrase: row[1] || '',
    };
  });

  const jsonString = JSON.stringify(jsonData, null, 2);
  const files = DriveApp.getFilesByName(fileName);

  if (files.hasNext()) {
    const file = files.next();
    file.setContent(jsonString);
  } else {
    DriveApp.createFile(fileName, jsonString, 'text/plain');
  }
}
