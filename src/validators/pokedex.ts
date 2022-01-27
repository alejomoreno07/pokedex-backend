const Joi = require('joi');
import { PokedexQuery } from "../interfaces/types/pokedex"
import { joiConstants } from "../config"


export const validatePokedexListingParams = (parameters:PokedexQuery) => {
    const { NUMBER_FIELD } = joiConstants;
    const schema = Joi.object({
        page : NUMBER_FIELD, 
        limit: NUMBER_FIELD, 
        offset: NUMBER_FIELD
    });
    return schema.validateAsync(parameters);
}

