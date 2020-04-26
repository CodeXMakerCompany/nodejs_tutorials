const Proyecto = require('../models/proyectos');

//Creating urls
const slug = require('slug');

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    })
}

//Obtener los valores de una peticion
exports.nuevoProyecto = async (req, res) => {

    let params = req.body;

    //Validar desestructuracion de datos
    const { nombre } = params;
    
    //Variable para acumular errores
    let errores = [];

    //Aquí añadimos tantas expreciones como queramos validar
    if (!nombre) {
        errores.push({'texto': 'Agrega un nombre al proyecto'});
    }
    
    //Si hay errores
    if (errores.length > 0) {
        
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        });

    }else{

        let today = new Date();
        let url   = slug(nombre).toLowerCase();

        //Insertar en la base de datos con Sequalize
        const proyecto = await Proyecto.create({
            nombre: nombre,
            url   : url,
            activo: 1,
            created_at : today
        });

        res.redirect('/');

    }
}