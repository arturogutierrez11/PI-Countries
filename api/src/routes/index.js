const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const activity = require("./activity");
const country = require("./country");


const router = Router();

router.use("/countries", country);
router.use("/activity", activity);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
