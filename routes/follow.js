//importaciones
import { Router } from "express";
const router = Router();
import { followers, following, saveFollow, testFollow, unfollow } from "../controllers/follow.js"
import { ensureAuth } from "../middlewares/authentication.js";

//Definir la ruta .
router.get('/test-follow', testFollow);
router.post("/follow", ensureAuth, saveFollow);
router.delete("/unfollow/:id", ensureAuth, unfollow);
router.get("/following/:id?/:page?", ensureAuth, following);
router.get("/followers/:id?/:page?", ensureAuth, followers);


//Exportar el Router
export default router;