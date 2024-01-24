require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors");
const path=require('path');

const server = express();
const productRouter = require("./routes/product");

console.log("env", process.env.DB_PASSWORD);

// DB connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


server.use(cors());
// Middleware to use (req.body) bodyParser
server.use(express.json());
// server.use(express.urlencoded());
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));

// MVC (Model-View-Controller)
server.use("/products", productRouter.router);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'));
})

// MVC (Model-View-Controller)

server.listen(process.env.PORT, () => {
  console.log("server started");
});
