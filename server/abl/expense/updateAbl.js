const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

const expenseDao = require("../../dao/expense-dao.js");
const categoryDao = require('../../dao/category-dao');

const schema = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string", minLength: 3 },
    amount: { type: "number", minimum: 1 },
    categoryId: { type: "string" },
  },
  required: ["id"],
  additionalProperties: false,
};

async function UpdateAbl(req, res) {
  try {
    let expense = req.body;

    // validate input
    const valid = ajv.validate(schema, expense);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    if (expense.categoryId) {
      const category = categoryDao.get(expense.categoryId)

      if (!category) {
        res.status(400).json({
          code: "categoryNotFound",
          message: "Category does not exist",
          validationError: ajv.errors,
        });
        return;
      }
    }

    const updatedExpense = expenseDao.update(expense);

    if (!updatedExpense) {
      res.status(404).json({
        code: "expenseNotFound",
        message: `Expense ${expense.id} not found`,
      });
      return;
    }

    res.json(updatedExpense);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = UpdateAbl;
