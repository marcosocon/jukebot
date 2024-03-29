const express = require('express');
var bodyParser = require('body-parser')
const { exec } = require('child_process');
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
  var song = req.body.text;  

  // TODO: si es play solo que haga play, si tiene texto despues que busque ese texto de despues osea /jkb play easy lover, manda spotify play easy lover :)
  if(req.body.text === 'play') {
    exec('spotify play');
  } else {
    exec('spotify ' + song);
  }
  // esto queda igual, el stop se mantiene
  if(req.body.text === 'stop') {
    exec('spotify stop');
  }

   if(req.body.text !== 'play' || req.body.text !== 'stop') {
     exec('spotify ' + song);
   }
  // TODO: envia un mensaje para que aparezca :)
  res.send('gracias por usar jukebox :3');
});


