const express = require("express");
const app = express();
app.use(express.json());

const routes = require("./network/routes");

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Hola desde GET");
});

routes(app);

app.listen(3000);

