import mongoose from "mongoose";

const livroEsquema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required:true},
        autor: {type:mongoose.Schema.Types.ObjectId, ref:'autores', required:true},
        editora: {type:String, required:true},
        ISBN: {type:Number}
    }
);

const livros = mongoose.model('livros', livroEsquema);

export default livros;