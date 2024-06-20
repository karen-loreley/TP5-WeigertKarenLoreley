const Transaccion = require('../models/punto2');
const transaccionesCtrl = {}

transaccionesCtrl.getTransacciones = async (req, res) => {
var transaccion = await Transaccion.find();
res.status(200).json(transaccion);
};

transaccionesCtrl.createTransaccion = async (req, res) => {
var transaccion = new Transaccion(req.body);
try {
await transaccion.save();
res.status(200).json({
'status': '1',
'msg': 'Transaccion guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando operacion.'})
}
}

transaccionesCtrl.getTransaccion = async (req, res) => {
const transaccion = await Transaccion.findById(req.params.id);
res.json(transaccion);
}

transaccionesCtrl.editTransaccion = async (req, res) => {
const vtransaccion = new Transaccion(req.body);
try {
await Transaccion.updateOne({_id: req.body._id}, vtransaccion);
res.status(200).json({
'status': '1',
'msg': 'Transaccion updated'
})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando la operacion'
})
}
}

transaccionesCtrl.deleteTransaccion = async (req, res)=>{
try {
await Transaccion.deleteOne({_id: req.params.id});
res.json({
status: '1',
msg: 'Transaccion removed'
})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando la operacion'
})
}
}

/*transaccionesCtrl.getHistoricoCliente = async (req, res) => {
    const emailCliente = req.params.email; 
    try {
      const historicoTransacciones = await Transaccion.find({ emailCliente: emailCliente });
      res.json(historicoTransacciones);
    } catch (error) {
      res.status(400).json({
        status: '0',
        msg: 'Error al recuperar el histórico de transacciones del cliente.'
      });
    }
  }*/

    transaccionesCtrl.getTransaccionSourceTarget = async (req, res) => {
    try {
      const { monedaOrigen, monedaDestino } = req.params; // Obtener los valores de monedaOrigen y monedaDestino de los parámetros de ruta
  
      // Buscar todas las transacciones que coincidan con las divisas de origen y destino proporcionadas
      const transacciones = await Transaccion.find({ monedaOrigen: monedaOrigen, monedaDestino: monedaDestino });
  
      res.json(transacciones);
    } catch (error) {
      res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operación.'
      });
    }
  };

module.exports = transaccionesCtrl;
