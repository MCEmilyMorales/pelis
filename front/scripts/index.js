const crearTarjetas = require("./crearTarjetas");
const axios = require("axios");

const buscarPelicula = async () => {
  const promesa = await axios.get("http://localhost:3000/movies");
  try {
    crearTarjetas(promesa.data);
  } catch (error) {
    alert("Nuestras disculpas, el servidor se encuentra en mantenimiento.");
    throw Error(error.message);
  }
};
buscarPelicula();
