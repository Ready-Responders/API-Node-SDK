module.exports = require('retry-request');
module.exports.retryOptions = {
  noResponseRetries: 3,
  retries: 3
};