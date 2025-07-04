function sortChineseSheet() {
  activateSheetByName_("🇨🇳");
  SpreadsheetApp.getActiveSheet().sort(2).sort(1);
}

function sortEnglishSheet() {
  activateSheetByName_("🇺🇸");
  SpreadsheetApp.getActiveSheet().sort(1);
}
