const { check } = require('express-validator');
const Servicio = require('../models/servicio.model');

const nombreExiste = async(nombre) =>{
  const nombreEncontrado = await Servicio.findOne({ nombre })
    if(nombreEncontrado){
      throw new Error('Ese servicio ya existe');
    }
  return true    
}

const isTel = (telf) => {
  if (!/^[0-9]{9}$/.test(String(telf))) {
    throw new Error('El telefono debe tener 9 números');
  }
  return true;
};

const isPrecioValido = (precio) => {
  if (precio < 100 || precio > 100000) {
    throw new Error('Precio fuera de rango');
  }
  return true;
};
const isFecha = (fecha) => {
    const fechaConvertida = new Date(fecha);
    //con el new Date y un valor lo convertimos en fecha
    const fechaHoy = new Date();

    fechaHoy.setHours(0,0,0,0); //quitamos la horas y derivados
    //con el isNana vemos si es numerico y con el getTime sacamos los milisegundo que si es correcto sacaria numerico
    if (isNaN(fechaConvertida.getTime())){
      throw new Error('Fecha inválida');
    } 
    if (fechaConvertida <= fechaHoy){
      throw new Error('La fecha debe ser mayor a hoy');
    } 
    return true;
}
const validarPut = () =>{
  return[
    check('nombre')
        .optional()
        .notEmpty().withMessage('El nombre esta vacio')
        .bail()
        .trim()
        .isString().withMessage('El nombre tiene que ser un string')
        .bail()
        .isLength({min:3 , max: 50}).withMessage('El campo nombre no cumple el tamaño')
        .custom(nombreExiste)
        .bail()//si hay un error te lo manda directamente, ayuda a la rapides
    ,check('descripcion')
        .optional()
        .notEmpty().withMessage('La descripcion esta vacia')
        .bail()
        .trim()
        .isLength({min:10 , max: 300}).withMessage('El campo nombre no cumple el tamaño')
        .bail()
    ,check('precio')
        .optional()
        .notEmpty().withMessage('debes de poner un precio')
        .bail()
        .trim()
        .toFloat()//convierte el numero en float
        .custom(isPrecioValido)
        .bail()
    ,check('correoContacto')
        .optional()
        .notEmpty().withMessage('tienes que agregar una correo de contacto')
        .bail()
        .trim()
        .isEmail().withMessage('tiene que tener un formato de correo')
        .bail()
    ,check('diaDescuento')
        .optional()
        .notEmpty().withMessage('deberias elegir un dia de descuento')
        .bail()
        .trim()
        .custom(isFecha).withMessage('Formato de fecha inválido, debe ser DD-MM-YYYY y mayor a hoy')
        .bail()
    ,check('telefonoContacto')
        .optional()
        .notEmpty().withMessage('debes agregar un telefono de contacto')
        .bail()
        .trim()
        .custom(isTel)
        .bail()
    ,check('estado')
        .optional()
        .notEmpty().withMessage('tienes que especificar tu estado')
        .bail()
        .trim()
        .isString().withMessage('El estado tiene que ser un string')
        .bail()
        .isIn(['Activo','Inactivo']).withMessage('El estado solo puede ser Activo o Inactivo')
        .bail()
  ]
}


module.exports = {
  validarPut,
  nombreExiste,
  isTel,
  isPrecioValido,
  isFecha
};


