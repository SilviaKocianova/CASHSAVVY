const userDao = require("../../dao/budget-dao.js");

async function ListAbl(req, res) {
  try {
    const budgetList = userDao.list();
    res.json(budgetList);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = ListAbl;
