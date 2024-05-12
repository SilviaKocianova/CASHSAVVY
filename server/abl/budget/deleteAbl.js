const budgetDao = require("../../dao/budget-dao.js");

async function DeleteAbl(req, res) {
  try {
    // get request query or body
    const reqParams = req.body;

    const budget = budgetDao.remove(reqParams.id);

    if (!budget) {
      res.status(404).json({
        code: "budgetNotFound",
        message: `Budget ${reqParams.id} not found`,
      });
      return;
    }

    res.json({});
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = DeleteAbl;
