require('dotenv').config();

const express = require('express');
const cors = require('cors')

const { dbConnection } = require('./database/config')

//Crear el servidor express
const app = express();

//Configurar CORS
app.use(cors());

//Base de datos
dbConnection();




app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola'
    })
})


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
})