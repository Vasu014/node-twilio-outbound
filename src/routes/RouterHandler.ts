import  { Router, Request, Response } from 'express';
import express from 'express';
import { TwilioController } from './../controllers/TwilioController';

class RouteHandler{
    private router: Router;
    private twlController: TwilioController
    
    constructor(){
        this.router = Router();
        this.twlController = new TwilioController(); 
    }

    /**
     * Add all route handlers here
     */
    configureRoutes(app: express.Application){
        this.router.get('/', (req: Request, res: Response) => {
            res.status(200).json({
                message: 'This just might work'
            });
        });

        this.router.get('/phonecall', (req: Request, res: Response) =>
             this.twlController.makePhonecall(req, res));

        app.use('/', this.router);
    }
}

export { RouteHandler };