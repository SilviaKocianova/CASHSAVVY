const expenseDao = require("../../dao/expense-dao.js");

async function DeleteAbl(req, res) {
  try {
    // get request query or body
    const reqParams = req.body;

    const expense = expenseDao.remove(reqParams.id);

    if (!expense) {
      res.status(404).json({
        code: "expenseNotFound",
        message: `Expense ${reqParams.id} not found`,
      });
      return;
    }

    res.json({});
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = DeleteAbl;
