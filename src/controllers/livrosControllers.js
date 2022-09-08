import livros from "../models/Livro.js";
import exports from "express"
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import db from "../banco/db"
import redis from "../banco/db"

class LivroController {

  static listarLivros = (req, res) => {
    livros.find()
      .populate('autor')
      .exec((err, livros) => {
      res.status(200).json(livros)
    })
  }

  static listarLivroPorId = (req, res) => {
    const id = req.params.id;
    livros.findById(id, (err, livros) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
      } else {
        access.buscarLivroCache(db, redis, req.param('id'), function (Livro) {
          if (!text) res.status(500).send("Erro Servidor");
          else res.status(200).send(livros);
        })
    }}
  }
  
  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);

    livro.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
      } else {
        res.status(201).send(livro.toJSON())
      }
    })
  }

  static atualizarLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Livro atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static deletarLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Livro removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  } 
}

module.exports.buscarLivroCache = function (db, redis, Livro, callback) {
  redis.get(Livro, function (err, reply) {
      if (err) callback(null);
      else if (reply) 
      callback(JSON.parse(reply));
      else {
          db.collection('titulo').findOne({
              Livro: livros
          }, function (err, doc) {
              if (err || !doc) callback(null);
              else {
                  redis.set(title, JSON.stringify(doc), function () {
                      callback(doc);
                  });
              }
          });
      }
  });
};

export default LivroController;