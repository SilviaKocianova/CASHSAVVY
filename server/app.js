const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json()); // podpora pro application/json
app.use(express.urlencoded({ extended: true })); // podpora pro application/x-www-form-urlencoded

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const categoryController = require("./server/controller/category.js");
app.use("/category", categoryController);

const expenseController = require("./server/controller/expense.js");
app.use("/expense", expenseController);

const budgetController = require("./server/controller/budget.js");
app.use("/budget", budgetController);

const savinggoalsController = require("./server/controller/savinggoals.js");
app.use("/savinggoals", savinggoalsController);

const userController = require("./server/controller/user.js");
app.use("/user", userController);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});