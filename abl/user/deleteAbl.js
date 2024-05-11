const userDao = require("../../dao/user-dao.js");

async function DeleteAbl(req, res) {
  try {
    // get request query or body
    const reqParams = req.body;

    const user = userDao.remove(reqParams.id);

    if (!user) {
      res.status(404).json({
        code: "userNotFound",
        message: `User ${reqParams.id} not found`,
      });
      return;
    }

    res.json({});
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = DeleteAbl;
