const express = require("express");
// const { sequelize } = require("./models"); // db.sequelize
const app = express();
const userRouter = require("./app/routes/users");
const routineRouter = require("./app/routes/routines");
const cors = require("cors");

app.set("port", process.env.PORT || 4000);
// app.set("view engine", "html");

// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("데이터베이스 연결됨.");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

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

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", userRouter);
app.use("/routines", routineRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
