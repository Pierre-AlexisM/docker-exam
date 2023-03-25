const express = require("express");
const config = require("./db.config");

const db = require("knex")({
  client: "mysql2",
  connection: {
    host: config.HOST,
    port: config.PORT,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE,
  },
});

const cors = require("cors");
const test = express();

const port = 4001;
test.use(express.json());
test.use(cors());

test.get('/todos', (req, res) => {
  res.send('Bonjour !'); 
});

test.post("/todos", async (req, res) => {
  //TO_MODIFY
});

test.delete("/todos/:todoId", async (req, res) => {
  //TO_MODIFY
});

test.listen(port, () => {
  console.log(`Example test listening on port ${port}`);
});
