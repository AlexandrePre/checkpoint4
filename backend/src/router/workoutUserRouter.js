const express = require("express");

const WorkoutUserRouter = express.Router();

const userDecisionController = require("../controllers/workoutUserController");

WorkoutUserRouter.get("/:id", userDecisionController.getDecisionUser);

module.exports = WorkoutUserRouter;
