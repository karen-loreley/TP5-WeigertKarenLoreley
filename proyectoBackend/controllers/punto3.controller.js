const Espectador = require('../models/punto3');
const espectadorCtrl = {}

    espectadorCtrl.getEspectadores = async (req, res) => {
        try {
            var espectador = await Espectador.find();
            res.status(200).json(espectador);
        } catch (error) {
            res.status(400).json({ 
                'status': '0', 
                'msg': 'Error procesando la operación.', 
                'error': error.message });
        }
    }
    
    espectadorCtrl.createEspectador = async (req, res) => {
        var espectador = new Espectador(req.body);
            try {
                await espectador.save();
                res.status(200).json({
                    'status': '1',
                    'msg': 'Espectador guardado.'})
                } catch (error) {
                    res.status(400).json({
                    'status': '0',
                    'msg': 'Error procesando operacion.', 
                    'error': error.message });
                }
    }

    espectadorCtrl.getEspectadorById = async (req, res) => {
        try {
            const espectador = await Espectador.findById(req.params.id);
            if (!espectador) {
                return res.status(404).json({ 
                    'status': '0', 
                    'msg': 'Espectador no encontrado.' });
            }
            res.status(200).json(espectador);
        } catch (error) {
            res.status(400).json({ 
                'status': '0', 
                'msg': 'Error procesando operación.', 
                'error': error.message });
        }
    }

    espectadorCtrl.deleteEspectador = async (req, res) => 
        {
            try {
                await Espectador.deleteOne({ _id: req.params.id });
                res.json
                ({
                    status: '1',
                    msg: 'Espectador removed'
                })
            }catch (error) {
                res.status(400).json
                ({
                    'status': '0',
                    'msg': 'Error procesando la operacion',
                    'error': error.message
                })
            }
        }


module.exports = espectadorCtrl;