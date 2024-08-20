const axios = require("axios");
const clearInputs = require("./clearInputs");

clearInputs();

const sendForm = async () => {
  const title = document.getElementById("title");
  const year = document.getElementById("year");
  const director = document.getElementById("director");
  const duration = document.getElementById("duration");
  const genre = document.getElementById("genre");
  const rate = document.getElementById("rate");
  const poster = document.getElementById("poster");

  const movie = {
    title: title.value,
    year: year.value,
    director: director.value,
    duration: duration.value,
    genre: genre.value,
    rate: rate.value,
    poster: poster.value,
  };
  try {
    const promesaPost = await axios.post("http://localhost:3000/movies", movie);
    promesaPost.data;
    alert("¡Formulario enviado correctamente!");
  } catch (error) {
    alert("Por favor, complete todos los datos.");
    throw Error(message("te falta algoooooo!!!!"));
  }
};
const buttonEnviar = document.getElementById("buttonEnviar");
buttonEnviar.addEventListener("click", sendForm);
