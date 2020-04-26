//Importamos la libreria
const Sequelize = require('sequelize');
//Importamos nuestra conexión en esta constante
const database = require('../config/db');
//Creating urls
const slug = require('slug');
const shortid = require('shortid');
//Creamos nuestro objeto
const Proyectos = database.define('proyecto', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre    : Sequelize.STRING,
    url       : Sequelize.STRING,
    activo    : Sequelize.BOOLEAN,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE
},{ 
    hooks: {
        //Hook para generar id aleatoria a las url dinámicas
        //Antes de ejecutar la consulta
        beforeCreate (proyecto) {
            //proyecto contiene los datos que se envian a través de
            //la consulta
            let url   = slug(proyecto.nombre).toLowerCase();

            //Interpolación para añadir id unico
            //Reconstrucción de este valor
            proyecto.url = `${url}-${shortid.generate()}`;

        }
    }
});

//Exportamos el modulo con este modelo
module.exports = Proyectos;