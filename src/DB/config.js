import dotenv from "dotenv";

dotenv.config();

const obj = {
  mongo_uri: process.env.MONGO_URI,
};

export default obj;
