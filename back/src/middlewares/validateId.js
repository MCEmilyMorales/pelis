const mongoose = require("mongoose");

const validateId = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;

  const isValidTitle = mongoose.Types.ObjectId.isValid(title);
  const isValidYear = mongoose.Types.ObjectId.isValid(year);
  const isValidDirector = mongoose.Types.ObjectId.isValid(director);
  const isValidDuration = mongoose.Types.ObjectId.isValid(duration);
  const isValidGenre = mongoose.Types.ObjectId.isValid(genre);
  const isValidRate = mongoose.Types.ObjectId.isValid(rate);
  const isValidPoster = mongoose.Types.ObjectId.isValid(poster);

  if (
    isValidTitle &&
    isValidYear &&
    isValidDirector &&
    isValidDuration &&
    isValidGenre &&
    isValidRate &&
    isValidPoster
  ) {
    next();
  } else {
    next({ message: "Inválido", statusCode: 400 });
  }
};

module.exports = validateId;
