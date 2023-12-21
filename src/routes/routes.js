import express from "express";
import { User } from "../models/user.model";

const router = express.Router();

// Crear nuevo usuario
router.post("/users", async (res, req) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Buscar todos los usuarios
router.get("/users", async (res, req) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Actualizar un usuario
router.put("/users/:id", async (res, req) => {
  const { id } = req.params;
  const { name, email, password } = res.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Eliminar un usuario

router.delete("users/:id", async (res, req) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
