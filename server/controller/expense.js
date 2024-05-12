const express = require("express");
const router = express.Router();

const GetAbl = require("../abl/expense/getAbl");
const ListAbl = require("../abl/expense/listAbl");
const CreateAbl = require("../abl/expense/createAbl");
const UpdateAbl = require("../abl/expense/updateAbl");
const DeleteAbl = require("../abl/expense/deleteAbl");

router.get("/get", GetAbl);
router.get("/list", ListAbl);
router.post("/create", CreateAbl);
router.post("/update", UpdateAbl);
router.post("/delete", DeleteAbl);

module.exports = router;
