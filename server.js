const express = require("express");
const upload = require("express-fileupload");

const app = express();

app.use(upload());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  if (req.files) {
    console.log(req.files);
    // to onoma file to exo dosei sthn html  sto input
    let file = req.files.file;
    //extract the file
    let filename = file.name;
    console.log(filename);
  }
});

const port = 5050;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
