const router = require("express").Router();
const controller = require("../controllers/group_routines");

router.get("/", controller.group_routines.get);
router.post("/", controller.group_routines.post);
router.patch("/", controller.group_routines.patch);

module.exports = router;
