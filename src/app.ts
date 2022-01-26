import * as Koa from "koa";
import * as bodyparser from 'koa-bodyparser'
import * as cors from "@koa/cors"
require('dotenv').config()



const app = new Koa();

app.use(bodyparser());
app.use(cors({
    origin: '*',
    allowHeaders: 'Content-Type, Access-Control-Allow-Headers,Access-Control-Allow-Origin, Authorization, X-Requested-With,',
    allowMethods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
}));

export const appServer = app;