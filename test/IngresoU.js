const express = require("express");
const app = express();
app.use(express.json());

let usuarios = [];

app.post("/api/usuarios", (req, res) => {
  const nuevoUsuario = req.body;
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

module.exports = app;
