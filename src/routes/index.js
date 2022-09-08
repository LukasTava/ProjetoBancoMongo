import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import path from 'path';
import { URL } from 'url';
import { get } from "http";

const router = express.Router();

const __dirname = decodeURI(new URL('.', import.meta.url).pathname)

const routes = (app) => {
    app.use(
        express.json(),
        livros,
        autores
    )

    app.get('/',(req,res) => {
        res.sendFile('src/views/index.html', { root: '.' })
    });

    app.get('/listaLivros', (req, res) =>{
        res.sendFile('src/views/listaLivro.html', {root: '.'})
    })

      
}

export default routes;