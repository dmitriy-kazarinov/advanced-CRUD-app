const chai = require('chai')
const request = require('supertest')
const app = require('../../app')

const expect = chai.expect

describe('Testing entry point GET /', () => {
  after(done => {
    done()
  })

  it('Should response with welcome message', done => {
    request(app)
      .get('/')
      .expect(200)
      .expect(response => {
        expect(response.body).to.be.instanceof(Object)
        expect(response.body.message).to.be.a('string', 'Welcome to the Advanced CRUD application.')
      })
      .end(done)
  })
})
