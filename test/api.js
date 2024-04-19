// api.js
const axios = require("axios");

async function consultarApi() {
  try {
    const response = await axios.get("https://api.example.com/data");
    return response.data;
  } catch (error) {
    console.error("Error al consultar la API:", error);
    throw error;
  }
}

module.exports = { consultarApi };
