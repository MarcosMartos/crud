import mongoose from "mongoose";
import obj from "./config.js";

const db = mongoose
  .connect(obj.mongo_uri)
  .then(() => console.log("Conectado a mongoDB"))
  .catch((err) => console.log(err));

export default db;
