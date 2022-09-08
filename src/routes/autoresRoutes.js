import express from "express";
import AutorController from "../controllers/autoresControllers.js";

const router = express.Router();

router 
    .get('/autores', AutorController.listarAutores)
    .get('/autores/:id', AutorController.listarAutorPorId)
    .post('/addAutor', AutorController.cadastrarAutor)
    .put('/autores/:id', AutorController.atualizarAutor)
    .delete('/autores/:id', AutorController.deletarAutor)

export default router;