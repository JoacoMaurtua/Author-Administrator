const mongoose = require('mongoose');

const dataBase = process.env.DB;

const connectDB = async() =>{
  try{
    await mongoose.connect(dataBase,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`2: Estableciendo conexion con la BD`);

  }catch(err){
    console.error(err);
  }
};

module.exports = connectDB;
