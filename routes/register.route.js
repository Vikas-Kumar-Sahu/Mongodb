const express = require('express');
const router = express.Router();
const {getRegisters, getRegister, createRegister, updateRegister, deleteRegister} = require('../controllers/register.controller');

router.get('/', getRegisters);

router.get('/:id', getRegister);

router.post('/', createRegister);

router.put('/:id', updateRegister);

router.delete('/:id', deleteRegister);

module.exports = router;