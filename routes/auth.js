/*
  Ruta:/api/login

*/
const { check } = require('express-validator')
const { login, googleSignIn, renewToken } = require('../controllers/auth')
const { Router } = require('express');
const { validarcampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

router.post('/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarcampos
  ],
  login
)
router.post('/google',
  [
    check('token', 'El token de google es obligatorio').not().isEmpty(),
    validarcampos
  ],
  googleSignIn
)

router.post('/renew',
  validarJWT,
  renewToken
)

module.exports = router;