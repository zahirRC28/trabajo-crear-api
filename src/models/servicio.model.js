const { Schema, model } = require('mongoose');

const ServicioSchema = new Schema({
    /*id:{
        type: Number,
        require: true,
        unique: true,
    },*/
    nombre:{
        type: String,
        require: true,
        unique: true,
    },
    descripcion:{
        type: String,
        require: true,
    },
    precio:{
        type: Number,
        require: true,
    },
    correoContacto:{
        type: String,
        require: true
    },
    diaDescuento:{
        type: Date,
        require: true
    },
    telefonoContacto:{
        type: Number,
        require: true
    },
    estado:{
        type: String,
        require: true
    }
})


module.exports = model("Servicio", ServicioSchema);