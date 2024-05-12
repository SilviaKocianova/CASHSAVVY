const userDao = require("../../dao/category-dao.js");

async function ListAbl(req, res) {
  try {
    const categoriesList = userDao.list();
    res.json(categoriesList);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = ListAbl;
