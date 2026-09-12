const number = -9;

if (number > 9) {
  console.log("The number is positive with multiple digits.");
} else if (number > 0) {
  console.log("The number is positive with single digit.");
} else if (number === 0) {
  console.log("The number is 0.");
} else if (number > -10) {
  console.log("The number is negative with single digit.");
} else {
  console.log("The number is negative with multiple digits.");
}