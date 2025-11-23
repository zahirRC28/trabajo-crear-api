const express = require('express');
const router = express.Router()

const { 
    createServicio,
    getAllServicios,
    getServicioByid,
    putServicioByid,
    deleteServicioByid
 } = require('../controllers/servicios.controllers');


//CREATE SERVICIO
router.post('/servicios/crear',createServicio);

//GET ALL SERVICIOS
router.get('/servicios', getAllServicios);

//GET SERVICIOS BY ID
router.get('/servicio/:id', getServicioByid);

//UPDATE SERVICIO BY ID
router.put('/servicio/actualizar/:id', putServicioByid);

//DELETE SERVICIO BY ID
router.delete('/servicio/borrar/:id', deleteServicioByid);

module.exports = router;