/*
  Ruta:/api/medicos

*/
const { check } = require('express-validator')

const { Router } = require('express');
const { validarcampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getMedicos, crearMedico, actualizarMedico, borrarMedico } = require('../controllers/medicos');

const router = Router();

router.get('/', getMedicos);
router.post('/',
    [
        validarJWT,
        check('nombre', 'El nombre del médico es necesario').not().isEmpty(),
        check('hospital', 'El hospital id debe ser válido').isMongoId(),
        validarcampos
    ]
    ,
    crearMedico);
router.put('/:id',
    [
        validarJWT,
        check('nombre', 'El nombre del médico es necesario').not().isEmpty(),
        check('hospital', 'El hospital id debe ser válido').isMongoId(),
    ],
    actualizarMedico);

router.delete('/:id', validarJWT,
    borrarMedico);


module.exports = router;