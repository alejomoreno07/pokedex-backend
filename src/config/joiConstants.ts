const Joi = require('joi')

export const NUMBER_FIELD = Joi.number().integer().positive().allow(0);