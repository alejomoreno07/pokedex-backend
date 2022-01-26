import { oas } from "koa-oas3"
import { appServer } from "./app"

let port = process.env.port || 7000;


async function start(port:number | string) {
    try{
        const swagger = await oas({
            file: `${__dirname}/../api.yaml`,
            endpoint: '/pricing/docs.json',
            uiEndpoint: '/pricing/docs',
            validatePaths: [],
        });
        appServer.use(swagger);
    } catch (error) {
        console.log(error);
    }
    appServer.listen(port);
    console.log(`listening on port ${port}`)
}

start(port);

export default start;
