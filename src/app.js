const express = require('express')
const app = express()



app.set('PORT', process.env.PORT || 3000)
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.listen(app.get('PORT'), () => {
    console.log(`Server on http://localhost${app.get('PORT')}`)
})


module.exports = app
