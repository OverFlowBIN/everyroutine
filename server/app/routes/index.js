const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const personalRoutineRouter = require("./personal_routines");
const groupRoutineRouter = require("./group_routines");

router.use("/users", usersRouter);
router.use("/user-routine", personalRoutineRouter);
router.use("/group-routine", groupRoutineRouter);

module.exports = router;
