const express = require('express')
const hbs = require('hbs')
const path = require('path')
const down = require('./utils/download')

const app = express()
const port = process.env.PORT || 3000

const mainPage = path.join(__dirname,'./utils')

app.use(express.urlencoded());
app.use(express.static(mainPage))

app.get('',(req,res)=>{
    res.sendFile(path.join(__dirname + './utils/index.html'))
})

app.post('/download',(req,res)=>{
    res.render('index') 
    down(req.body)
})

app.listen(port,()=>{
    console.log("Server running on port: " + port)
})