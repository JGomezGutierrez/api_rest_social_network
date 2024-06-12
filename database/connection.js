const mongosee = require("mongoose");

const connection = async() =>{

  try {
    await mongosee.connect ("mongodb://localhost:27017/bd_socialnet");
    console.log("Conectado correctamente a la BD: bd_socialnet");
  } catch (error) {
    console.log(error);
    throw new error("¡No se ha podido a conectar a la base de datos!");
  }

}

module.exports = connection;