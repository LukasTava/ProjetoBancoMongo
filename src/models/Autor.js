import mongoose from "mongoose";

const autorEsquema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String}
    }
);

const autores = mongoose.model("autores", autorEsquema);

export default autores;