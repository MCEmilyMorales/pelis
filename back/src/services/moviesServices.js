const { Error } = require("mongoose");
const Movie = require("../models/Movie"); //AHORA TENEMOS UNA BASE DE DATOS REALES CON UNA BASE DE DATO REAL.

module.exports = {
  moviesServices: async () => {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      throw Error(error.message);
    }
  },
  createMovies: async (movie) => {
    try {
      const newMovie = await Movie.create(movie);
      return newMovie;
    } catch (error) {
      console.log("OCURRIO UN ERROR");
      throw Error(error.message);
    }
  },
};

// module.exports = {
//   moviesServices: async () => {
//     const movies = await Movie.find(); // modelo y find es un metodo que dice traeme/encontra todos los datos del modelo
//     return movies;
//   },
//   createMovies: async (movie) => {
//     const newMovie = await Movie.create(movie);
//     return newMovie;
//   },
// };

// aca voy a tener una funcion:
// esta función se comunica con la base de datos para pedir la información de los usuarios.
// respondera con lo que necesito => id, nombre,nombre de usuario,  email, fecha de alt, fecha de modificación, domicilio, teléfono
// y lo va a recibir el controlador
