const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Estás conectado al BE con nodemon");
});

router.post("/", (req, res) => {
  //const { body } = req;

  console.log(req.body);
  users.push(req.body);
  console.log("Usuario agregado a la DB");
  console.log(users);
  res.status(201).send("Usuario creado");
});

router.put("/users/:userId", (req, res) => {
  const id = req.params.userId;
  const user = users.find((usuario) => usuario.id === Number(id));
  user.age = req.body.age;
  user.name = req.body.name;

  users.splice(id - 1, 1, user);

  console.log(users);
  res.status(200).send("Usuario modificado");
});

router.delete("/", (req, res) => {
  res.status(200).send("Accediste mediante el metodo DELETE");
});

router.get("/saludo", (req, res) => {
  res.status(200).send("Accediste a /saludo");
});

router.get("/login", (req, res) => {
  res.status(200).send("Accediste a /login");
});

router.get("/users", (req, res) => {
  res.status(200).send(users);
});

router.get("/users/:userId", (req, res) => {
  console.log(req.params);
  const id = req.params.userId;
  console.log(`El userId ingresado es ${id}`);
  const user = users.find((usuario) => usuario.id === Number(id));
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send("Usuario no encontrado");
  }
});

const users = [
  { id: 1, name: "Pedro", surname: "Juarez", age: 20 },
  { id: 2, name: "Amanda", surname: "Alfon", age: 45 },
  { id: 3, name: "Ariel", surname: "Vazquez", age: 35 },
  { id: 4, name: "Analia", surname: "Burgos", age: 59 },
];

module.exports = router;
