'use strict'
const api = require('express').Router();
const login = require('../../controllers/login');

api.post('/signin',
login.signin
)

module.exports = api;
