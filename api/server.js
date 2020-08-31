const express = require('express');
const server = express();
const carsRouter = require('../cars/cars-router');

server.use(express.json());
server.use('/cars', carsRouter);

server.get('/', (req, res) => {
    res.status(200).json({ endpoints: '/' })
});

module.exports = server;