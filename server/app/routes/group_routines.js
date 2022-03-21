const router = require("express").Router();
const controller = require("../controllers/group_routines");

// 그룹루틴 주소
// app.use("/group-routine", groupRoutineRouter);

// test용
router.get("/test", controller.test.get);

// 그룹 루틴 초기화면_1 : 내 그룹루틴 가져오기
router.get("/", controller.group_routines.get);

// 그룹 루틴 초기화면_2 : 태그별로 그룹루틴 가져오기
router.get("/tag", controller.group_routine_tag.get);

// 그룹 가입하기
router.get("/join", controller.join_group_routine.get);

// 댓글 남기기
router.post("/comment", controller.write_comment.post);

// 그룹 루틴 만들기
router.post("/create", controller.group_routine_create.post);

// 그릅 루틴 누르기
router.get("/select", controller.select_group_routine.get);

// 그룹 탈퇴하기
router.get("/withdrawal", controller.withdrawal_group_routine.get);

// 그룹 루틴 삭제하기
router.get("/delete", controller.delete_group_routine.get);


module.exports = router;
