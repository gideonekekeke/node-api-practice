const express = require("express");
const {
  gettingAll,
  creating,
  gettingID,
  deleteStudent,
  delectingAll,
  imageUpload,
} = require("../controller/controller");

const router = express.Router();

router.get("/users", gettingAll);
router.post("/users", creating);
router.get("/users/:id", gettingID);
router.delete("/users/:id", deleteStudent);
router.delete("/users/:id", delectingAll);

module.exports = router;
