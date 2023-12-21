import mongoose from "mongoose";

const db = mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("Conectado a mongoDB"))
  .catch((err) => console.log(err));

export default db;
