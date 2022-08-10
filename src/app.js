import express from "express";
import db from "./banco/db.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
   console.log("Conexão realizada com sucesso") 
})

const app = express();

app.use(express.json());

routes(app);

app.get('/livros', (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros)
    })
    
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('O livro foi cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) =>{
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete('/livros/:id', (req, res) =>{
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
})


function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}


export default app