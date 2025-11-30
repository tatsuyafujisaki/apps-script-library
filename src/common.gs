function capitalizeFirstLetter_(str) {
  if (typeof str === "string" && str.length) {
    return str[0].toUpperCase() + str.slice(1);
  }
  return str;
}

function formatArray_(
  items,
  outerPrefix = "",
  itemPrefix = "",
  itemSeparator = "",
  itemSuffix = "",
  outerSuffix = ""
) {
  return outerPrefix + items.map((item) => itemPrefix + item + itemSuffix).join(itemSeparator) + outerSuffix;
}
