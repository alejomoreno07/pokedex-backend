import * as Router from "koa-router";
import { pokedex } from "../middlewares"

const router = new Router();

router.get('/pokemon/:pokemonName', pokedex.getPokemonInfo);

export const routes = router.routes();