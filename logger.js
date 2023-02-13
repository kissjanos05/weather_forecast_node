const winston = require('winston');
const { format } = require('logform');

module.exports = winston.createLogger({
  exitOnError: false,
  level: 'info',
  format: winston.format.combine(
    format.timestamp(),
    format.simple()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: './log/app.log' }),
  ],
});
