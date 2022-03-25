const express = require('express');
const router = express.Router();

const controllerClientes = require('../controllers/controllerClientes.js');

router.get('/', controllerClientes.mostraTodos);

router.get('/:id', controllerClientes.mostrarPorId);

router.put('/:id', controllerClientes.atualizar);

router.delete('/:id', controllerClientes.deletar);

router.post('/criar', controllerClientes.criar);

module.exports = router;
