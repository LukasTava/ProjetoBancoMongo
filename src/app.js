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

const __dirname = path.dirname(__filename);

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
   console.log("Conexão realizada com sucesso") 
})

const app = express();

app.use(express.json());

app.set('view engine', '.hbs');

app.use(express.static('public'));

app.set('views' , path.join(__dirname , 'views'));

app.engine('.hbs', exphbs.engine({
   defaultLayout: 'main',
   layoutsDir: path.join(app.get('views'),'layouts'),
   partialsDir: path.join(app.get('views'),'partials'),
   extname: '.hbs'
}));


app.get('/', function(req, res){
   res.render('index')
})



routes(app);

export default app