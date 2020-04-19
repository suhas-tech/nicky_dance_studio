const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");
const https = require("https");
var http=require('http');
// const options = {
//   key: fs.readFileSync("key.pem"),
//   cert: fs.readFileSync("cert.pem"),
// };

const app = express();
var cors = require("cors");
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const mongo_uri = "mongodb://localhost/react-auth";
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function (err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

app.use(express.static(path.join(__dirname, "build")));

var server=http.createServer(function(req,res){
  res.end('test');
});

server.on('listening',function(){
  console.log('ok, server is running');
});

server.listen(80);

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// const port = 8001
//       app.listen(port, ()=>{
//           console.log('listening at port 8443')
// });

// https
//   .createServer(options, function (req, res) {
//     console.log("Server started");
//   })
//   .listen(80);
