const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;

const server = express();
server.use( bodyParser.json() );
server.use( cors() );

// Routes
const socialBaseUrl = '/api/v1/social';
const SocialRoutes = require('./routes/SocialRoutes');

server.get('/', ( request, response ) => {
    response.send({ message: `Express Server for Social Express App`})
});

server.use( socialBaseUrl , SocialRoutes );

server.listen( PORT, () => {
    console.log(`Server actively running on port ${PORT}`);
});