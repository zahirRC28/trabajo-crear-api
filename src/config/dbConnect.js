const mongoose = require('mongoose');

const connection = async () =>{
    try {
        const response = await mongoose.connect(process.env.DB_URI);
        return response;
    } catch (error) {
        return{
            ok:false,
            msg: `Error al conectarse con el servidor`
        }
    }
}

module.exports = { connection };