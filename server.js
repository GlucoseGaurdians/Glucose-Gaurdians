const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")
require('dotenv').config()
const routes = require("./routes")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.get("/service-worker.js", (req, res) => {
  console.log("this path triggered")
  res.sendFile(path.resolve(__dirname, "public", "/service-worker.js"));
});
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  console.log("the wrong path triggered")
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

mongoose.connect(process.env.MONGODB_URI , 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// || "mongodb://localhost/blood_sugar"