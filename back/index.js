// Requerir en el módulo index.js el objeto app y ejecutar su método listen, pasando los argumentos correspondientes.
require("dotenv").config();
const app = require("./src/server");
const conDb = require("./src/config/conDB");

conDb()
  .then((res) => {
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error al conectar la BDD");
  });

//-----------------------
//entry point (index.js)= archivo de entrada----debe recibir solicitudes y quedar funcionando
// gracias a listen le indico que tiene que escuchar solicitudes, en este caso a express
