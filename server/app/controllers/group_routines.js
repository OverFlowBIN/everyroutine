const { user, group_cal, group_routine, march22_date } = require("../../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");


module.exports = {
  // 그룹 루틴 초기 화면 (group_routines)
    // get: 내가 가입한 그룹루틴 보여주기
    //      내가 가입하지 않은 그룹루틴 보여주기(최신 그룹 순으로)

    // 그룹루틴 검색 (search_group_routines)
      // get: 태그로 그룹 루틴 검색하기
    
  // 그룹 루틴 생성 (create_group_routines)
    // post: 그룹 루틴 만들기(그룹이름, 그룹소개, 태그, 이미지)
      // 유저 이메일 or ID 보내기(토큰)

  
  // 특정 그룹 루틴 초기 화면 (group_rotine_name)
    // get: 소개, 가입인원, 댓글, 달성률, 날짜별 데이터 자료
    // post: 코멘트 남기기
    // get(?): 탈퇴하기


  group_routines: {
    // 그룹 루틴 초기 화면 (group_routines)
      // get: 내가 가입한 그룹루틴 보여주기
      //      내가 가입하지 않은 그룹루틴 보여주기(최신 그룹 순으로)
    get: async (req, res) => {
      // 내가 가입한 그룹 보여주기
      // TODO: 이메일은 토큰으로 바꾸기
      const { routine, email } = await req.body;

        
        await group_routine.findAll().then(data => res.json(data))

        // 사용 유저의 DB 찾기
        // const userId = await user.findOne({where : { email }});

        // // 사용 유저의 아이디를 그룹 루틴에서 찾기
        // const findRoutine =  await group_routine.findAll({ where: { id: userId.id }}).then(data => res.send(data));
        // console.log('findRoutine ****************', findRoutine.length)


        //  이렇게 
        // [
        //   {
        //     "id": 1,
        //     "routine_name": "물 2L 마시기",
        //     "user_id": 1,
        //     "editor_id": 1,
        //     "tag_name": "생활",
        //     "image": "",
        //     "contents": "물을 마십시다",
        //     "createdAt": "2022-03-08T02:54:52.000Z",
        //     "updatedAt": "2022-03-08T02:54:52.000Z"
        //   },
        //   {
        //     "id": 2,
        //     "routine_name": "달리기",
        //     "user_id": 1,
        //     "editor_id": 1,
        //     "tag_name": "건강",
        //     "image": "",
        //     "contents": "하루 3km 달리기",
        //     "createdAt": "2022-03-08T02:54:52.000Z",
        //     "updatedAt": "2022-03-08T02:54:52.000Z"
        //   }
        // ]

      // console.log(group_routine, email)
      // group_routine.findAll().then((res) => {
      //   console.log(res);
      //   res.json(res);
      // })
      




    },
    post: (req, res) => {
  
    },
    patch: (req, res) => {
  
    },
  }


}