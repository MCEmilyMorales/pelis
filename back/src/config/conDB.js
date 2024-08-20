require("dotenv").config();

const { config } = require("dotenv"); //ojo ver si debe existir aqui!!!
const mongoose = require("mongoose");

const conDb = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};
module.exports = conDb;

// este modulo es para hacer la conexion a la base de datos en una FUNCION
// exportar esta funcion

// aca hacemos la conexion a la BDD con la URL que nos da MongoDB
// URL (conectarse a mogoose con node.js)

