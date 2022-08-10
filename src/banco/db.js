import mongoose from "mongoose";

mongoose.connect("mongodb+srv://lukas:wm2MCRrmmruULLt5@cluster0.d5xci.mongodb.net/livraria");

let db = mongoose.connection;

export default db;