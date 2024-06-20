//importaciones
import { Router } from "express";
const router = Router();
import { saveFollow, testFollow } from "../controllers/follow.js"
import { ensureAuth } from "../middlewares/authentication.js";

//Definir la ruta .
router.get('/test-follow', testFollow);
router.post("/follow", ensureAuth, saveFollow);


//Exportar el Router
export default router;