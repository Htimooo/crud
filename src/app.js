const express = require('express')
const config = require('./config');
const morgan = require('morgan')

const platos = require('./modulos/platos/rutas');
const error = require('./red/errors');

const app = express();

// configuracion
app.set('port', config.app.port);

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//rutas
app.use('/api/platos', platos);
app.use(error)

module.exports = app; 