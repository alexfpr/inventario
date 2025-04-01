/* Importamos al framework express */
import express from "express"; 
import categoriaRoutes from "./routes/categorias.routes.js"

/* asignamos a la app toda la funcionalidad para mi server web */
const app = express();

/* setear un puerto a mi web server  */

app.set("port", 5000)

/* Routes */
app.use("/api/categorias", categoriaRoutes)

/* hacemos disponible a mi server app para todaaa la aplicacion */
export default app; 

