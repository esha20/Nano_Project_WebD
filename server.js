const express = require ('express')
const app= express()        // for new application 

const path = require ('path')

app.use('/static' , express.static('public'))

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"./home.html"))
    // res.sendFile(path.join(__dirname,"/about.html"))

})

// app.get('/')

app.listen(3000);     //default port for http