const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")
require('dotenv').config()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// if (process.env.NODE_ENV === 'develop') {
//   console.log("this is going twice")
//   let allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Headers', "*");
//     next();
//   }
//   app.use(allowCrossDomain);
// }

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}


app.use(allowCrossDomain);

console.log("cosole is logging")

// Define API routes here
app.post('/api/bloodsugar', (req, res) => {
  console.log('request succeded')
  console.log(req.body)
  console.log(req.body.bloodSugar)
  res.json(req.body)
})


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "local/", 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
