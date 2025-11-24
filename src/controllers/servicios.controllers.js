const Servicio = require('../models/servicio.model');

//CREATE SERVICIO
const createServicio = async(req, res)=> {
    const newServicio = req.body
    const servicio = new Servicio(newServicio)
    try {
        const ServicioCreando = await servicio.save()
        console.log(ServicioCreando);
        return res.status(201).json({
            ok:true,
            msg: `El servicio fue creado correctamente`,
            data: ServicioCreando
        })
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: `No se pudo crear al servicio `
        })
    }
}

//GET ALL SERVICIOS
const getAllServicios = async(req, res)=> {
    try {
        const Servicios = await Servicio.find()
        console.log(Servicios);
        return res.status(200).json({
            ok:true,
            msg: `Estos son todos los servicios`,
            data: Servicios
        })
    } catch (error) {
        return res.status(404).json({
            ok:false,
            msg: `No se encontraron servicios `
        })
    }
}

//GET SERVICIOS BY ID
const getServicioByid = async(req, res)=> {
    try {
        //const ServicioEncontrado = await Servicio.findById(req.params.id) con esto buscamos el id nombar
        const ServicioEncontrado = await Servicio.findOne({ id: req.params.id }) //con esto busco mi id personalizada
        //console.log(ServiciosEncontrado);
        return res.status(200).json({
            ok:true,
            msg: `este es el servicio`,
            data: ServicioEncontrado,
            msg:`El servicio fue encontrdo`
        })
    } catch (error) {
        return res.status(404).json({
            ok:false,
            msg: `No se encontro el servicio `
        })
    }
}

//UPDATE SERVICIO BY ID
const putServicioByid = async(req, res)=> {
    try {
        //const ServicioActualizado = await Servicio.findByIdAndUpdate(req.params.id, req.body, { new: true })
        //el update lo que hace es requerir el id y luego el json del body despues el new: truee devuelve el documento actualizado
        const ServicioActualizado = await Servicio.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
        //console.log(ServicioActualizado);
        return res.status(200).json({
            ok:true,
            msg: `se encontro el servicio`,
            data: Servicio,
            msg: `El servicio fue actualizado correctamente`,
            data: ServicioActualizado
        })
    } catch (error) {
        return res.status(404).json({
            ok:false,
            msg: `No se encontro el servicio `
        })
    }
}

//DELETE SERVICIO BY ID
const deleteServicioByid = async(req, res)=> {
    try {
        //const ServicioEliminado = await Servicio.findByIdAndDelete(req.params.id)
        const ServicioEliminado = await Servicio.findOneAndDelete({ id: req.params.id })
        //console.log(ServicioEliminado);
        return res.status(200).json({
            ok:true,
            msg: `se encontro el servicio`,
            data: Servicio,
            msg: `El servicio fue eliminado correctamente`,
            data: ServicioEliminado
        })
    } catch (error) {
        return res.status(404).json({
            ok:false,
            msg: `No se encontro el servicio `
        })
    }
}

module.exports={
    createServicio,
    getAllServicios,
    getServicioByid,
    putServicioByid,
    deleteServicioByid
}