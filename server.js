const express = require('express');
const ejs = require('ejs');
const path = require('path');
let app = express();
let pokemon = require('./models/pokemon.js');

const port = 3000;

app.use(express.static(path.join(__dirname, `public`)));

app.set('view engine', 'ejs');

app.get('/pokemon', (request, response) => {
	response.send(pokemon);
});

app.listen(port);