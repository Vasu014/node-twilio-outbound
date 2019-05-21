import express from 'express';
import * as http from 'http';
import { App } from './App';
import { ServerLogger } from './logger/ServerLogger';
import * as dotenv from 'dotenv';

dotenv.config();
const logger  = new ServerLogger().logger;

const reqListener = new App().app;

process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
    logger.info('Encountered unhandledRejection ,shutting down');
    process.exit(1);
});

process.on('uncaughtException', (err: Error) => {
    logger.info('Encountered uncaught exception. Shutting down');
    process.exit(2);
});

const httpServer = http.createServer(reqListener);

httpServer.listen(process.env.HTTP_PORT, () => {
    logger.info('Listening to incoming requests at ' + process.env.HTTP_PORT);
});
