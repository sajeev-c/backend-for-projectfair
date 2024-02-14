  // node + mongodb collection

  const mongoose = require('mongoose')

  const connectionString = process.env.DATABASE

  mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb connection established");
  })
  .catch(err=>{
    console.log("mongodb connection error"+err.message);
  })