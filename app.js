// app.js
// Demonstrates reusing custom modules (isEven and logger)

const isEven = require("./modules/isEven");
const log = require("./modules/logger");

log("Starting app.js...");

const numbers = [4, 7, 10, 15, 22];

numbers.forEach((num) => {
  if (isEven(num)) {
    log(`${num} is even`);
  } else {
    log(`${num} is odd`);
  }
});

log("Finished checking numbers.");
