//Crear un nuevo folder en la raiz ejemplo 'rutas'
//Dentro crear un index.js

const express = require('express'); //Importamos express
const router  = express.Router();   //Creamos una constante para el router

//Modificaremos esto en index.js de la raiz
//Importar el controlador
const homeController     = require('../controllers/home.controller');
const proyectoController = require('../controllers/proyectos.controller');
//Creamos un modulo de rutas
module.exports = function() {
    
    //Ruta Home
    router.get('/', homeController.home);
    router.get('/nuevo-proyecto', proyectoController.formularioProyecto);
    
    router.post('/nuevo-proyecto', proyectoController.nuevoProyecto);
    //Retornamos el modulo
    return router;
}