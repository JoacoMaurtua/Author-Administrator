const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Conexion con mongoDB
const mongodb = require('./config/mongodb.config');
mongodb();


//Rutas
app.use('/api',require('./routes/authors.routes'));




app.listen(PORT,()=>{
  console.log(`1: Servidor corriendo en el puerto ${PORT}`)
})