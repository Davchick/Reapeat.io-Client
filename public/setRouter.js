import path from "path";
import express from "express";

const app = express();
const __dirname = path.resolve();

app.use(express.static(__dirname));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

console.log(__dirname);