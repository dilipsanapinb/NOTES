const express = require("express");
const { rate } = require("./middlewares/rate");
const fs = require("fs");
fs.readFileSync("./doc.json", "utf-8", (err, data) => {
    if (err) {
        console.log(errr);
    } else {
        console.log(data);
    }
})
const app = express();

app.get('/api/getdata',rate(10,60*1000,60*1000), (req,res) => {
    res.status(200).send({"Message":"Get a Data "})
})

app.listen(8000, () => {
    console.log(`server is listening to port 8000`);
})