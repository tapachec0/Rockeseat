const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const routes = express.Router();

const BoxControlller = require("./controllers/BoxController");
const FileControlller = require("./controllers/FileController");


/*criando uma rota.*/
routes.get('/teste', (req, res)=>{
    return res.send('Hello READY');
});

// GET/ POST(CRIAR ALGO)/ PUT(EDITAR)/ DELETE

routes.post("/boxes", BoxControlller.store);
routes.get("/boxes/:id", BoxControlller.show);

routes.post(
    "/boxes/:id/files",
    multer(multerConfig).single("file"),
    FileControlller.store
);


module.exports = routes;