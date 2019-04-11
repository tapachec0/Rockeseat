const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require("./controllers/BoxController");
const FileController = require("./controllers/FileController");


/*criando uma rota.*/
routes.get('/teste', (req, res)=>{
    return res.send('Hello READY');
});

// GET/ POST(CRIAR ALGO)/ PUT(EDITAR)/ DELETE

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

routes.post(
    "/boxes/:id/files",
    multer(multerConfig).single("file"),
    FileController.store
);


module.exports = routes;