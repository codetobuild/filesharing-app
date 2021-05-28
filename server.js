

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000


const connectDB = require('./config/db')
connectDB()
const postRoute = require('./routes/files')
const showRoute= require('./public/show')
const downloadRoute = require('./routes/download')

const path = require('path')
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '/views'))
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(express.json());

app.use( '/api/files', postRoute)
 
app.use('/files', showRoute)

app.use('/files/download', downloadRoute)

const cors = require('cors');
const corsOptions ={
    origin:'https://filesharing-nokha.herokuapp.com', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));





app.listen( PORT, ()=>{
    console.log( `port created at ${PORT}` )
})




















