// userService.js

// Simulación de una función asíncrona que obtiene información de un usuario de una base de datos
async function getUser(userId) {
  // Simular una espera de 1 segundo para obtener los datos del usuario
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Supongamos que aquí tendrías la lógica para consultar la base de datos y obtener el usuario con el ID proporcionado
  // En este ejemplo, simplemente devolvemos un objeto de usuario ficticio
  return {
    id: userId,
    name: "John Doe",
    email: "john@example.com",
  };
}

module.exports = { getUser };
