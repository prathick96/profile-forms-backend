require("./dbconfig/dbconfig");
const express = require("express");
const bodyParser = require("body-parser");
const formRouter = require("./router/formRouter");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h3>Profile Forms API!</h3><br/>");
});

app.use("/", formRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log("Server Started");
});
