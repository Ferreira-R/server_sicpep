import express from "express";
const router = express.Router();

import Evento from "../models/evento";

// Agregar un evento
router.post("/nuevo-evento", async (req, res) => {
  const body = req.body;
  console.log(req);
  try {
    const eventoDB = await Evento.create(body);
    res.status(200).json(eventoDB);
  } catch (err) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      err,
    });
  }
});

// Get con parámetros
router.get("/evento/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const eventoDB = await Nota.findOne({ _id });
    res.json(eventoDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/evento", async (req, res) => {
  try {
    const eventoDB = await Nota.find();
    res.json(eventoDB);
  } catch (error) {
    return res.status(400).json({ mensaje: "Ocurrio un error", error });
  }
});

// Exportamos la configuración de express app
module.exports = router;
