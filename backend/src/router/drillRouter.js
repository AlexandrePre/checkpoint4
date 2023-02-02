const express = require("express");

const DrillRouter = express.Router();

const DrillController = require("../controllers/drillsController");
const { upload } = require("../helpers/multers");
const { checkImage } = require("../middleware/checkImage");

DrillRouter.get("/", DrillController.getAllDrill);
DrillRouter.get("/:id", DrillController.getOneDrill);
DrillRouter.delete("/:id", DrillController.deleteDrill);
DrillRouter.put("/:id", DrillController.updateDrill);
DrillRouter.post(
  "/",
  upload.single("upload"),
  checkImage,
  DrillController.postDrill
);

module.exports = DrillRouter;
