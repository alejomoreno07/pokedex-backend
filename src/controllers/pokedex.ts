import { constants } from "../config"
import axios from "axios"
import { PokedexItemLink, PokedexListing, PokedexQuery } from "../interfaces/types/pokedex";

export const pokemonInfo = async (name:string) =>{
    const { POKEMON_INFO_URL } = constants;
    let response = await axios.get(POKEMON_INFO_URL+"/"+name);
    return response.data;
}


export const pokemonInfoFromUrl = async (url:string) => {
    let response = await axios.get(url);
    return response.data;
}

export const pokemonList = async (pokemonQuery: PokedexQuery ) => {
    const { POKEMON_INFO_URL } = constants;
    let response = await axios.get(POKEMON_INFO_URL+`?limit=${pokemonQuery.limit}&offset=${pokemonQuery.offset}`);
    let pokemonList:PokedexListing =  response.data;
    let pokemonItems = pokemonList.results.map((pokemonItem:PokedexItemLink) => {
        return pokemonInfoFromUrl(pokemonItem.url);
    });
    let pokemonDataArray = await Promise.all(pokemonItems);
    return pokemonDataArray;
}