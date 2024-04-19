const express = require("express");
const app = express();

app.get("/api/usuarios", (req, res) => {
  res.json([
    { id: 1, nombre: "Usuario 1" },
    { id: 2, nombre: "Usuario 2" },
    { id: 3, nombre: "Usuario 3" },
  ]);
});

const port = 3050;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

module.exports = app; // Exportamos app para poder usarlo en las pruebas
