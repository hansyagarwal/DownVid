const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

const mainPage = path.join(__dirname,'/utils')
const viewsPath = path.join(__dirname,'/utils/views')
const partialsPath = path.join(__dirname,'/utils/partials')

app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.urlencoded())
app.use(express.static(mainPage))

app.get('',(req,res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log("Server running on port: " + port)
})