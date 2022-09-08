import mongoose from "mongoose";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const redisClient = require('redis').createClient;
const redis = redisClient(6379, 'localhost');

redis.on("connect", () => {
    console.log('connected to Redis');
});

mongoose.connect("mongodb+srv://lukas:wm2MCRrmmruULLt5@cluster0.d5xci.mongodb.net/livraria");

let db = mongoose.connection;


export default db;
