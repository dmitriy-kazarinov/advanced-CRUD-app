const chai = require('chai')
const request = require('supertest')
const app = require('../../app')

const expect = chai.expect

describe('Testing note routes', () => {
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

  describe('Testing entry point GET /api', () => {
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

  describe('Testing notes list GET /api/notes', () => {
    it('Should response with notes list data', done => {
      request(app)
        .get('/api/notes')
        .expect(200)
        .expect(response => {
          console.log(response)
          expect(response.body).to.be.instanceof(Array)
        })
        .end(done)
    })
  })
})
