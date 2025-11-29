function formatLegalDocument() {
  const body = DocumentApp.getActiveDocument().getBody();

  const MILLIMETERS_IN_INCH = 25.4;
  const POINTS_IN_INCH = 72;
  const POINTS_IN_MILLIMETERS = POINTS_IN_INCH / MILLIMETERS_IN_INCH;
  const TOP_MARGIN_MILLIMETERS = 35;
  const BOTTOM_MARGIN_MILLIMETERS = 27;
  const LEFT_MARGIN_MILLIMETERS = 30;
  const RIGHT_MARGIN_MILLIMETERS = 15;

  Logger.log('topMargin in inches: ' + TOP_MARGIN_MILLIMETERS / MILLIMETERS_IN_INCH);
  Logger.log('bottomMargin in inches: ' + BOTTOM_MARGIN_MILLIMETERS / MILLIMETERS_IN_INCH);
  Logger.log('leftMargin in inches: ' + LEFT_MARGIN_MILLIMETERS / MILLIMETERS_IN_INCH);
  Logger.log('rightMargin in inches: ' + RIGHT_MARGIN_MILLIMETERS / MILLIMETERS_IN_INCH);

  const TOP_MARGIN_POINTS = TOP_MARGIN_MILLIMETERS * POINTS_IN_MILLIMETERS;
  const BOTTOM_MARGIN_POINTS = BOTTOM_MARGIN_MILLIMETERS * POINTS_IN_MILLIMETERS;
  const LEFT_MARGIN_POINTS = LEFT_MARGIN_MILLIMETERS * POINTS_IN_MILLIMETERS;
  const RIGHT_MARGIN_POINTS = RIGHT_MARGIN_MILLIMETERS * POINTS_IN_MILLIMETERS;

  Logger.log('topMargin in points: ' + TOP_MARGIN_POINTS);
  Logger.log('bottomMargin in points: ' + BOTTOM_MARGIN_POINTS);
  Logger.log('leftMargin in points: ' + LEFT_MARGIN_POINTS);
  Logger.log('rightMargin in points: ' + RIGHT_MARGIN_POINTS);

  body
    .setMarginTop(TOP_MARGIN_POINTS)
    .setMarginBottom(BOTTOM_MARGIN_POINTS)
    .setMarginLeft(LEFT_MARGIN_POINTS)
    .setMarginRight(RIGHT_MARGIN_POINTS);

  body.editAsText().setFontFamily('Sawarabi Mincho').setFontSize(12);
}
