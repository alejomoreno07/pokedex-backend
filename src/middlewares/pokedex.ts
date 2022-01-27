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