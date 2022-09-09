import express from "express";
import LivroController from "../controllers/livrosControllers.js";

const router = express.Router();

router 
    .get('/listarLivros', LivroController.listarLivros)
    .get('/livro/:id', LivroController.listarLivroPorId)
    .post('/addLivro', LivroController.cadastrarLivro)
    .put('/atualizarLivro/:id', LivroController.atualizarLivro)
    .delete('/deleteLivro/:id', LivroController.deletarLivro)

export default router;