import { Context } from 'koa';

/**
 * this middleware disable credentials CORS check, use if only en dev environments
 * @param ctx
 * @param next
 */
async function corsMiddleware(ctx:Context, next:any) {
  ctx.headers['access-control-allow-origin'] = '*';
  ctx.headers['access-control-allow-headers'] = 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With';
  ctx.headers['access-control-allow-methods'] = 'GET, POST, OPTIONS, PUT, PATCH, DELETE';
  await next(ctx);
}

export default corsMiddleware;