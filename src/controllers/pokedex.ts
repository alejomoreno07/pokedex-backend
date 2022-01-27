import { constants } from "../config"
import axios from "axios"

export const pokemonInfo = async (name:string) =>{
    const { POKEMON_INFO_URL } = constants;
    let response = await axios.get(POKEMON_INFO_URL+"/"+name);
    return response.data;
}