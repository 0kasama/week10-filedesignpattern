const express = require("express");
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler.js");
const port = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
