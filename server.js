import express from "express";
import EmpleadoRouter from "./src/router/empleado.router.js";

//inicializamos express
const server = express();

//servidor permite recibir e interpretar express a cualquier peticion que se le haga por JSON
server.use(express.json());

//especifico una ruta y que implemente un router
server.use("/api/empleado", EmpleadoRouter);

//catch-all for error 404
server.use((req, res, next) => {
	res.status(404).send("No está disponible este endpoint: " + req.url);
});

export default server;
