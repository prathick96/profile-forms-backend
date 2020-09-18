require("./dbconfig/dbconfig");
const express = require("express");
const bodyParser = require("body-parser");
const formRouter = require("./router/formRouter");
const cors = require("cors");

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000
  })
);

app.use(cors());

app.use("/", formRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log("Server Started");
});
