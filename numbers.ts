import {Controller,Get,Post,Res,HttpStatus} from '@nestjs/common';
import {Response} from 'express';
import {AppService} from './app.service';
const plivo = require('plivo');

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('/outbound')
    sendSMS() {
        const client = new plivo.Client(process.env.AUTH_ID, process.env.AUTH_TOKEN);
        console.log("==========");
        console.log("/!\ Phone Number: "+process.env.DEST);
        console.log("/!\ Message: "+process.env.MESSAGE);
        console.log("==========");
        console.log("For security reasons, we are not sending the SMS in this version. This is only for testing purpose.");
        console.log("Congrats, you finished the lab!");
        client.messages.create(
                process.env.SOURCE,
                //process.env.DEST,
                process.env.MESSAGE,
            )
            .then(
                function(response) {
                    console.log(response);
                },
                function(err) {
                    console.error(err);
                },
            );
    }
}
