const path = require('path');


const notFound = (req,res) =>{
    const file = path.join(path.join(__dirname,'..','..','public','error-pages','404.html'))
    res.status(404).sendFile(file)
}
const serverError = (error, req , res , next) =>{
    console.dir(error)
    res.status(500).sendFile(path.join(__dirname,'..','..','public','error-pages','500.html'))
}

module.exports = {
    notFound,
    serverError
}