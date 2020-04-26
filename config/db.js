//Creamos la carpeta config y dentro hacemos un archivo con el nombre
//db.js
//Dentro:

//Importamos la libreria
const Sequelize = require('sequelize');

// Conexión a la base de datos -> nombreTuBaseDatos, usuario, contraseña
const database = new Sequelize('nodejs_proyects', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port:3306,
  define: {
    timestamps: false,
    //Previene a sequalize de pluralizar las tablas
    freezeTableName: true
  },
  pool: {
   max: 5,
   min: 0,
   acquire: 30000,
   idle: 10000
 }
});

//Exportar conexion
module.exports = database;