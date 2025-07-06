function conditionalFormat_(
  formula,
  color,
  sheet = SpreadsheetApp.getActiveSheet()
) {
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
