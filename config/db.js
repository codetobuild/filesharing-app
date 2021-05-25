
require('dotenv').config() 
const mongoose = require('mongoose')



function connectDB()
{//Database connection
    mongoose.connect( process.env.MONGODB_CONNECTION_URL , {useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex:true})

    const connection = mongoose.connection;
    connection.once( 'open', () =>{
        console.log('Database connected')
    }).catch( err =>{
        console.log('Connection error', err)
    })

}




module.exports = connectDB









