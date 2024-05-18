/*
  Ruta:/api/usuarios

*/
const { check } = require('express-validator')

const { Router } = require('express');
const { getUsuarios, crearUsuario, actualizarUsuario, deleteUsuario } = require('../controllers/usuarios');
const { validarcampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router();

router.get('/', validarJWT, getUsuarios);
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarcampos
    ],
    crearUsuario);
router.put('/:id',
    [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('role', 'El role es obligatorio').not().isEmpty(),
        validarcampos

    ],
    actualizarUsuario);

router.delete('/:id',
    validarJWT,
    deleteUsuario);


module.exports = router;