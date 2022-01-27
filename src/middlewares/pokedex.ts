import { Context } from "koa"
import { pokedex } from "../controllers"

export const getPokemonInfo = async(ctx:Context) =>{
    try{
        const { params } = ctx;
        let pokemonName:string=  params.pokemonName.toString();
        let response = await pokedex.pokemonInfo(pokemonName);
        ctx.status = 200;
        ctx.body = response;
    } catch(error) {
        console.log(error);
    }
}

export const  getListOfPokemon = async(ctx:Context) => {
    try{
        const { query } = ctx;
        let page:number= (query.page === undefined)? 0:+(query.offset.toString());
        let limit:number=(query.limit === undefined)? 10:+(query.limit.toString());
        let offset:number= page*limit;
        let response = await pokedex.pokemonList({limit: limit, offset:offset});
        ctx.status = 200;
        ctx.body = response;
    } catch(error){
        console.log(error);
    } 
}