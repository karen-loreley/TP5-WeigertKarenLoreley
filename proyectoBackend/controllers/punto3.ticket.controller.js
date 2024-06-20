const mongoose = require('mongoose');
const Ticket = require('../models/punto3ticket');
const ticketCtrl = {}

ticketCtrl.getTickets = async (req, res) => {
    try{
      const tickets = await Ticket.find().populate('espectador');
      res.json(tickets);
    }catch (error){
        res.status(400).json
        ({
            'status': '0',
            'msg': 'Error procesando operacion.',
            'error': error.message 
        });
    }
}

ticketCtrl.createTicket = async (req, res) => {
    var ticket = new Ticket(req.body);
    try {
          await ticket.save();
          res.json({
          'status': '1',
          'msg': 'Ticket guardado.'});
        } catch (error) {
    res.status(400).json({
          'status': '0',
          'msg': 'Error procesando operacion.',
          'error': error.message 
    });
    }
}

ticketCtrl.getTicket = async (req, res) =>  {
      const ticketId = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(ticketId)) {
          return res.status(400).json({
              'status': '0',
              'msg': 'ID de ticket inválido.'
          });
      }
      try {
          const ticket = await Ticket.findById(ticketId).populate('espectador');
          if (!ticket) {
              return res.status(404).json({
                  'status': '0',
                  'msg': 'Ticket no encontrado.'
              });
          }
          res.status(200).json(ticket);
      } catch (error) {
          res.status(500).json({
              'status': '0',
              'msg': 'Error procesando operación.',
              'error': error.message // Añadir detalle del error
          });
      }
    }

ticketCtrl.editTicket = async (req, res) => {

        const ticketId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(ticketId)) {
        return res.status(400).json({ 'status': '0', 'msg': 'ID de ticket inválido' });
    }
    try {
        const ticket = await Ticket.findByIdAndUpdate(ticketId, req.body, { new: true });
        res.status(200).json({ 'status': '1', 'msg': 'Ticket actualizado', 'ticket': ticket });
    } catch (error) {
        res.status(400).json({ 'status': '0', 'msg': 'Error procesando operación', 'error': error.message });
    }
    } 


ticketCtrl.deleteTicket = async (req, res) => {
    const ticketId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(ticketId)) {
        return res.status(400).json({
            'status': '0',
            'msg': 'ID de ticket inválido.'
        });
    }
    try {
        await Ticket.deleteOne({ _id: ticketId });
        res.json({
            'status': '1',
            'msg': 'Ticket eliminado.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación.',
            'error': error.messager
        });
    }
}

ticketCtrl.getrecuperarespectadores = async (req, res) => {
    try {
        const { categoriaEspectador } = req.params;
        const tickets = await Ticket.find({ categoriaEspectador }).populate('espectador');
        res.json(tickets);
    } catch (error) {
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando la operación.', 
            'error': error.message });
    }
}


module.exports = ticketCtrl;