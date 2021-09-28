const express = require('express');

const router = express();

const {findAuthors,findSingleAuthor,createAuthor, updateAuthor, deleteAuthor} = require('../controllers/authors.controllers');


router.get('/authors',findAuthors);

router.get('/authors/:id',findSingleAuthor);

router.post('/authors/create',createAuthor);

router.put('/authors/update/:id',updateAuthor);

router.delete('/authors/delete/:id',deleteAuthor);

module.exports = router;