const express = require("express"); //requerir express
const router = require("./routes/testRoutes");
const morgan = require("morgan");
const cors = require("cors");

const app = express(); //por conveción se llama app o server

//aca quiero usar el middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(router); //mi enrutador y app tienen que conocerse
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

module.exports = app;
