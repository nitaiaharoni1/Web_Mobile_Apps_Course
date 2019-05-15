const assert = require('chai').assert,
    request = require('supertest'),
    app = require('../calcExpress');

describe('calcExpress Test', function(){
    let uniqustring = "";

    it('Start', function(){
        request(app).get('/start').expect(200).then(res => {
            uniqustring = res.text;
        });
    });

    it(`Add`, function(){
        request(app).post(`/calc/${uniqustring}/add/5`).expect(200).then(res => {
            assert(res.text, '5')
        })
    });
});