const { expect } = require('@jest/globals');
const request = require('supertest');
const app = require('../app.js');


describe('Server Response', () => {
    it('GET --> 200', () => {
        return request(app).get('/')
            .expect(200)
            // .then((response) => {
            //     expect(response.body.status).toEqual("Success")
            // })
    })
})