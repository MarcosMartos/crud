import express from "express";
import db from "./DB/configDB";
import routes from "./routes/routes.js";

const app = express();

// configuracion de express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// rutas

app.get("/", routes);

app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
