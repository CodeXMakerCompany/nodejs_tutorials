const Proyecto = require('../models/proyectos');

//En nuestro controlador
exports.home = async (req, res) =>{
    const proyectos = await Proyecto.findAll();
    //Renderizamos la vista de nuestro index pasando como parametro el nombre de nuestro html template
    res.render('index', {
        proyectos: proyectos
    });
}