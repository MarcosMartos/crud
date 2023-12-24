import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

// Crear nuevo usuario
router.post("/api/users", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "Usuario creado", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
});

// Buscar todos los usuarios
router.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ message: "Usuarios encontrados", users });
  } catch (error) {
    console.log(error);
    console.log("No esta funcionando");
    res.status(500).json({ error: "Error al buscar usuarios" });
  }
});

// Actualizar un usuario
router.put("/api/users/:id", async (req, res) => {
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
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
});

// Eliminar un usuario
router.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "usuario eliminado", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
});

export default router;
