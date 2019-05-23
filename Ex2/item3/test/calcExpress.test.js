const assert = require('chai').assert,
    request = require('supertest'),
    parallel = require('mocha.parallel'),
    app = require('../calcExpress');

parallel('calcExpress Test', function(){
    let req = request(app);

    it('User1', async function(){
        let res = await req.get('/start').expect(200);
        let uniqustring = res.text;

        res = await request(app).post(`/calc/${uniqustring}/add/5`).expect(200);
        assert(res.text, '5')

        res = await request(app).post(`/calc/${uniqustring}/sub/10`).expect(200)
        assert(res.text, '-5')
    });

    it('User2', async function(){
        let res = await req.get('/start').expect(200);
        let uniqustring = res.text;

        res = await request(app).post(`/calc/${uniqustring}/add/100`).expect(200);
        assert(res.text, '100');

        res = await request(app).post(`/calc/${uniqustring}/sub/50`).expect(200);
        assert(res.text, '50');
    });

});