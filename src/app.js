/* Importamos al framework express */
import express from "express"; 
import cors from "cors";
import categoriaRoutes from "./routes/categorias.routes.js";


/* asignamos a la app toda la funcionalidad para mi server web */
const app = express();

/* setear un puerto a mi web server  */

app.set("port", 5000);

/* Middleware */
app.use(express.json());

app.use(cors());    
/* Routes */
app.use("/api/categorias", categoriaRoutes)

app.get('/', (req, res)=>{
    res.send('REST API EN RENDER WITHOUT DATABASE ENDPOINTS')

})

/* hacemos disponible a mi server app para todaaa la aplicacion */
export default app; 

