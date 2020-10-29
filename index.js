const express = require('express')
const hbs = require('hbs')
const path = require('path')
const down = require('./utils/download')
const bodyParser = require("body-parser")


const app = express()
const port = process.env.PORT || 3000

const mainPage = path.join(__dirname,'./utils')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use(express.urlencoded());
app.use(express.static(mainPage))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + './utils/index.html'))
})

app.post('/',(req,res)=>{
    down(req.body.url)
})

app.listen(port,()=>{
    console.log("Server running on port: " + port)
})

app.post('/dem',(req,res)=>{
    res.send("hello")
})