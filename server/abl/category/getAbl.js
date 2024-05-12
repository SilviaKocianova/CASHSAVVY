const categoryDao = require("../../dao/category-dao.js");

async function GetAbl(req, res) {
  try {
    // get request query or body
    const reqParams = req.body;

    // read category by given id
    const category = categoryDao.get(reqParams.id);

    if (!category) {
      res.status(404).json({
        code: "categoryNotFound",
        message: `Category ${reqParams.id} not found`,
      });
      return;
    }

    res.json(category);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = GetAbl;
