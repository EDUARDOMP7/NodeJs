function calcularPromedio(numeros) {
  const suma = numeros.reduce((total, num) => total + num, 0);
  return suma / numeros.length;
}

module.exports = calcularPromedio;
