// Simple logger utility (can be expanded for file logging, etc.)
function logInfo(message) {
  console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
}

function logError(message) {
  console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
}

module.exports = { logInfo, logError };
