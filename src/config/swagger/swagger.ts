import {oas} from 'koa-oas3'



export async function generateSwagger(){
    try{
        const swagger = await oas({
            file: `${__dirname}/../../../api.yaml`,
            endpoint: '/pricing/docs.json',
            uiEndpoint: '/pricing/docs',
            validatePaths: [],
        });
        return swagger;
    } catch(error){
        console.log(error);
    }
}   