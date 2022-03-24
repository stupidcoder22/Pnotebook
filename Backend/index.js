const express = require("express");
const app = express();
const connect = require("./db");

connect();
var cors = require("cors");
app.use(cors());
app.use(express.json());
// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(1000);
