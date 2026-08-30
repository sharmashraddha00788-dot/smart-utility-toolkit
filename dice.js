// dice.js
// Random dice generator using the crypto module (cryptographically secure randomness)

const crypto = require("crypto");

function rollDice() {
  // crypto.randomInt(min, max) - max is exclusive, so use 7 to include 6
  return crypto.randomInt(1, 7);
}

const numberOfRolls = 5;

for (let i = 1; i <= numberOfRolls; i++) {
  const result = rollDice();
  console.log(`Roll ${i}: Dice Rolled: ${result}`);
}
