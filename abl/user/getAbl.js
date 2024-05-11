const userDao = require("../../dao/user-dao.js");

async function GetAbl(req, res) {
  try {
    // get request query or body
    const reqParams = req.body;

    // read user by given id
    const user = userDao.get(reqParams.id);

    if (!user) {
      res.status(404).json({
        code: "userNotFound",
        message: `User ${reqParams.id} not found`,
      });
      return;
    }

    res.json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = GetAbl;
