import { createLogger, transports, format } from 'winston';
import winston = require('winston');

class ServerLogger{
    logger: winston.Logger = createLogger({
        level: 'info', 
        format: format.combine(
            format.json(),
            format.timestamp(),
            format.prettyPrint()
        ),
        transports: [
            new transports.Console()
        ]
    });
}

export { ServerLogger  };