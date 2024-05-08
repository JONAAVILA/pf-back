const { Router } = require("express");
const { clientesDetailHandler, clientesHandler } = require("../handlers/clientesiesHandlers");

const clientesRouter = Router();


clientesRouter.get("/", clientesHandler);

clientesRouter.get("/:id", clientesDetailHandler);

module.exports = clientesRouter;