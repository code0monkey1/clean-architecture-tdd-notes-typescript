import express from 'express';

// create express sever
const server = express()

// use middleware to read  request body
server.use(express.json())

export default server;