const { Router } = require("express");
const { getAbogadosHandler, postAbogadosHandler } = require("../handlers/abogadosHandlers");

const abogadosRouter = Router();

abogadosRouter.get("/", getAbogadosHandler);

abogadosRouter.post("/", postAbogadosHandler);

module.exports = abogadosRouter;