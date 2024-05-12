const expenseDao = require("../../dao/expense-dao.js");

async function GetAbl(req, res) {
  try {
    // get request query or body
    const reqParams = req.body;

    // read category by given id
    const category = expenseDao.get(reqParams.id);

    if (!category) {
      res.status(404).json({
        code: "expenseNotFound",
        message: `Expense ${reqParams.id} not found`,
      });
      return;
    }

    res.json(category);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = GetAbl;
