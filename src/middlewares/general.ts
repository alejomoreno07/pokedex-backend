import { Context } from "koa";


export const health = async (ctx:Context) => {
    ctx.set('Cache-Control', 'no-cache');
    ctx.status = 200;
    ctx.body = {
        isAlive: true
    };
}