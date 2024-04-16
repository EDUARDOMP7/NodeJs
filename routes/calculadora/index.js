'use strict'
const api = require('express').Router();
const calculadora = require('../../controllers/calculadora');


api.post('/suma',
  calculadora.suma,
  calculadora.saveOperation
)

api.post('/resta',
  calculadora.resta
)

api.post('/division',
  calculadora.division
)

api.post('/multiplicacion',
  calculadora.multiplicacion
)

module.exports = api;
