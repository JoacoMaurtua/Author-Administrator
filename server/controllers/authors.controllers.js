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

module.exports = {findAuthors,findSingleAuthor};