const  notFound  = require('./controllers/error');
const  serverError = require('./controllers/internal-server');
const search = require('./controllers/search');

module.exports = {
    search,
    notFound,
    serverError
}