const express = require("express");
const router = express.Router();

const GetAbl = require("../abl/savinggoals/getAbl");
const ListAbl = require("../abl/savinggoals/listAbl");
const CreateAbl = require("../abl/savinggoals/createAbl");
const UpdateAbl = require("../abl/savinggoals/updateAbl");
const DeleteAbl = require("../abl/savinggoals/deleteAbl");

router.get("/get", GetAbl);
router.get("/list", ListAbl);
router.post("/create", CreateAbl);
router.post("/update", UpdateAbl);
router.post("/delete", DeleteAbl);

module.exports = router;
