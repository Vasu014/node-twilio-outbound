import { Request, Response } from 'express';
import winston = require('winston');
import { ServerLogger } from '../logger/ServerLogger';

class TwilioController{
    private twilioClient: any;
    private logger: winston.Logger;
    constructor(){
        this.logger = new ServerLogger().logger;
        this.twilioClient = require('twilio')(process.env.TWL_SID, process.env.TWL_AUTH_TOKEN);
    }

    makePhonecall(req: Request, res: Response){
        this.twilioClient.calls.
            create({
                record: true,
                url: 'http://demo.twilio.com/docs/voice.xml',
                from: 'registered_twilio_number',
                to: 'destination_number'
            }).then((call: any) => {
                this.logger.info('Connecting to call now');
                this.logger.info(call);
                res.status(200).json(call);
            });
    }
}

export {TwilioController};
