function conditionalFormat_(sheet, formula, color) {
  const rules = sheet.getConditionalFormatRules();
  rules.push(
    SpreadsheetApp.newConditionalFormatRule()
      .setRanges([getHeaderlessRange_(sheet)])
      .whenFormulaSatisfied(formula)
      .setBackground(color)
      .build()
  );
  sheet.setConditionalFormatRules(rules);
}
