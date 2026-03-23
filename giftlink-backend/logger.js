const pinoHttp = require('pino-http');
const pino = require('pino');

const logger = pino({
    level: process.env.LOG_LEVEL || 'info',
});

const pinoLogger = pinoHttp({ logger });

module.exports = pinoLogger;
