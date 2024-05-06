const expenseDao = require("../../dao/expense-dao.js");

async function ListAbl(req, res) {
  try {
    const expensesList = expenseDao.list();
    res.json(expensesList);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = ListAbl;
