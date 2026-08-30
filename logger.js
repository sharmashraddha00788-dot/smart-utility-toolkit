// modules/logger.js
// A simple custom logger module with timestamps

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

module.exports = log;
