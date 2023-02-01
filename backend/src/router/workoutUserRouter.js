const express = require("express");

const WorkoutUserRouter = express.Router();

const userWorkOutController = require("../controllers/workoutUserController");

WorkoutUserRouter.get("/:id", userWorkOutController.getWorkoutUser);
WorkoutUserRouter.put("/:id", userWorkOutController.updateWorkout);

module.exports = WorkoutUserRouter;
