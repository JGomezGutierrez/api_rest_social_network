//Importaciones
const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");


//Mensaje de bienvenida
console.log("API NODE arriba");

// Conexion a la base de datos 
connection();

// Crear Servidor de Node
const app = express();
const puerto = 3900;

// Configurar cors: permite que las peticiones se hagan directamente
app.use(cors());

// Conversion de datos (body a objetos JS)
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Configurar rutas

//Configurar el servidor para escuchar las peticiones HTTP 