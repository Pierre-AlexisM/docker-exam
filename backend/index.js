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
const app = express();

const port = 4001;
app.use(express.json());
app.use(cors());

app.get("/todos", async (req, res) => {
  try {
    const todos = await db("todos").select("*");
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/todos", async (req, res) => {
  try {
    const { title, description } = req.body;
    await db("todos").insert({ title, description });
    return res.status(201).send({ message: "Todo created successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error" });
  }
});

app.delete("/todos/:todoId", async (req, res) => {
  try {
    const { todoId } = req.params;
    const deletedTodo = await db("todos").where("id", todoId).del();
    if (!deletedTodo) {
      return res.status(404).send({ message: "Todo not found" });
    }
    return res.status(200).send({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
