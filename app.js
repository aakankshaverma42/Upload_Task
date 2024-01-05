const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

const port = 5000;

const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/stats", upload.array("files"), uploadFiles);

function uploadFiles(req, res) {
  console.log(req.body);
  console.log(req.files);
  res.json({ message: "Successfully uploaded files" });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
