const { Schema, model } = require('mongoose');

const ServicioSchema = new Schema({
    id:{
        type: Number,
        require: true,
        unique: true,
    },
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
    }
})


module.exports = model("Servicio", ServicioSchema);