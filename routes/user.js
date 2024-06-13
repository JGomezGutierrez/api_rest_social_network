//importaciones
import { Router } from "express";
const router = Router();
import {testUser} from "../controllers/user.js"

//Definir la ruta 
router.get('/test-user', testUser);

//Exportar el Router
export default router;