const router = require("express").Router();
const controller = require("../controllers/routine");


// test : show whole user data
router.get("/", controller.user_routine.get);

// check user before signup
router.post("/signup-check", controller.signupCheck.post);

// put a new user data
router.post("/signup", controller.signup.post);

// delete a user data
router.get("/resign", controller.resign.get);

// user login
router.post("/login", controller.login.post);

// user logout
router.get("/logout", controller.logout.get);

// get user info
router.get("/user-info", controller.userInfo.get);

// edit user info
router.post("/user-edit", controller.editUserInfo.post);  


module.exports = router;
