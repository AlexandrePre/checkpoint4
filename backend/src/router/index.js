const express = require("express");

const userRouter = require("./userRouter");
const workoutRouter = require("./workoutRouter");
const workoutUserRouter = require("./workoutUserRouter");

const router = express.Router();

router.use("/user", userRouter);
router.use("/workout", workoutRouter);
router.use("/workout/user", workoutUserRouter);

module.exports = router;
