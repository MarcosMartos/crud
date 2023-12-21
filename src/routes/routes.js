import express from "express";
import { User } from "../models/user.model.js";

const router = express.Router();

// Crear nuevo usuario
router.post("/users", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "Usuario creado" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Buscar todos los usuarios
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ message: "Usuarios encontrados", users });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Actualizar un usuario
router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );
    res.status(200).json({ message: "Usuario actualizado", user });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// Eliminar un usuario
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "usuario eliminado", user });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;
