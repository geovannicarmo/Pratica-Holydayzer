import express, { response } from 'express';
import holidayMonth from './functions.js';
import TodaHoliday from './today.js';
import holidays from './dates.js';
import cors from 'cors';

const server = express();
server.use(cors())

server.get("/holidays", (require, response)=>{

    response.send(holidays)
})

server.listen(4004)


server.get("/is-today-holiday", (require, response)=>{

    response.send(TodaHoliday())

})

server.get('/holidays/:month', (require, response)=>{
    const id = require.params.month;
    response.send(holidayMonth(id))

})