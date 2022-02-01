import { constants } from "../config"
import axios from "axios"
import { NamedApiResource, PokedexListing, PokedexQuery, Pokemon } from "../interfaces/types/pokedex";

export const getAxios  = async (url:string):Promise<any>=>{
    let response = await axios.get(url);
    return response.data;
}

export const pokemonInfo = async (name:string):Promise<Pokemon> =>{
    const { POKEMON_INFO_URL } = constants;
    let url = POKEMON_INFO_URL+"/"+name;
    return getAxios(url);
}

export const pokemonList = async (pokemonQuery: PokedexQuery ):Promise<Pokemon[]> => {
    const { POKEMON_INFO_URL } = constants;
    let url = POKEMON_INFO_URL+`?limit=${pokemonQuery.limit}&offset=${pokemonQuery.offset}`;
    let pokemonList:PokedexListing =  await getAxios(url);
    let pokemonItems:Promise<Pokemon>[] = pokemonList.results.map((pokemonItem:NamedApiResource) => {
        return getAxios(pokemonItem.url);
    });
    let pokemonDataArray:Pokemon[] = await Promise.all(pokemonItems);
    let pokemonResponse:Pokemon[] = pokemonDataArray.map((pokemon:Pokemon)=>{
        const {id, name, sprites} = pokemon;
        let { other } = sprites;
        let official_artwork = other["official-artwork"];
        return {id,name, official_artwork};
    })
    return pokemonResponse;
}