import * as Router from "koa-router";
import { pokedex } from "../middlewares"

const router = new Router();

router.get('/pokemon/:pokemonName', pokedex.getPokemonInfo);

router.get('/pokemon', pokedex.getListOfPokemon);

export const routes = router.routes();