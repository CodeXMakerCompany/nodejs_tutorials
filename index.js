//En el index.js de la raiz del proyecto hacemos estos cambios.
//Para renderizar utilizaremos pug asi que necesitamos instalarlo al proyecto
//npm install --save pug

//Importamos express
const express = require('express');
//Importamos las rutas
const routes = require('./routes');

//Libreria para acceder a los archivos de la carpeta.
const path   = require('path');

// Creamos una app de express
const app = express();

//Cargar los archivos estaticos
app.use(express.static('public'));

// Habilitar pug
app.set('view engine', 'pug');
// Añadir carpeta de las vistas
app.set('views', path.join(__dirname, './views'));


//Inicializar rutas pasando el modulo routes que exporta una funcion
app.use('/', routes());

//Asignar puerto
app.listen(2999);
