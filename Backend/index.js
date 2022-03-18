const express = require("express");
const app = express();
const connect = require("./db");

connect();
app.use(express.json());
// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(1000);
