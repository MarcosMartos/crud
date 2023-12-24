import express from "express";
import "./DB/configDB.js";
import routes from "./routes/routes.js";
import { __dirname } from "./utils.js";
import bodyParser from "body-parser";
import path from "path";

const app = express();

// configuracion de express
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "public"));
app.use(express.static(path.join(__dirname, "public")));

// rutas

app.use("/", routes);

app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
