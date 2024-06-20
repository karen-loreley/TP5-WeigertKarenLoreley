const Producto = require('../models/punto1');
const productoCtrl = {}

productoCtrl.getProductos = async (req, res) => {
var producto = await Producto.find();
res.status(200).json(producto);
}

productoCtrl.createProducto = async (req, res) => {
var producto = new Producto(req.body);
try {
await producto.save();
res.status(200).json({
'status': '1',
'msg': 'Producto guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando operacion.'})
}
}

productoCtrl.getProducto = async (req, res) => {
const producto = await Producto.findById(req.params.id);
res.json(producto);
}

productoCtrl.editProducto = async (req, res) => {
const vproducto = new Producto(req.body);
try {
await Producto.updateOne({_id: req.body._id}, vproducto);
res.status(200).json({
'status': '1',
'msg': 'Producto updated'
})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando la operacion'
})
}
}

productoCtrl.deleteProducto = async (req, res)=>{
try {
await Producto.deleteOne({_id: req.params.id});
res.json({
status: '1',
msg: 'Producto removed'
})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando la operacion'
});
}
}

  productoCtrl.getProductosDestacados = async (req, res) => {
    try {
      const productosDestacados = await Producto.find({ destacado: true });
      res.json(productosDestacados);
    } catch (error) {
      res.status(400).json({
        'status': '0',
        'msg': 'Error procesando la operación.'
      });
    }
  }

module.exports = productoCtrl;