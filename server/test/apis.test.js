// import { jest } from '@jest/globals'
const request = require('supertest');  // Library for making HTTP requests
const express = require('express');

const app = express();

// jest.setTimeout(100000)

describe('GET /get-expense', () => {
  test('should return a list of users', async () => {
    const response = await request(app)  // Replace 'app' with your Express app instance
      .get('/api/get-expense');

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('GET /get-earning', () => {
    test('should return a list of users', async () => {
      const response = await request(app)  // Replace 'app' with your Express app instance
        .get('/api/get-earning');
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });
  describe('GET /get-balance', () => {
    test('should return a list of users', async () => {
      const response = await request(app)  // Replace 'app' with your Express app instance
        .get('/api/get-balance');
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe('POST /add-expense', function() {
    it('responds with json', function(done) {
        const body = {
            title:"Test",
            amount:123
        }
      request(app)
        .post('/api/add-expense')
        .send(body)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });

  describe('POST /add-earning', function() {
    it('responds with json', function(done) {
        const body = {
            title:"Test",
            amount:123
        }
      request(app)
        .post('/api/add-earning')
        .send(body)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });

  describe('POST /edit-expense', function() {
    it('responds with json', function(done) {
        const body = {
            id:2,
            title:"Test",
            amount:123
        }
      request(app)
        .post('/api/edit-expense')
        .send(body)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });

  
  describe('POST /edit-earning', function() {
    it('responds with json', function(done) {
        const body = {
            id:2,
            title:"Test",
            amount:123
        }
      request(app)
        .post('/api/edit-earning')
        .send(body)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });

  describe('GET /delete-earning', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/api/delete-earning/2')
        .send()
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });

  describe('GET /delete-expense', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/api/delete-expense/2')
        .send()
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });