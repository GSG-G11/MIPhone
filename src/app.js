const express = require('express')
const app = express()
const {search, notFound, serverError} = require('./route')

app.set('PORT', process.env.PORT || 8080)
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api',search)
app.use(notFound)
app.use(serverError)


module.exports = app


