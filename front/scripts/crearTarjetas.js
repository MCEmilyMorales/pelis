const crearTarjetas = (data) => {
  const tarjetasDePelis = document.getElementById("tarjetasDePelis");
  data.map((pelicula) => {
    const tarjetaPeli = document.createElement("div");
    tarjetaPeli.classList.add("tarjetaPeli");

    const title = document.createElement("a");
    title.classList.add("title");
    title.innerText = `${pelicula.title}`;

    const year = document.createElement("p");
    year.classList.add("year");
    year.innerText = `Year: ${pelicula.year}`;

    const director = document.createElement("p");
    director.classList.add("director");
    director.innerText = `Address: ${pelicula.director}`;

    const duration = document.createElement("p");
    duration.classList.add("duration");
    duration.innerText = `Duration:${pelicula.duration}`;

    const genre = document.createElement("p");
    genre.classList.add("genre");
    genre.innerText = `Gender: ${pelicula.genre}`;

    const rate = document.createElement("p");
    rate.classList.add("rate");
    rate.innerText = `User Rating: ${pelicula.rate}`;

    const poster = document.createElement("img");
    poster.classList.add("poster");
    poster.src = pelicula.poster;

    tarjetaPeli.append(title, year, director, duration, genre, rate, poster);

    tarjetasDePelis.appendChild(tarjetaPeli);
  });
};
module.exports = crearTarjetas;
