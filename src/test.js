const request = require('supertest')
const app = require('./app')

test('testing Not found endpoint', (done) => {
    request(app)
      .get('/notfound')
      .expect(404)
      .end(function(err, res) {
        if(err){
            done(err)
        }else{
            expect(res.statusCode).toBe(404)
            done()
        }
    })
})
test('testing get Phone name and brand endpoint', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .set('Accept', 'application/json')
      .expect('Content-Type', /html/)
      .end(function(err, res) {
        if(err){
            done(err)
        }else{
            expect(res.statusCode).toBe(200)
            done()
        }
    })
})