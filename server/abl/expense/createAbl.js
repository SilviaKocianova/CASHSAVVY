const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

const validateDateTime = require("../../helpers/validate-date-time.js");
ajv.addFormat("date-time", { validate: validateDateTime });

const expenseDao = require("../../dao/expense-dao.js");
const categoryDao = require("../../dao/category-dao.js");

const schema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 3 },
    amount: { type: "number", minimum: 1 },
    categoryId: { type: "string" },
  },
  required: ["name", "amount", "categoryId"],
  additionalProperties: false,
};

async function CreateAbl(req, res) {
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

    const category = categoryDao.get(expense.categoryId)

    if (!category) {
      res.status(400).json({
        code: "categoryNotFound",
        message: "Category does not exist",
        validationError: ajv.errors,
      });
      return;
    }

    const newExpense = expenseDao.create(expense);
    res.json(newExpense);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = CreateAbl;
