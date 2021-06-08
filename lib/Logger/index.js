const {
  createLogger,
  format,
  transports,
} = require('winston');

const {
  combine,
  timestamp,
  ms,
  json,
  simple,
  colorize,
} = format;

const devStage = process.env.DEPLOYMENT_STAGE === 'prod' ? 'warn' : 'silly';

const logger = createLogger({
  level: devStage,
  format: combine(
    timestamp(),
    ms(),
    colorize(),
    json(),
    simple(),
  ),
  transports: [new transports.Console()],
});

module.exports = logger;
