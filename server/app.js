const express = require("express");
const app = express();
const userRouter = require("./app/routes/users");
const personalRoutineRouter = require("./app/routes/personal_routines");
const groupRoutineRouter = require("./app/routes/group_routines");
const cors = require("cors");

app.set("port", process.env.PORT || 4000);

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    credentials: true,
    cookie: {
      maxAge: 24 * 6 * 60 * 10000,
      httpOnly: false,
      secure: true,
      sameSite: "None",
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", userRouter);
app.use("/user-routine", personalRoutineRouter);
app.use("/group-routine", groupRoutineRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "port opened.");
});
