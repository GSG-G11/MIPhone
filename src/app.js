const express = require('express')
const app = express()

const { notFound, serverError } = require('./controllers/error');


app.set('PORT', process.env.PORT || 3000)
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api', require('./controllers/search'))
app.use(notFound)
app.use(serverError)

app.listen(app.get('PORT'), () => {
    console.log(`Server on http://localhost:${app.get('PORT')}`)
})


