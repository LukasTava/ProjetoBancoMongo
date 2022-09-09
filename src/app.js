import express, { application } from "express";
import db from "./banco/db.js";
import routes from "./routes/index.js";  
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const exphbs  = require('express-handlebars');
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const bodyParser = require('body-parser')
const ejs = require('ejs')
import livros from "./models/Livro.js";

const __dirname = path.dirname(__filename);

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
   console.log("Conexão realizada com sucesso") 
})

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', function(req, res){
   livros.find({}, function(err, livro){
      res.render('index.ejs', {
         listaLivros: livro
      })
   })
})

app.get('/livro/:id', function(req, res){
   livros.findById({}, function(err, livro){
      res.render('edit.ejs', {
         livro:livro
      })
   })
})

app.get('/CadastraLivro', function(req, res){
      res.render('form.ejs')
})


routes(app);

export default app