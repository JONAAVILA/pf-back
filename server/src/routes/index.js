const { Router } = require("express");
const clientesRouter = require("./clientesRoutes");
const abogadosRouter = require("./abogadosRoutes");

const router = Router();

router.use("/clientes", clientesRouter)

router.use("/abogados", abogadosRouter);


module.exports = router;
