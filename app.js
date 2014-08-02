"use strict";

// Determine the environment and load the libraries and modules with the configuration

var environment = process.env.NODE_ENV || 'development';
require('dragonnodejs')(require('./configs/' + environment));
