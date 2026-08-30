// calculator.js
// Run like: node calculator.js add 10 5

const args = process.argv.slice(2); // remove "node" and "calculator.js" paths
const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    default:
      throw new Error(`Invalid operation: ${op}`);
  }
}

// Basic input validation
if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log("Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>");
  process.exit(1);
}

try {
  const result = calculate(operation, num1, num2);
  console.log(`Result: ${result}`);
} catch (err) {
  console.log(`Error: ${err.message}`);
}
