import jwt from 'jwt-simple';
import moment from 'moment';
import { secret } from '../services/jwt.js';

// Asegurar la autenticacion 
export const ensureAuth = (req,res,next) => {
  // Comporbar si llego la cabecera de autenticacion 
  if(!req.headers.authorization){
   return res.status(403).send({
    status: "error",
    message: "La peticion no tiene cabecera de auutenticacion"
   });
  }

  //Limpiar el token y quitar las comillas si las hay
  const token = req.headers.authorization.replace(/['"]+/g, '');
  
  //Decodificar el token y comporbar si ha expirado
  try {
    //decodificar el token 
    let payload = jwt.decode(token, secret);

    // Comprobar si el token ha expirado
    if (payload.exp <= moment().unix()) {
        return res.status(401).send({
          status: "error",
          message:"El token ha expirado"
        });
    }

    // Agregar los datos del user
    req.user = payload;

 } catch (error) {
    return res.status(404).send({
      status:"error",
      message:"El token no es valido"
    });
 }

// Pasar a la ejecucion del siguiente metodo
next();
}
