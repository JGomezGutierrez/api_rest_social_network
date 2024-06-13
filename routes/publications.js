//importaciones
import { Router } from "express";
const router = Router();
import { testPublication } from "../controllers/publication.js"

//Definir la ruta .
router.get('/test-publication', testPublication);

//Exportar el Router
export default router;