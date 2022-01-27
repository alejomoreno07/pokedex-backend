import { oas } from "koa-oas3"
import { appServer } from "./app"
import { swagger } from "./config"
const { generateSwagger } = swagger;


let port = process.env.port || 7000;

async function start(port:number | string) {
    const swagger = await generateSwagger();
    appServer.use(swagger);
    appServer.listen(port);
    console.log(`listening on port ${port}`)
}

start(port);

export default start;
