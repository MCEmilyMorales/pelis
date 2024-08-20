const { Router } = require("express");
const {
  moviesController,
  creatMovieController,
} = require("../controllers/moviesController");
const validateId = require("../middlewares/validateId");

const router = Router();

router.get("/movies", moviesController);
router.post("/movies", creatMovieController);

module.exports = router;

// las rutas a travez de las cuales nos podemos comunicar-
// tengo definada la solicitud  a GET / users => controlador lo define
// se debe crear un enrutador

// const router = Router();

// router.get("/", testController); //1) el controlador con el que trabajamos, 2)tipo de solicitud, donde??, 3)darle a la ruta un controlador(define la logica)
// //router.post("/crear", testController.crear);
// module.exports = router;
