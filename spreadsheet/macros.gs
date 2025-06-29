// > It's always best practice to include this annotation
// > when you're only working with a single file.
// https://developers.google.com/codelabs/apps-script-fundamentals-1#3
/** @OnlyCurrentDoc */
function greet() {
  SpreadsheetApp.getUi().alert('Hello!');
}
