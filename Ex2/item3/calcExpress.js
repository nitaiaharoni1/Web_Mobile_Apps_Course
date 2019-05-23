const express = require('express'),
    app = express(),
    uniqid = require('uniqid');


let sessions = {};

//a.
app.get('/start', function(req, res){
    try{
        let id = uniqid();
        sessions[id] = 0;
        res.status(200).send(id);
    } catch(e){
        res.status(500).send(e);
    }
});

//b.
app.post('/calc/:uniqustring/add/:num', function(req, res){
    try{
        if(sessions[req.params.uniqustring] !== null){
            sessions[req.params.uniqustring] += Number(req.params.num);
            res.status(200).send(sessions[req.params.uniqustring].toString());
        } else{
            res.status(404).send(`Unknown uniqustring: ${req.params.uniqustring}`);
        }
    } catch(e){
        res.status(500).send(e);
    }
});

//c.
app.post('/calc/:uniqustring/sub/:num', function(req, res){
    try{
        if(sessions[req.params.uniqustring] !== null){
            sessions[req.params.uniqustring] -= Number(req.params.num);
            res.status(200).send(sessions[req.params.uniqustring].toString());
        } else{
            res.status(404).send(`Unknown uniqustring: ${req.params.uniqustring}`);
        }
    } catch(e){
        res.status(500).send(e);
    }
});

//d.
app.put('/calc/:uniqustring/multiply/:num', function(req, res){
    try{
        if(sessions[req.params.uniqustring] !== null){
            sessions[req.params.uniqustring] *= Number(req.params.num);
            res.status(200).send(sessions[req.params.uniqustring].toString());
        } else{
            res.status(404).send(`Unknown uniqustring: ${req.params.uniqustring}`);
        }
    } catch(e){
        res.status(500).send(e);
    }
});

//e.
app.put('/calc/:uniqustring/divide/:num', function(req, res){
    try{
        if(sessions[req.params.uniqustring] !== null){
            sessions[req.params.uniqustring] /= Number(req.params.num);
            res.status(200).send(sessions[req.params.uniqustring].toString());
        } else{
            res.status(404).send(`Unknown uniqustring: ${req.params.uniqustring}`);
        }
    } catch(e){
        res.status(500).send(e);
    }
});

//f.
app.get('/calc/:uniqustring/M', function(req, res){
    try{
        if(sessions[req.params.uniqustring] !== null){
            res.status(200).send(sessions[req.params.uniqustring].toString());
        } else{
            res.status(404).send(`Unknown uniqustring: ${req.params.uniqustring}`);
        }
    } catch(e){
        res.status(500).send(e);
    }
});

//g.
app.post('/calc/:uniqustring/reset', function(req, res){
    try{
        if(sessions[req.params.uniqustring] !== null){
            sessions[req.params.uniqustring] = 0;
            res.status(200).send(sessions[req.params.uniqustring].toString());
        } else{
            res.status(404).send(`Unknown uniqustring: ${req.params.uniqustring}`);
        }
    } catch(e){
        res.status(500).send(e);
    }
});

//h.
app.delete('/calc/:uniqustring/del', function(req, res){
    try{
        if(sessions[req.params.uniqustring] !== null){
            delete sessions[req.params.uniqustring];
            res.status(200).send('Session was deleted!');
        } else{
            res.status(404).send(`Unknown uniqustring: ${req.params.uniqustring}`);
        }
    } catch(e){
        res.status(500).send(e);
    }
});

const port = process.env.port || 3100;
app.listen(port, () => {
    console.log("App is listening on port: " + port)
});

module.exports = app;
