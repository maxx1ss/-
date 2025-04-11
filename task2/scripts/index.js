function padString(string, stringLength, symbolFiller, addFromTheStart = true) {
  if (!string) {
    return "Error ocured, u did not enter anything in a string, its a required point";
  }

  if (!stringLength) {
    return "Error ocured, u did not specify your string length its a required point";
  }
  if (stringLength <= string.length) {
    return string.substring(0, stringLength);
  }

  if (!addFromTheStart) {
    for (let i = string.length; i < stringLength; i++) {
      string = symbolFiller + string;
    }
  }

  // for (let i = string.length; i < stringLength; i++) {
  //   string += symbolFiller;
  // }

  const result = string.split("");
  result.push(
    Array(stringLength - string.length)
      .fill(symbolFiller)
      .join("")
  );
  console.log(result.join(""));

  return string;
}

console.log(padString("Hello", 8, "8"));
