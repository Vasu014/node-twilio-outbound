import express from 'express';
import * as bodyParser from 'body-parser';
import { RouteHandler } from './routes/RouterHandler';
import winston = require('winston');
import { ServerLogger } from './logger/ServerLogger';

class App{
    public app: express.Application;
    private routeHandler: RouteHandler;
    private logger: winston.Logger;
    constructor(){
        this.app = express();
        this.logger = new ServerLogger().logger;
        this.routeHandler = new RouteHandler();
        this.configure();
    }

    configure(){
        this.logger.info('Adding body parser');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.logger.info('Adding route handlers');
        this.routeHandler.configureRoutes(this.app);
    }
}

export { App };