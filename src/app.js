import express from "express";
import db from "./banco/db.js";
import routes from "./routes/index.js";


db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
   console.log("Conexão realizada com sucesso") 
})

const app = express();

app.use(express.json());




routes(app);

export default app