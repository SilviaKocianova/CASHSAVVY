const budgetDao = require("../../dao/budget-dao.js");

async function GetAbl(req, res) {
  try {
    // get request query or body
    const reqParams = req.body;

    // read budget by given id
    const budget = budgetDao.get(reqParams.id);

    if (!budget) {
      res.status(404).json({
        code: "budgetNotFound",
        message: `Budget ${reqParams.id} not found`,
      });
      return;
    }

    res.json(budget);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = GetAbl;
