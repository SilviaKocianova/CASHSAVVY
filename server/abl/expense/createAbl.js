const Ajv = require('ajv');
const ajv = new Ajv();

const categoryDao = require("../../dao/category-dao.js");
const expenseDao = require("../../dao/expense-dao.js");

const schema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 0 },
    amount: { type: "number",},
    categoryId: { type: "string",},
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

    // Log the expense data being validated
    console.log('Valid expense data:', expense);

    const category = await categoryDao.get(expense.categoryId); // Use await here

    if (!category) {
      res.status(400).json({
        code: "categoryNotFound",
        message: "Category does not exist",
        validationError: ajv.errors,
      });
      return;
    }

    const newExpense = await expenseDao.create(expense); // Use await here
    res.json(newExpense);
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: e.message });
  }
} // pridat ty console log e do vseho at vidim chyby

module.exports = CreateAbl;
