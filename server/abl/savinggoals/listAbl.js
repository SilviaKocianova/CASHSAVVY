const userDao = require("../../dao/savinggoals-dao.js");

async function ListAbl(req, res) {
  try {
    const savinggoalsList = userDao.list();
    res.json(savinggoalsList);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = ListAbl;
