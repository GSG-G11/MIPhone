const app = require('./app');

app.listen(app.get('PORT'), () => {
    console.log(`Server on http://localhost:${app.get('PORT')}`)
})