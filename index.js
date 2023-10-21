const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const rutas = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", rutas);
app.listen(3000, () => {
  console.log("Servidor levantado con nodemon en el puerto 3000");
});
