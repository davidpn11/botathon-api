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
      POST /roles/:id { nome }      
    </pre>
    `;
  res.send(help);
});

app.get("/roles", (req, res) => {
  res.send(roles.get());
});

app.post("/roles/:id", bodyParser.json(), (req, res) => {
  let { id } = req.params;
  let { nome } = req.body;

  res.send(roles.add(id, nome));
});

app.get("/roles/:id/participants", (req, res) => {
  let { id } = req.params;
  console.log(roles.getParticipants(id))
  res.send(roles.getParticipants(id));
});

app.listen(config.port, () => {
  console.log("Server listening on port %s, Ctrl+C to stop", config.port);
});