const express = require("express");

const userRouter = require("./userRouter");
const workoutRouter = require("./workoutRouter");

const router = express.Router();

router.use("/user", userRouter);
router.use("/workout", workoutRouter);

module.exports = router;
