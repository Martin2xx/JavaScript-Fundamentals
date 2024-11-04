function getInput() {
  let intValue = null;
  do {
    let numInput = prompt("Enter a number between 1 and 100");
    intValue = Number.parseInt(numInput);
  } while (
    Number.isNaN(intValue) ||
    typeof intValue !== "number" ||
    intValue < 1 ||
    intValue > 100
  );
  return intValue;
}

function printResult(mid, direction, minValue, maxValue) {
  console.log(`${mid} ${direction} (interval: ${minValue} - ${maxValue})`);
}

function guesstheNumber() {
  let intValue = getInput();

  let minValue = 1;
  let maxValue = 100;

  while (minValue < maxValue) {
    let midPoint = Math.floor((minValue + maxValue) / 2);
    if (intValue === midPoint) {
      minValue = maxValue = midPoint;
    } else if (intValue < midPoint) {
      maxValue = midPoint - 1;
      printResult(midPoint, "Lower", minValue, maxValue);
    } else {
      minValue = midPoint + 1;
      printResult(midPoint, "Higher", minValue, maxValue);
    }
  }
  console.log(`${minValue} Found!`);
}
