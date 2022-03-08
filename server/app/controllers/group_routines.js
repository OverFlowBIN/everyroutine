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
    // post: 그룹 루틴 만들기
  
  // 특정 그룹 루틴 초기 화면 (group_rotine_name)
    // get: 소개, 가입인원
    // post: 코멘트 남기기
    

  group_routines: {
    get: () => {
      

    },
    post: () => {
  
    },
    patch: () => {
  
    },
  }


}