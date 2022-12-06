const PORT = 3000;
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let posts = [
  {
    id: "qualquercoisa",
    title: "teste no mural",
    description: "descrição teste",
  },
  {
    id: "qualquercoisaDois",
    title: "teste no mural",
    description: "descrição teste",
  },
  {
    id: "qualquercoisaTres",
    title: "teste no mural",
    description: "descrição teste",
  },
];

app.get("/all", (req, res) => {
  res.json(JSON.stringify(posts));
});

app.post("/new", bodyParser.json(), (req, res) => {
  let id = generateID();
  let title = req.body.title;
  let description = req.body.description;

  posts.push({ id, title, description });

  res.send("Post adicionado");
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});

const generateID = () => {
  return Math.random().toString(36).substring(2, 9);
};
