//defino controlador para el manejo de CRUD
const punto3Ctrl = require('../controllers/punto3.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de producto
router.get('/', punto3Ctrl.getEspectadores);
router.post('/', punto3Ctrl.createEspectador);
router.get('/:id', punto3Ctrl.getEspectadorById);
router.delete('/:id', punto3Ctrl.deleteEspectador);

//exportamos el modulo de rutas
module.exports = router;
