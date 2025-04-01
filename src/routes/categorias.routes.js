import {Router} from "express";
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";
/* Creamos el enrutador */
const router = Router();

/* configuramos respuesta metodo http GET */
router.get("/", categoriaController.getCategorias)


/* Hacemos disponible el router en toda la app */
export default router;