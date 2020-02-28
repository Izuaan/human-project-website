const express = require("express");
const cors = require("cors");
var timeAgo = require("node-time-ago");
const monk = require("monk");
const mailer = require("./utilities/mailer");
const app = express();

app.use(express.json()); // Needed when working with POST requests (body contains JSON data)
app.use(cors()); // to prevent CORS related issues

const db = monk("localhost/humandb");
const dbfeatures = db.get("features");

/*var features = [
  {
    body: "Feature 1",
    author: "Izuaan",
    time: Date.now()
  },
  {
    body: "Feature 2",
    author: "Author 2",
    time: Date.now()
  }
];
*/
app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/api/features", async function(req, res) {
  /*features.every(feature => (feature.time = timeAgo(feature.time)));*/

 let t = timeAgo(1582864756343)
console.log(t);
  let allFeaturesinDB = await dbfeatures.find();
  allFeaturesinDB.every(feature => (feature.time = timeAgo(feature.time)));
  res.send(allFeaturesinDB);
  
});

app.post("/api/features", async function(req, res) {
  var newFeatureToBeAddedToArray = {
    body: req.body.feature,
    author: req.body.name,
    time: Date.now()
  };
  /*features.push(newFeatureToBeAddedToArray);*/

  await dbfeatures.insert(newFeatureToBeAddedToArray);

  var mailOptions = {
      from: "IzuaanAMDT@gmail.com",
      to: "xeff19@gmail.com",
      subject: "Sending Email using Node.js (Human Project Exercise)" ,
      text: "Dear, " + req.body.name + "!"
  };
  let result = await mailer.sendMail(mailOptions);
  console.log(result);


  res.send("Success");
});

app.listen(3000, function() {
  console.log("Server has started listening on Port 3000");
});