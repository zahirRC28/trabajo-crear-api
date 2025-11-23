const express = require("express");
require('dotenv').config();

const { connection } = require('./config/dbConnect');
const { error } = require("console");

const app = express();
const port = process.env.PORT

//MIDDLEWARE
app.use(express.json());//uso esto para que el body reconosca bien los datos en el json
app.use(express.urlencoded());

//BBDD
connection()
    .then((resp)=> console.log(`Conexion con la base de datos exitosa`))
    .catch((error)=> console.log(error))
//MODELWARE

//RUTAS
app.use('/api/v1', require('./routes/servicios.routes'))

//LISTENER
app.listen(port, ()=>{
    console.log(`Servidor activo en ${port}`)
})