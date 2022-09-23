const express = require("express");
const app = express();

app.get("/page", (request, response) => {
  let date = new Date();
  response.sendFile("./page.html", { root: __dirname });
});

app.listen(3000);
