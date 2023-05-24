const express = require("express");
const app = express();
const controller = require("./controller");
const response = require("../../network/response");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  controller.getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 200)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected error', e);
    }) 
});

app.post("/", (req, res) => {

  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((e) => {
      response.error(
        req,
        res,
        "Informacion invalida",
        400,
        e
      );
    });
});

module.exports = app;
