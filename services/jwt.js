//Importar dependencias 
import jwt from 'jwt-simple';
import moment from 'moment';

//Establecer una clave secreta 
const secret = 'sECRET_kEYS_pROJECT_sOCIAL_nETWORK';

//Método para generar tokens
const createToken= (user) =>{
    const payload = {
      userId: user.id,
      role: user.role,
      name: user.name,
      iat: moment().unix(),
      exp: moment().add(30, 'days').unix()
    };

    // Devolver el token creado
    return  jwt.encode(payload,secret);
};

export {
  secret,
  createToken
};