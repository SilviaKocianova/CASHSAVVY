const categoryDao = require("../../dao/category-dao.js");

async function DeleteAbl(req, res) {
  try {
    // get request query or body
    const reqParams = req.body;

    const category = categoryDao.remove(reqParams.id);

    if (!category) {
      res.status(404).json({
        code: "categoryNotFound",
        message: `Category ${reqParams.id} not found`,
      });
      return;
    }

    res.json({});
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = DeleteAbl;
