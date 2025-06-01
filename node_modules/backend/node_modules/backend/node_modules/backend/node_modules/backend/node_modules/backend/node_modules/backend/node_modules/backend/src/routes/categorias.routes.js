import {Router} from "express";
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";
/* Creamos el enrutador */
const router = Router();

/* configuramos respuesta metodo http GET */
router.get("/", categoriaController.getCategorias); /* read */
router.post("/", categoriaController.postCategorias); /* create */
/* Ruta que recibe parametro */
router.get("/:id", categoriaController.getCategory); /* read */

/* Ruta que recibe parametro id categoria a borrar*/
router.delete("/:id", categoriaController.deleteCategory); /* delete */

/* Ruta que recibe como parametro tanto el cuerpo del id a actualizar */
router.put("/:id", categoriaController.updateCategorias); /* uodate */


/* Hacemos disponible el router en toda la app */
export default router;