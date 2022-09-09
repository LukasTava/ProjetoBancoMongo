import mongoose from "mongoose";
import { createRequire } from "module";
import { get } from "http";
const require = createRequire(import.meta.url);
var redisClient = require('redis').createClient;
var redis = redisClient(6379, 'localhost');



mongoose.connect("mongodb+srv://lukas:wm2MCRrmmruULLt5@cluster0.d5xci.mongodb.net/livraria");

let db = mongoose.connection;


export default db;
