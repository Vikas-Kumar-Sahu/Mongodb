const express = require('express');
const loginrouter = express.Router();
const {createLogin, getLogins} = require('../controllers/login.controller');

loginrouter.get('/', getLogins);

loginrouter.post('/', createLogin);

module.exports = loginrouter;