const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const roles = require("./roles");

const app = express();
const cors = require("cors");
const config = require("./config");

app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  const help = `
    <pre>
     Botathon API  
      GET /roles      
    </pre>
    `;
  res.send(help);
});

app.get("/roles", (req, res) => {
  res.send(roles.get());
});

app.listen(config.port, () => {
  console.log("Server listening on port %s, Ctrl+C to stop", config.port);
});
