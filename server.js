const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")
require('dotenv').config()
const routes = require("./routes")
const glucoseController = require("./controller/glucoseController")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// dont use this in production at all it will allow anyone into our db
// let allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-Control-Allow-Headers', "*");
//   next();
// }

// app.use(allowCrossDomain);
// app.use(routes);

// Define API routes here
app.post('/api/blood_sugar', (req, res) => {
  console.log(req.body)
  glucoseController.create(req.body)
  res.send(req.body)
})

// app.get('/api/blood_sugar', (req, res) => {
//   console.log("get route working")
//   // res.json({
//   //   bloodSugars: [12,13,3]
//   // })
// })

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/blood_sugar", 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
