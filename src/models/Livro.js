import mongoose from "mongoose";

const livroEsquema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required:true},
        autor: {type: String, required:true},
        editora: {type:String, required:true},
        ISBN: {type:String, required:true},
        lido: {type: Boolean},
    }
);

const livros = mongoose.model('livros', livroEsquema);

export default livros;