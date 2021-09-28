const Author = require('../models/authors.models');

const findAuthors = (req,res) =>{
  Author.find({})
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message: 'Autores no encontrados'})
        res.sendStatus(404)
      })
};

const findSingleAuthor = (req, res) =>{
  Author.findOne({_id:req.params.id})
      .then(results => res.json({data:results}))
      .catch(error => {
        res.json({error:error, message: 'Autor no encontrado'})
        res.sendStatus(404)
      })
};

const createAuthor = (req,res) =>{
  console.log(req.body)
  Author.create(req.body)
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'No se pudo crear un autor'})
        res.sendStatus(500);
      })
}

const updateAuthor = (req,res) =>{
  Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'No se pudo actualizar un autor'})
        res.sendStatus(500);
      })
}

const deleteAuthor =(req,res) =>{
  Author.deleteOne({_id:req.params.id})
      .then(results => res.json({data:results}))
      .catch(error=>{
        res.json({error:error, message:'No se pudo eliminar el autor'})
        res.sendStatus(202);
      }) 
}

module.exports = {findAuthors,findSingleAuthor,createAuthor, updateAuthor, deleteAuthor};