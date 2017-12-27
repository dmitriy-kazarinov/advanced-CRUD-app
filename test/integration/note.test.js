const chai = require('chai')
const request = require('supertest')
const app = require('../../app')

const expect = chai.expect

describe('Testing entry point GET /', () => {
  it('Should response with welcome message', done => {
    request(app)
      .get('/')
      .expect(200)
      .expect(response => {
        expect(response.body).to.be.instanceof(Object)
        expect(response.body.message).to.equal('Welcome to the Advanced CRUD application.')
      })
      .end(done)
  })
})

describe('Testing entry point for API GET /api', () => {
  it('Should response with welcome message to the API', done => {
    request(app)
      .get('/api')
      .expect(200)
      .expect(response => {
        expect(response.body).to.be.instanceof(Object)
        expect(response.body.message).to.equal('Welcome to the Notes API!')
      })
      .end(done)
  })
})
