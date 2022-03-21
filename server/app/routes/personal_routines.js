const router = require("express").Router();
const controller = require("../controllers/personal_routines");

router.post("/details", controller.user_routine_details.post);
router.post("/", controller.user_routine.post);
router.patch("/", controller.user_routine.patch);

module.exports = router;
