function capitalizeFirstLetter(str) {
  if (typeof str === "string" && str.length) {
    return str[0].toUpperCase() + str.slice(1);
  } else {
    return str;
  }
}
