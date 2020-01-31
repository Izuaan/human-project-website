const express = require('express')
const cors = require("cors");
const app = express()

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/Error', function (req, res) {
    res.send('Error 404, page not found')
})
app.listen(4967, function () {
    console.log("server has started listening on port 4967");
});
app.get('/api/features', function (req, res) {
    var features = [
        {
            body: "Feature 1",
            author: "Izuaan",
            time: Date.now()
        },
        {
            body: "Feature 2",
            author: "Uzuaan",
            time: Date.now()
        },
        {
            body: "Feature 3",
            author: "Ozuaan",
            time: Date.now()
        }
    ];
    res.send(features);
});