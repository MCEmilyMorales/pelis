//este modulo es para las funciones que establecen la logica de negocio de cada una de las solicitudes
//un controlador en express maneja solicitudes HTTP y ejecuta lógica específica de la aplicación
//para esa ruta GET /users =>
//vamos a ir a la base de datos á pedir la informacion de los usuarios y
//responder al cliente con la informacion obtenida.
const { moviesServices, createMovies } = require("../services/moviesServices");
const catchAsync = require("../utils/catchAsync");

const moviesController = async (req, res) => {
  const movies = await moviesServices(); // ojo, es una funcion que contiene un arreglo de objetos
  res.status(200).json(movies);
};
const creatMovieController = async (req, res) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  const newMovie = await createMovies({
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  });
  res.status(201).json(newMovie);
};
module.exports = {
  moviesController: catchAsync(moviesController),
  creatMovieController: catchAsync(creatMovieController),
};
