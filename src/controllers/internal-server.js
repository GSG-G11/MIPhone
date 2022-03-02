const path = require('path');

const serverError = (error, req , res , next) =>{
    console.dir(error)
    res.status(500).sendFile(path.join(__dirname,'..','..','public','error-pages','500.html'))
}

module.exports = serverError;