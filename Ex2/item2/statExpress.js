const express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(__dirname, 'view')))
app.use(express.static(path.join(__dirname, 'src')))

app.get('/main.html', function(req, res){
    res.sendFile(__dirname + '/view/wall.html');
});

app.get('/README.html', function(req, res){
    res.sendFile(__dirname + '/view/README.html');
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App is listening on port: " + port)
});
