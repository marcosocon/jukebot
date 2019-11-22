const express = require('express');
var bodyParser = require('body-parser')
const { spawn } = require('child_process');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(8000, () => {
    console.log('server corriendo en local pero en este puerto 8000');
});

app.get('/', (req, res) => {
    res.send('HOLA URA cambie');
});

app.post('/', (req, res) => {
    console.log('request coming', req.body);

    if(req.body.text === 'play') {
        const { exec } = require('child_process');
        const child = exec('spotify play');
        
        // use child.stdout.setEncoding('utf8'); if you want text chunks
        child.stdout.on('data', (chunk) => {
          // data from standard output is here as buffers
        });
        
        // since these are streams, you can pipe them elsewhere
        
        child.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
        });
    }
    if(req.body.text === 'stop') {
        const { exec } = require('child_process');
        const child = exec('spotify stop');
        
        // use child.stdout.setEncoding('utf8'); if you want text chunks
        child.stdout.on('data', (chunk) => {
          // data from standard output is here as buffers
        });
        
        child.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
        });
    }

    res.send('null');
});


