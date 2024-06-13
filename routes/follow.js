//importaciones
import { Router } from "express";
const router = Router();
import { testFollow } from "../controllers/follow.js"

//Definir la ruta .
router.get('/test-follow', testFollow);

//Exportar el Router
export default router;