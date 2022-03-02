const path = require('path');


const notFound = (req,res) =>{
    const file = path.join(path.join(__dirname,'..','..','public','error-pages','404.html'))
    res.status(404).sendFile(file)
}


module.exports = notFound;