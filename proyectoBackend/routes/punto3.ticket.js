//defino controlador para el manejo de CRUD
const ticketCtrl = require('../controllers/punto3.ticket.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de producto

router.get('/', ticketCtrl.getTickets);
router.post('/', ticketCtrl.createTicket);
router.get('/:id', ticketCtrl.getTicket);
router.put('/:id', ticketCtrl.editTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
router.get('/categoria/:categoriaEspectador', ticketCtrl.getrecuperarespectadores);

//exportamos el modulo de rutas
module.exports = router;
