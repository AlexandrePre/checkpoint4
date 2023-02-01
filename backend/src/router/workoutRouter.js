const express = require("express");

const WorkoutRouter = express.Router();

const WorkoutController = require("../controllers/workoutControllers");

WorkoutRouter.get("/:id", WorkoutController.getAllWorkout);

module.exports = WorkoutRouter;
