import { Context } from "koa"
import { pokedexController } from "../controllers"
import { pokedexValidator } from "../validators"

export const getPokemonInfo = async(ctx:Context) =>{
    try{
        const { params } = ctx;
        let pokemonName:string=  params.pokemonName.toString();
        let response = await pokedexController.pokemonInfo(pokemonName);
        ctx.status = 200;
        ctx.body = response;
    } catch(error) {
        console.log(error);
    }
}

export const  getListOfPokemon = async(ctx:Context)=> {
    try{
        const { query } = ctx;
        await pokedexValidator.validatePokedexListingParams(query);
        let page:number= (query.page === undefined)? 0:+(query.page.toString());
        let limit:number=(query.limit === undefined)? 10:+(query.limit.toString());
        let offset:number= page*limit;
        let response = await pokedexController.pokemonList({limit: limit, offset:offset});
        ctx.status = 200;
        ctx.body = response;
    } catch(error){
        ctx.status = 400;
        ctx.body = error;
    } 
}