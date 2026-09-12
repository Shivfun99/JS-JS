//Code after return is skipped
//Only the function stops—not the entire program.
function calculateSum(a, b) {
  console.log("Calculating...");
  return a + b;
  console.log("Calculation complete");
}

const result = calculateSum(4, 6);
console.log(result);
console.log("Next task");

//Just return; means “stop this function immediately.”
function greet(age) {
  if (age < 18) return;

  console.log("Welcome!");
}

greet(15); // Nothing prints
greet(20); // Prints "Welcome!"