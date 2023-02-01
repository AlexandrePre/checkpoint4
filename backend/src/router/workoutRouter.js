const express = require("express");

const WorkoutRouter = express.Router();

const WorkoutController = require("../controllers/workoutControllers");

WorkoutRouter.get("/:id", WorkoutController.getAllWorkout);
WorkoutRouter.delete("/:id", WorkoutController.deleteWorkout);

module.exports = WorkoutRouter;
