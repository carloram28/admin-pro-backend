/*
  Ruta:/api/hospitales

*/
const { check } = require('express-validator')

const { Router } = require('express');
const { validarcampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getHospitales, crearHospital, actualizarHospital, borrarHospital } = require('../controllers/hospitales');

const router = Router();

router.get('/', getHospitales);
router.post('/', [
  validarJWT,
  check('nombre', 'El nombre del hospital es necesario').not().isEmpty(),
  validarcampos
], crearHospital);
router.put('/:id',
  [
    validarJWT,
    check('nombre', 'El nombre del hospital es necesario').not().isEmpty(),
  ],
  actualizarHospital);

router.delete('/:id', validarJWT, borrarHospital);


module.exports = router;