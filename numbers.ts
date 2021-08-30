import {Controller,Get,Post,Res,HttpStatus} from '@nestjs/common';
import {Response} from 'express';
import {AppService} from './app.service';
const plivo = require('plivo');

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('/outbound')
    sendSMS() {
        console.log("==========");
        console.log("/!\ Phone Number: "+process.env.DEST);
        console.log("/!\ Message: "+process.env.MESSAGE);
        console.log("==========");
        console.log("For security reasons, we are not sending the SMS in this version. This is only for testing purpose.");
        console.log("Congrats, you finished the lab!");
    }
}
