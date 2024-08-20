const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  //crear un esquema para describir los datos con lo que vamos a trabajar-le pasamos un objeto y el valor es el tipo de dato con el que vamos a trabajar.
  title: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: Number,
    required: true,
    unique: true,
  },
  director: {
    type: String,
    required: true,
    unique: true,
  },

  duration: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: Array,
    required: true,
    unique: true,
  },

  rate: {
    type: Number,
    required: true,
    unique: true,
  },
  poster: {
    type: String,
    required: true,
    unique: true,
  },
});
const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
