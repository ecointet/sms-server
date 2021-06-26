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
        client.messages.create(
                process.env.SOURCE,
                process.env.DEST,
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
