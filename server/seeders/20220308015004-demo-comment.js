"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comments",
      [
        // 물 2L 마시기 ( 7일 )
        {
          user_id: 1,
          group_routine_id: 1,
          comment: "자기 전에 체크하고 잡니당",
          createdAt: new Date("2022-03-07T22:59:08.000Z"),
          updatedAt: new Date("2022-03-07T22:59:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 1,
          comment: "2L 쉽지않네",
          createdAt: new Date("2022-03-07T23:35:08.000Z"),
          updatedAt: new Date("2022-03-07T23:35:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 1, //Jane씨는 항상 답변이 간결한 성격을 가지고 계십니다.
          comment: "전 일찍 다 마셨어용",
          createdAt: new Date("2022-03-07T22:24:08.000Z"),
          updatedAt: new Date("2022-03-07T22:24:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 1,
          comment: "2L 쉬운데요?",
          createdAt: new Date("2022-03-07T23:36:08.000Z"),
          updatedAt: new Date("2022-03-07T23:35:08.000Z"),
        },
        // 스트레칭 하기 ( 7일 )
        {
          user_id: 1,
          group_routine_id: 2,
          comment: "자기 전에 스트레칭!",
          createdAt: new Date("2022-03-07T21:36:07.000Z"),
          updatedAt: new Date("2022-03-07T21:36:07.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 2,
          comment: "전 오늘 아침에 일어나자마자 했어요!",
          createdAt: new Date("2022-03-07T06:36:07.000Z"),
          updatedAt: new Date("2022-03-07T06:36:07.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 2,
          comment: "했습니당",
          createdAt: new Date("2022-03-07T07:32:07.000Z"),
          updatedAt: new Date("2022-03-07T07:32:07.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 2,
          comment: "뚜둑소리가 많이나요....",
          createdAt: new Date("2022-03-07T12:12:07.000Z"),
          updatedAt: new Date("2022-03-07T12:12:07.000Z"),
        },
        // 아침 조깅 3km ( 7일 )
        {
          user_id: 1,
          group_routine_id: 3,
          comment: "다섯시 반에 외출!!!",
          createdAt: new Date("2022-03-07T06:12:07.000Z"),
          updatedAt: new Date("2022-03-07T06:12:07.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 3,
          comment: "저두 다섯시 반 기상!!!",
          createdAt: new Date("2022-03-07T06:18:07.000Z"),
          updatedAt: new Date("2022-03-07T06:18:07.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 3,
          comment: "저는 7시쯤 일어나서 빨리 달리고 왔습니다.",
          createdAt: new Date("2022-03-07T07:24:07.000Z"),
          updatedAt: new Date("2022-03-07T07:24:07.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 3,
          comment: "제가 제일 늦었네용 ㅠㅠ",
          createdAt: new Date("2022-03-07T08:58:07.000Z"),
          updatedAt: new Date("2022-03-07T08:58:07.000Z"),
        },
        // 기도 하기 ( 7일 )
        {
          user_id: 1,
          group_routine_id: 4,
          comment: "새벽기도 했습니다.", //everyroutine씨는 새벽기도를 하고 아침조깅을 다녀오시는 엄청난 분이십니다.
          createdAt: new Date("2022-03-07T04:40:07.000Z"),
          updatedAt: new Date("2022-03-07T04:40:07.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 4,
          comment: "저는 점심시간 틈타서 ㅎㅎ",
          createdAt: new Date("2022-03-07T14:24:07.000Z"),
          updatedAt: new Date("2022-03-07T14:24:07.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 4,
          comment: "힘내자!!!",
          createdAt: new Date("2022-03-07T15:32:07.000Z"),
          updatedAt: new Date("2022-03-07T15:32:07.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 4,
          comment: "자기 전 기도하고 잡니다.",
          createdAt: new Date("2022-03-07T22:38:07.000Z"),
          updatedAt: new Date("2022-03-07T22:38:07.000Z"),
        },
        // 출퇴근 시간만 핸드폰 게임하기 ( 7일 )
        {
          user_id: 1,
          group_routine_id: 5,
          comment: "지하철에 사람이 너무 많아서 힘들었어요 ㅠㅠ",
          createdAt: new Date("2022-03-07T19:38:07.000Z"),
          updatedAt: new Date("2022-03-07T19:38:07.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 5,
          comment: "저는 그래서 버스탔는데 버스에도 사람이...",
          createdAt: new Date("2022-03-07T19:32:07.000Z"),
          updatedAt: new Date("2022-03-07T19:32:07.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 5,
          comment: "그쵸 안태워주던데요",
          createdAt: new Date("2022-03-07T19:28:07.000Z"),
          updatedAt: new Date("2022-03-07T19:28:07.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 5,
          comment: "저는 원신했습니다. 꿀잼.",
          createdAt: new Date("2022-03-07T19:28:07.000Z"),
          updatedAt: new Date("2022-03-07T19:28:07.000Z"),
        },

        //  ---------------------------------------------------------------------------------------------------------------

        // 물 2L 마시기 ( 8일 )
        {
          user_id: 1,
          group_routine_id: 1,
          comment: "오늘 물 달성! 이제 잡니당",
          createdAt: new Date("2022-03-08T21:59:08.000Z"),
          updatedAt: new Date("2022-03-08T21:59:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 1,
          comment: "2L 여전히 쉽지않네",
          createdAt: new Date("2022-03-08T23:38:08.000Z"),
          updatedAt: new Date("2022-03-08T23:38:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 1,
          comment: "다 마셨어용",
          createdAt: new Date("2022-03-08T20:14:08.000Z"),
          updatedAt: new Date("2022-03-08T20:14:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 1,
          comment: "2L 여전히 쉬운데요?",
          createdAt: new Date("2022-03-08T21:36:08.000Z"),
          updatedAt: new Date("2022-03-08T21:36:08.000Z"),
        },
        // 스트레칭 하기 ( 8일 )
        {
          user_id: 1,
          group_routine_id: 2,
          comment: "오늘은 좀 일찍 자볼까 합니당",
          createdAt: new Date("2022-03-08T21:03:08.000Z"),
          updatedAt: new Date("2022-03-08T21:03:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 2,
          comment: "오늘도 기상 스트레칭!",
          createdAt: new Date("2022-03-08T07:26:08.000Z"),
          updatedAt: new Date("2022-03-08T07:26:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 2,
          comment: "했습니당",
          createdAt: new Date("2022-03-08T07:32:08.000Z"),
          updatedAt: new Date("2022-03-08T07:32:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 2, //Doe씨는 일주일에 하루 재택근무가 가능한 회사에 다니고 있습니다.
          comment: "점심시간 이용해서 했습니다. 자택근무 개꿀",
          createdAt: new Date("2022-03-08T12:12:08.000Z"),
          updatedAt: new Date("2022-03-08T12:12:08.000Z"),
        },

        // 아침 조깅 3km ( 8일 ) ---------------------------------------------------
        {
          user_id: 1,
          group_routine_id: 3,
          comment: "다섯시 반 외출!!!!! 지켰습니당",
          createdAt: new Date("2022-03-08T06:11:08.000Z"),
          updatedAt: new Date("2022-03-08T06:11:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 3,
          comment: "저두 기상은 다섯시 반ㅋㅋㅋ",
          createdAt: new Date("2022-03-08T06:30:08.000Z"),
          updatedAt: new Date("2022-03-08T06:30:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 3,
          comment: "했습니다.",
          createdAt: new Date("2022-03-08T07:24:08.000Z"),
          updatedAt: new Date("2022-03-08T07:24:08.000Z"),
        },
        {
          user_id: 4, //Doe씨는 유연근무제로 일하여 아침 조깅이 늦습니다.
          group_routine_id: 3,
          comment: "저는 조금 늦게 일어났습니당",
          createdAt: new Date("2022-03-08T09:38:08.000Z"),
          updatedAt: new Date("2022-03-08T09:38:08.000Z"),
        },
        
        // 기도 하기 ( 8일 ) --------------------------------------
        {
          user_id: 1,
          group_routine_id: 4,
          comment: "매일매일 새벽기도.",
          createdAt: new Date("2022-03-08T04:45:08.000Z"),
          updatedAt: new Date("2022-03-08T04:45:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 4,
          comment: "저는 또 점심시간 틈타서 ㅎㅎㅎㅎ",
          createdAt: new Date("2022-03-08T13:14:08.000Z"),
          updatedAt: new Date("2022-03-08T13:14:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 4,
          comment: "했습니다.",
          createdAt: new Date("2022-03-08T20:32:08.000Z"),
          updatedAt: new Date("2022-03-08T20:32:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 4,
          comment: "자기 전에는 기도해야죠.",
          createdAt: new Date("2022-03-08T22:58:08.000Z"),
          updatedAt: new Date("2022-03-08T22:58:08.000Z"),
        },
        
        // 출퇴근 시간만 핸드폰 게임하기 ( 8일 ) -----------------------------------
        {
          user_id: 1,
          group_routine_id: 5,
          comment: "요즘 무슨 게임이 재밌나요?",
          createdAt: new Date("2022-03-08T19:34:08.000Z"),
          updatedAt: new Date("2022-03-08T19:34:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 5,
          comment: "저는 해리포터 해요",
          createdAt: new Date("2022-03-08T19:45:08.000Z"),
          updatedAt: new Date("2022-03-08T19:45:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 5,
          comment: "저도 원신...",
          createdAt: new Date("2022-03-08T19:58:08.000Z"),
          updatedAt: new Date("2022-03-08T19:58:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 5,
          comment: "저는 오늘 출근을 안했네요^^",
          createdAt: new Date("2022-03-08T20:28:08.000Z"),
          updatedAt: new Date("2022-03-08T20:28:08.000Z"),
        },

        //  --------------------------------------------------------------------------------------------------------------------------
        // 물 2L 마시기 ( 9일 )

        
        {
          user_id: 1,
          group_routine_id: 1,
          comment: "달성! 자기전에 남깁니당",
          createdAt: new Date("2022-03-09T21:59:08.000Z"),
          updatedAt: new Date("2022-03-09T21:59:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 1,
          comment: "2L 여전히 쉽지않네",
          createdAt: new Date("2022-03-09T23:21:08.000Z"),
          updatedAt: new Date("2022-03-09T23:21:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 1,
          comment: "했습니다",
          createdAt: new Date("2022-03-09T21:14:08.000Z"),
          updatedAt: new Date("2022-03-09T21:14:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 1,
          comment: "2L 여전히 쉬운데요?",
          createdAt: new Date("2022-03-09T20:36:08.000Z"),
          updatedAt: new Date("2022-03-09T20:36:08.000Z"),
        },


        // // 스트레칭 하기 ( 9일 )
        {
          user_id: 1,
          group_routine_id: 2,
          comment: "스트레칭 하고~ 잡니다!",
          createdAt: new Date("2022-03-09T22:03:08.000Z"),
          updatedAt: new Date("2022-03-09T22:03:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 2,
          comment: "일어나자마자 스트레칭!",
          createdAt: new Date("2022-03-09T07:12:08.000Z"),
          updatedAt: new Date("2022-03-09T07:12:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 2,
          comment: "했습니당",
          createdAt: new Date("2022-03-09T19:52:08.000Z"),
          updatedAt: new Date("2022-03-09T19:52:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 2,
          comment: "저녁먹기 전에 스트레칭하고 먹어야겠당",
          createdAt: new Date("2022-03-09T20:12:08.000Z"),
          updatedAt: new Date("2022-03-09T20:12:08.000Z"),
        },


        // // 아침 조깅 3km ( 9일 )
        {
          user_id: 1,
          group_routine_id: 3,
          comment: "열심히 달리구 왔어용",
          createdAt: new Date("2022-03-09T06:18:08.000Z"),
          updatedAt: new Date("2022-03-09T06:18:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 3,
          comment: "오늘은 이상하게 너무 힘드네요 ㅠㅠ",
          createdAt: new Date("2022-03-09T06:30:08.000Z"),
          updatedAt: new Date("2022-03-09T06:30:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 3,
          comment: "했습니다.",
          createdAt: new Date("2022-03-09T07:30:08.000Z"),
          updatedAt: new Date("2022-03-09T07:30:08.000Z"),
        },
        {
          user_id: 4, //Doe씨는 유연근무제로 일하여 아침 조깅이 늦습니다.
          group_routine_id: 3,
          comment: "저는 오늘도 ㅎㅎ.. 조금 늦게 일어났습니당",
          createdAt: new Date("2022-03-09T09:45:08.000Z"),
          updatedAt: new Date("2022-03-09T09:45:08.000Z"),
        },
        
        // 기도 하기 ( 9일 ) ----------------------------------
        {
          user_id: 1,
          group_routine_id: 4,
          comment: "새벽기도는 참 좋아요",
          createdAt: new Date("2022-03-09T04:38:08.000Z"),
          updatedAt: new Date("2022-03-09T04:38:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 4,
          comment: "퇴근하고 집에 와서 했습니다. 오늘 힘들었어요.",
          createdAt: new Date("2022-03-09T20:20:08.000Z"),
          updatedAt: new Date("2022-03-09T20:20:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 4,
          comment: "했습니다.",
          createdAt: new Date("2022-03-09T20:39:08.000Z"),
          updatedAt: new Date("2022-03-09T20:39:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 4,
          comment: "자기 전에는 기도!",
          createdAt: new Date("2022-03-09T23:54:08.000Z"),
          updatedAt: new Date("2022-03-09T23:54:08.000Z"),
        },
        
        // 출퇴근 시간만 핸드폰 게임하기 ( 9일 ) ----------------------------------
        {
          user_id: 1,
          group_routine_id: 5,
          comment: "저도 원신 설치했어용 ㅎㅎㅎ",
          createdAt: new Date("2022-03-09T19:39:08.000Z"),
          updatedAt: new Date("2022-03-09T19:39:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 5,
          comment: "저는 꾸준히 해리포터",
          createdAt: new Date("2022-03-09T19:50:08.000Z"),
          updatedAt: new Date("2022-03-09T19:50:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 5,
          comment: "원신.",
          createdAt: new Date("2022-03-09T20:58:08.000Z"),
          updatedAt: new Date("2022-03-09T20:58:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 5,
          comment: "그렇죠 원신",
          createdAt: new Date("2022-03-09T20:38:08.000Z"),
          updatedAt: new Date("2022-03-09T20:38:08.000Z"),
        },

        // // --------------------------------------------------------------------------------------------------------------------------------------
        // // 물 2L 마시기 ( 10일 )
        {
          user_id: 1,
          group_routine_id: 1,
          comment: "오늘 물 3L나 마셨어용",
          createdAt: new Date("2022-03-10T21:52:08.000Z"),
          updatedAt: new Date("2022-03-10T21:52:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 1,
          comment: "2L 여전히..... 쉽지않네",
          createdAt: new Date("2022-03-10T23:11:08.000Z"),
          updatedAt: new Date("2022-03-10T23:11:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 1,
          comment: "했습니다",
          createdAt: new Date("2022-03-10T20:14:08.000Z"),
          updatedAt: new Date("2022-03-10T20:14:08.000Z"),
        },
       
        
        // 스트레칭 하기 ( 10일 )
        {
          user_id: 1,
          group_routine_id: 2,
          comment: "자기 전 스트레칭 꼭 필요해요~~~~",
          createdAt: new Date("2022-03-10T22:06:08.000Z"),
          updatedAt: new Date("2022-03-10T22:06:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 2,
          comment: "저는 스트레칭과 함께 일어납니다!",
          createdAt: new Date("2022-03-10T07:02:08.000Z"),
          updatedAt: new Date("2022-03-10T07:02:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 2,
          comment: "했습니당",
          createdAt: new Date("2022-03-10T20:52:08.000Z"),
          updatedAt: new Date("2022-03-10T20:52:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 2,
          comment: "다들 잘 지키고 계시네요! 저도 했습니다!",
          createdAt: new Date("2022-03-10T20:22:08.000Z"),
          updatedAt: new Date("2022-03-10T20:22:08.000Z"),
        },
        
        // 아침 조깅 3km ( 10일 ) ----------------------------------
        {
          user_id: 1,
          group_routine_id: 3,
          comment: "열심히!!!! 달리구 왔어용",
          createdAt: new Date("2022-03-10T06:24:08.000Z"),
          updatedAt: new Date("2022-03-10T06:24:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 3,
          comment: "열심히 달렸습니당~~~",
          createdAt: new Date("2022-03-10T07:30:08.000Z"),
          updatedAt: new Date("2022-03-10T07:30:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 3,
          comment: "했습니다.",
          createdAt: new Date("2022-03-10T07:35:08.000Z"),
          updatedAt: new Date("2022-03-10T07:35:08.000Z"),
        },
        {
          user_id: 4, //Doe씨는 유연근무제로 일하여 아침 조깅이 늦습니다.
          group_routine_id: 3,
          comment: "3km 쉽지않네",
          createdAt: new Date("2022-03-10T09:15:08.000Z"),
          updatedAt: new Date("2022-03-10T09:15:08.000Z"),
        },
        
        // 기도 하기 ( 10일 ) -----------------------------------------------
        {
          user_id: 1,
          group_routine_id: 4,
          comment: "새벽기도는 언제나 마음이 맑아져요",
          createdAt: new Date("2022-03-10T04:57:08.000Z"),
          updatedAt: new Date("2022-03-10T04:57:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 4,
          comment: "소중한 사람들을 위해 기도했습니다.",
          createdAt: new Date("2022-03-10T20:11:08.000Z"),
          updatedAt: new Date("2022-03-10T20:11:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 4,
          comment: "했습니다.",
          createdAt: new Date("2022-03-10T20:29:08.000Z"),
          updatedAt: new Date("2022-03-10T20:29:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 4,
          comment: "자기 전에는 기도기도!",
          createdAt: new Date("2022-03-10T23:50:08.000Z"),
          updatedAt: new Date("2022-03-10T23:50:08.000Z"),
        },
        
        // 출퇴근 시간만 핸드폰 게임하기 ( 10일 ) --------------------------------
        {
          user_id: 1,
          group_routine_id: 5,
          comment: "해리포터도 설치해볼까요?",
          createdAt: new Date("2022-03-10T19:32:08.000Z"),
          updatedAt: new Date("2022-03-10T19:32:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 5,
          comment: "꾸준히 해리포터입니다",
          createdAt: new Date("2022-03-10T19:56:08.000Z"),
          updatedAt: new Date("2022-03-10T19:56:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 5,
          comment: "원신.",
          createdAt: new Date("2022-03-10T20:32:08.000Z"),
          updatedAt: new Date("2022-03-10T20:32:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 5,
          comment: "맞습니다 원신",
          createdAt: new Date("2022-03-10T21:38:08.000Z"),
          updatedAt: new Date("2022-03-10T21:38:08.000Z"),
        },

        // // -----------------------------------------------------------------------------------------------------------------------------------
        // // 물 2L 마시기 ( 11일 )
        {
          user_id: 1,
          group_routine_id: 1,
          comment: "오늘도 3L나 마셨어용!!!",
          createdAt: new Date("2022-03-11T21:22:08.000Z"),
          updatedAt: new Date("2022-03-11T21:22:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 1,
          comment: "2L 너란녀석... 쉽지않아",
          createdAt: new Date("2022-03-11T23:14:08.000Z"),
          updatedAt: new Date("2022-03-11T23:14:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 1,
          comment: "했습니다",
          createdAt: new Date("2022-03-11T21:14:08.000Z"),
          updatedAt: new Date("2022-03-11T21:14:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 1,
          comment: "ㅎㅎ?",
          createdAt: new Date("2022-03-11T20:16:08.000Z"),
          updatedAt: new Date("2022-03-11T20:16:08.000Z"),
        },
        
        // 스트레칭 하기 ( 11일 ) ----------------------------
        {
          user_id: 1,
          group_routine_id: 2,
          comment: "자기 전 스트레칭!",
          createdAt: new Date("2022-03-11T22:02:08.000Z"),
          updatedAt: new Date("2022-03-11T22:02:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 2,
          comment: "스트레칭과 함께 일어나는 아침",
          createdAt: new Date("2022-03-11T07:06:08.000Z"),
          updatedAt: new Date("2022-03-11T07:06:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 2,
          comment: "했습니당",
          createdAt: new Date("2022-03-11T19:52:08.000Z"),
          updatedAt: new Date("2022-03-11T19:52:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 2,
          comment: "저도 했습니다!",
          createdAt: new Date("2022-03-11T22:22:08.000Z"),
          updatedAt: new Date("2022-03-11T22:22:08.000Z"),
        },
        // 아침 조깅 3km ( 11일 ) ----------------------------

        {
          user_id: 1,
          group_routine_id: 3,
          comment: "많이 열심히 달리고 있는 한 주입니다....",
          createdAt: new Date("2022-03-11T06:34:08.000Z"),
          updatedAt: new Date("2022-03-11T06:34:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 3,
          comment: "3km 쉬운데요?",
          createdAt: new Date("2022-03-11T07:27:08.000Z"),
          updatedAt: new Date("2022-03-11T07:27:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 3,
          comment: "했습니다.",
          createdAt: new Date("2022-03-11T07:28:08.000Z"),
          updatedAt: new Date("2022-03-11T07:28:08.000Z"),
        },
        {
          user_id: 4, //Doe씨는 유연근무제로 일하여 아침 조깅이 늦습니다.
          group_routine_id: 3,
          comment: "3km 여전히 쉽지않네",
          createdAt: new Date("2022-03-11T09:46:08.000Z"),
          updatedAt: new Date("2022-03-11T09:46:08.000Z"),
        },
        
        // 기도 하기 ( 11일 ) ----------------------------------
        {
          user_id: 1,
          group_routine_id: 4,
          comment: "했습니당!",
          createdAt: new Date("2022-03-11T04:55:08.000Z"),
          updatedAt: new Date("2022-03-11T04:55:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 4,
          comment: "기도완료!",
          createdAt: new Date("2022-03-11T20:15:08.000Z"),
          updatedAt: new Date("2022-03-11T20:15:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 4,
          comment: "했습니다.",
          createdAt: new Date("2022-03-11T19:29:08.000Z"),
          updatedAt: new Date("2022-03-11T19:29:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 4,
          comment: "자기 전에는 기도기도기도!",
          createdAt: new Date("2022-03-11T23:55:08.000Z"),
          updatedAt: new Date("2022-03-11T23:55:08.000Z"),
        },

        // 출퇴근 시간만 핸드폰 게임하기 ( 11일 ) -----------------------

        {
          user_id: 1,
          group_routine_id: 5,
          comment: "해리포터 재밌나요",
          createdAt: new Date("2022-03-11T19:46:08.000Z"),
          updatedAt: new Date("2022-03-11T19:46:08.000Z"),
        },
        {
          user_id: 2,
          group_routine_id: 5,
          comment: "꾸준히 해리포터입니다",
          createdAt: new Date("2022-03-11T19:59:08.000Z"),
          updatedAt: new Date("2022-03-11T19:59:08.000Z"),
        },
        {
          user_id: 3,
          group_routine_id: 5,
          comment: "원신.",
          createdAt: new Date("2022-03-11T20:38:08.000Z"),
          updatedAt: new Date("2022-03-11T20:38:08.000Z"),
        },
        {
          user_id: 4,
          group_routine_id: 5,
          comment: "맞습니다 원신",
          createdAt: new Date("2022-03-11T21:28:08.000Z"),
          updatedAt: new Date("2022-03-11T21:28:08.000Z"),
        },

      // ====================================================================================
      // ====================================================================================
      // ====================================================================================

      // 물 2L 마시기 ( 7일 ) - 2
      {
        user_id: 1,
        group_routine_id: 9,
        comment: "자기 전에 체크하고 잡니당",
        createdAt: new Date("2022-03-07T22:59:08.000Z"),
        updatedAt: new Date("2022-03-07T22:59:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 9,
        comment: "2L 쉽지않네",
        createdAt: new Date("2022-03-07T23:35:08.000Z"),
        updatedAt: new Date("2022-03-07T23:35:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 9, //Jane씨는 항상 답변이 간결한 성격을 가지고 계십니다.
        comment: "전 일찍 다 마셨어용",
        createdAt: new Date("2022-03-07T22:24:08.000Z"),
        updatedAt: new Date("2022-03-07T22:24:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 9,
        comment: "2L 쉬운데요?",
        createdAt: new Date("2022-03-07T23:36:08.000Z"),
        updatedAt: new Date("2022-03-07T23:35:08.000Z"),
      },
      // 스트레칭 하기 ( 7일 ) - 2
      {
        user_id: 1,
        group_routine_id: 10,
        comment: "자기 전에 스트레칭!",
        createdAt: new Date("2022-03-07T21:36:07.000Z"),
        updatedAt: new Date("2022-03-07T21:36:07.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 10,
        comment: "전 오늘 아침에 일어나자마자 했어요!",
        createdAt: new Date("2022-03-07T06:36:07.000Z"),
        updatedAt: new Date("2022-03-07T06:36:07.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 10,
        comment: "했습니당",
        createdAt: new Date("2022-03-07T07:32:07.000Z"),
        updatedAt: new Date("2022-03-07T07:32:07.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 10,
        comment: "뚜둑소리가 많이나요....",
        createdAt: new Date("2022-03-07T12:12:07.000Z"),
        updatedAt: new Date("2022-03-07T12:12:07.000Z"),
      },
      // 아침 조깅 3km ( 7일 ) -2 
      {
        user_id: 1,
        group_routine_id: 11,
        comment: "다섯시 반에 외출!!!",
        createdAt: new Date("2022-03-07T06:12:07.000Z"),
        updatedAt: new Date("2022-03-07T06:12:07.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 11,
        comment: "저두 다섯시 반 기상!!!",
        createdAt: new Date("2022-03-07T06:18:07.000Z"),
        updatedAt: new Date("2022-03-07T06:18:07.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 11,
        comment: "저는 7시쯤 일어나서 빨리 달리고 왔습니다.",
        createdAt: new Date("2022-03-07T07:24:07.000Z"),
        updatedAt: new Date("2022-03-07T07:24:07.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 11,
        comment: "제가 제일 늦었네용 ㅠㅠ",
        createdAt: new Date("2022-03-07T08:58:07.000Z"),
        updatedAt: new Date("2022-03-07T08:58:07.000Z"),
      },
      // 기도 하기 ( 7일 ) -2 
      {
        user_id: 1,
        group_routine_id: 12,
        comment: "새벽기도 했습니다.", //everyroutine씨는 새벽기도를 하고 아침조깅을 다녀오시는 엄청난 분이십니다.
        createdAt: new Date("2022-03-07T04:40:07.000Z"),
        updatedAt: new Date("2022-03-07T04:40:07.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 12,
        comment: "저는 점심시간 틈타서 ㅎㅎ",
        createdAt: new Date("2022-03-07T14:24:07.000Z"),
        updatedAt: new Date("2022-03-07T14:24:07.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 12,
        comment: "힘내자!!!",
        createdAt: new Date("2022-03-07T15:32:07.000Z"),
        updatedAt: new Date("2022-03-07T15:32:07.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 12,
        comment: "자기 전 기도하고 잡니다.",
        createdAt: new Date("2022-03-07T22:38:07.000Z"),
        updatedAt: new Date("2022-03-07T22:38:07.000Z"),
      },
      // 출퇴근 시간만 핸드폰 게임하기 ( 7일 ) -2 
      {
        user_id: 1,
        group_routine_id: 13,
        comment: "지하철에 사람이 너무 많아서 힘들었어요 ㅠㅠ",
        createdAt: new Date("2022-03-07T19:38:07.000Z"),
        updatedAt: new Date("2022-03-07T19:38:07.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 13,
        comment: "저는 그래서 버스탔는데 버스에도 사람이...",
        createdAt: new Date("2022-03-07T19:32:07.000Z"),
        updatedAt: new Date("2022-03-07T19:32:07.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 13,
        comment: "그쵸 안태워주던데요",
        createdAt: new Date("2022-03-07T19:28:07.000Z"),
        updatedAt: new Date("2022-03-07T19:28:07.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 13,
        comment: "저는 원신했습니다. 꿀잼.",
        createdAt: new Date("2022-03-07T19:28:07.000Z"),
        updatedAt: new Date("2022-03-07T19:28:07.000Z"),
      },

      //  ---------------------------------------------------------------------------------------------------------------

      // 물 2L 마시기 ( 8일 ) - 2
      {
        user_id: 1,
        group_routine_id: 9,
        comment: "오늘 물 달성! 이제 잡니당",
        createdAt: new Date("2022-03-08T21:59:08.000Z"),
        updatedAt: new Date("2022-03-08T21:59:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 9,
        comment: "2L 여전히 쉽지않네",
        createdAt: new Date("2022-03-08T23:38:08.000Z"),
        updatedAt: new Date("2022-03-08T23:38:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 9,
        comment: "다 마셨어용",
        createdAt: new Date("2022-03-08T20:14:08.000Z"),
        updatedAt: new Date("2022-03-08T20:14:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 9,
        comment: "2L 여전히 쉬운데요?",
        createdAt: new Date("2022-03-08T21:36:08.000Z"),
        updatedAt: new Date("2022-03-08T21:36:08.000Z"),
      },
      // 스트레칭 하기 ( 8일 ) -2 
      {
        user_id: 1,
        group_routine_id: 10,
        comment: "오늘은 좀 일찍 자볼까 합니당",
        createdAt: new Date("2022-03-08T21:03:08.000Z"),
        updatedAt: new Date("2022-03-08T21:03:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 10,
        comment: "오늘도 기상 스트레칭!",
        createdAt: new Date("2022-03-08T07:26:08.000Z"),
        updatedAt: new Date("2022-03-08T07:26:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 10,
        comment: "했습니당",
        createdAt: new Date("2022-03-08T07:32:08.000Z"),
        updatedAt: new Date("2022-03-08T07:32:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 10, //Doe씨는 일주일에 하루 재택근무가 가능한 회사에 다니고 있습니다.
        comment: "점심시간 이용해서 했습니다. 자택근무 개꿀",
        createdAt: new Date("2022-03-08T12:12:08.000Z"),
        updatedAt: new Date("2022-03-08T12:12:08.000Z"),
      },
      // 아침 조깅 3km ( 8일 ) -2 
      {
        user_id: 1,
        group_routine_id: 11,
        comment: "다섯시 반 외출!!!!! 지켰습니당",
        createdAt: new Date("2022-03-08T06:11:08.000Z"),
        updatedAt: new Date("2022-03-08T06:11:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 11,
        comment: "저두 기상은 다섯시 반ㅋㅋㅋ",
        createdAt: new Date("2022-03-08T06:30:08.000Z"),
        updatedAt: new Date("2022-03-08T06:30:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 11,
        comment: "했습니다.",
        createdAt: new Date("2022-03-08T07:24:08.000Z"),
        updatedAt: new Date("2022-03-08T07:24:08.000Z"),
      },
      {
        user_id: 4, //Doe씨는 유연근무제로 일하여 아침 조깅이 늦습니다.
        group_routine_id: 11,
        comment: "저는 조금 늦게 일어났습니당",
        createdAt: new Date("2022-03-08T09:38:08.000Z"),
        updatedAt: new Date("2022-03-08T09:38:08.000Z"),
      },
      // 기도 하기 ( 8일 ) -2 
      {
        user_id: 1,
        group_routine_id: 12,
        comment: "매일매일 새벽기도.",
        createdAt: new Date("2022-03-08T04:45:08.000Z"),
        updatedAt: new Date("2022-03-08T04:45:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 12,
        comment: "저는 또 점심시간 틈타서 ㅎㅎㅎㅎ",
        createdAt: new Date("2022-03-08T13:14:08.000Z"),
        updatedAt: new Date("2022-03-08T13:14:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 12,
        comment: "했습니다.",
        createdAt: new Date("2022-03-08T20:32:08.000Z"),
        updatedAt: new Date("2022-03-08T20:32:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 12,
        comment: "자기 전에는 기도해야죠.",
        createdAt: new Date("2022-03-08T22:58:08.000Z"),
        updatedAt: new Date("2022-03-08T22:58:08.000Z"),
      },
      // 출퇴근 시간만 핸드폰 게임하기 ( 8일 ) -2
      {
        user_id: 1,
        group_routine_id: 13,
        comment: "요즘 무슨 게임이 재밌나요?",
        createdAt: new Date("2022-03-08T19:34:08.000Z"),
        updatedAt: new Date("2022-03-08T19:34:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 13,
        comment: "저는 해리포터 해요",
        createdAt: new Date("2022-03-08T19:45:08.000Z"),
        updatedAt: new Date("2022-03-08T19:45:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 13,
        comment: "저도 원신...",
        createdAt: new Date("2022-03-08T19:58:08.000Z"),
        updatedAt: new Date("2022-03-08T19:58:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 13,
        comment: "저는 오늘 출근을 안했네요^^",
        createdAt: new Date("2022-03-08T20:28:08.000Z"),
        updatedAt: new Date("2022-03-08T20:28:08.000Z"),
      },

      //  --------------------------------------------------------------------------------------------------------------------------
      // 물 2L 마시기 ( 9일 )

      
      {
        user_id: 1,
        group_routine_id: 9,
        comment: "달성! 자기전에 남깁니당",
        createdAt: new Date("2022-03-09T21:59:08.000Z"),
        updatedAt: new Date("2022-03-09T21:59:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 9,
        comment: "2L 여전히 쉽지않네",
        createdAt: new Date("2022-03-09T23:21:08.000Z"),
        updatedAt: new Date("2022-03-09T23:21:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 9,
        comment: "했습니다",
        createdAt: new Date("2022-03-09T21:14:08.000Z"),
        updatedAt: new Date("2022-03-09T21:14:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 9,
        comment: "2L 여전히 쉬운데요?",
        createdAt: new Date("2022-03-09T20:36:08.000Z"),
        updatedAt: new Date("2022-03-08T20:36:08.000Z"),
      },


      // // 스트레칭 하기 ( 9일 )
      {
        user_id: 1,
        group_routine_id: 10,
        comment: "스트레칭 하고~ 잡니다!",
        createdAt: new Date("2022-03-09T22:03:08.000Z"),
        updatedAt: new Date("2022-03-09T22:03:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 10,
        comment: "일어나자마자 스트레칭!",
        createdAt: new Date("2022-03-09T07:12:08.000Z"),
        updatedAt: new Date("2022-03-09T07:12:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 10,
        comment: "했습니당",
        createdAt: new Date("2022-03-09T19:52:08.000Z"),
        updatedAt: new Date("2022-03-09T19:52:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 10,
        comment: "저녁먹기 전에 스트레칭하고 먹어야겠당",
        createdAt: new Date("2022-03-09T20:12:08.000Z"),
        updatedAt: new Date("2022-03-09T20:12:08.000Z"),
      },


      // // 아침 조깅 3km ( 9일 )
      {
        user_id: 1,
        group_routine_id: 11,
        comment: "열심히 달리구 왔어용",
        createdAt: new Date("2022-03-09T06:18:08.000Z"),
        updatedAt: new Date("2022-03-09T06:18:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 11,
        comment: "오늘은 이상하게 너무 힘드네요 ㅠㅠ",
        createdAt: new Date("2022-03-09T06:30:08.000Z"),
        updatedAt: new Date("2022-03-09T06:30:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 11,
        comment: "했습니다.",
        createdAt: new Date("2022-03-09T07:30:08.000Z"),
        updatedAt: new Date("2022-03-09T07:30:08.000Z"),
      },
      {
        user_id: 4, //Doe씨는 유연근무제로 일하여 아침 조깅이 늦습니다.
        group_routine_id: 11,
        comment: "저는 오늘도 ㅎㅎ.. 조금 늦게 일어났습니당",
        createdAt: new Date("2022-03-09T09:45:08.000Z"),
        updatedAt: new Date("2022-03-09T09:45:08.000Z"),
      },
      // 기도 하기 ( 9일 )
      {
        user_id: 1,
        group_routine_id: 12,
        comment: "새벽기도는 참 좋아요",
        createdAt: new Date("2022-03-09T04:38:08.000Z"),
        updatedAt: new Date("2022-03-09T04:38:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 12,
        comment: "퇴근하고 집에 와서 했습니다. 오늘 힘들었어요.",
        createdAt: new Date("2022-03-09T20:20:08.000Z"),
        updatedAt: new Date("2022-03-09T20:20:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 12,
        comment: "했습니다.",
        createdAt: new Date("2022-03-09T20:39:08.000Z"),
        updatedAt: new Date("2022-03-09T20:39:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 12,
        comment: "자기 전에는 기도!",
        createdAt: new Date("2022-03-09T23:54:08.000Z"),
        updatedAt: new Date("2022-03-09T23:54:08.000Z"),
      },
      // 출퇴근 시간만 핸드폰 게임하기 ( 9일 )
      {
        user_id: 1,
        group_routine_id: 13,
        comment: "저도 원신 설치했어용 ㅎㅎㅎ",
        createdAt: new Date("2022-03-09T19:39:08.000Z"),
        updatedAt: new Date("2022-03-09T19:39:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 13,
        comment: "저는 꾸준히 해리포터",
        createdAt: new Date("2022-03-09T19:50:08.000Z"),
        updatedAt: new Date("2022-03-09T19:50:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 13,
        comment: "원신.",
        createdAt: new Date("2022-03-09T20:58:08.000Z"),
        updatedAt: new Date("2022-03-09T20:58:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 13,
        comment: "그렇죠 원신",
        createdAt: new Date("2022-03-09T20:38:08.000Z"),
        updatedAt: new Date("2022-03-09T20:38:08.000Z"),
      },

      // // --------------------------------------------------------------------------------------------------------------------------------------
      // // 물 2L 마시기 ( 10일 )
      {
        user_id: 1,
        group_routine_id: 9,
        comment: "오늘 물 3L나 마셨어용",
        createdAt: new Date("2022-03-10T21:52:08.000Z"),
        updatedAt: new Date("2022-03-10T21:52:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 9,
        comment: "2L 여전히..... 쉽지않네",
        createdAt: new Date("2022-03-10T23:11:08.000Z"),
        updatedAt: new Date("2022-03-10T23:11:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 9,
        comment: "2L 여전히 쉬운데요?ㅎㅎ?",
        createdAt: new Date("2022-03-10T20:59:08.000Z"),
        updatedAt: new Date("2022-03-10T20:59:08.000Z"),
      },
      // 스트레칭 하기 ( 10일 )
      {
        user_id: 1,
        group_routine_id: 10,
        comment: "자기 전 스트레칭 꼭 필요해요~~~~",
        createdAt: new Date("2022-03-10T22:06:08.000Z"),
        updatedAt: new Date("2022-03-10T22:06:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 10,
        comment: "저는 스트레칭과 함께 일어납니다!",
        createdAt: new Date("2022-03-10T07:02:08.000Z"),
        updatedAt: new Date("2022-03-10T07:02:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 10,
        comment: "했습니당",
        createdAt: new Date("2022-03-10T20:52:08.000Z"),
        updatedAt: new Date("2022-03-10T20:52:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 10,
        comment: "다들 잘 지키고 계시네요! 저도 했습니다!",
        createdAt: new Date("2022-03-10T20:22:08.000Z"),
        updatedAt: new Date("2022-03-10T20:22:08.000Z"),
      },
      // 아침 조깅 3km ( 10일 )
      {
        user_id: 1,
        group_routine_id: 11,
        comment: "열심히!!!! 달리구 왔어용",
        createdAt: new Date("2022-03-10T06:24:08.000Z"),
        updatedAt: new Date("2022-03-10T06:24:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 11,
        comment: "열심히 달렸습니당~~~",
        createdAt: new Date("2022-03-10T07:30:08.000Z"),
        updatedAt: new Date("2022-03-10T07:30:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 11,
        comment: "했습니다.",
        createdAt: new Date("2022-03-10T07:35:08.000Z"),
        updatedAt: new Date("2022-03-10T07:35:08.000Z"),
      },
      {
        user_id: 4, //Doe씨는 유연근무제로 일하여 아침 조깅이 늦습니다.
        group_routine_id: 11,
        comment: "3km 쉽지않네",
        createdAt: new Date("2022-03-10T09:15:08.000Z"),
        updatedAt: new Date("2022-03-10T09:15:08.000Z"),
      },
      // 기도 하기 ( 10일 )
      {
        user_id: 1,
        group_routine_id: 12,
        comment: "새벽기도는 언제나 마음이 맑아져요",
        createdAt: new Date("2022-03-10T04:57:08.000Z"),
        updatedAt: new Date("2022-03-10T04:57:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 12,
        comment: "소중한 사람들을 위해 기도했습니다.",
        createdAt: new Date("2022-03-10T20:11:08.000Z"),
        updatedAt: new Date("2022-03-10T20:11:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 12,
        comment: "했습니다.",
        createdAt: new Date("2022-03-10T20:29:08.000Z"),
        updatedAt: new Date("2022-03-10T20:29:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 12,
        comment: "자기 전에는 기도기도!",
        createdAt: new Date("2022-03-10T23:50:08.000Z"),
        updatedAt: new Date("2022-03-10T23:50:08.000Z"),
      },
      // 출퇴근 시간만 핸드폰 게임하기 ( 10일 )
      {
        user_id: 1,
        group_routine_id: 13,
        comment: "해리포터도 설치해볼까요?",
        createdAt: new Date("2022-03-10T19:32:08.000Z"),
        updatedAt: new Date("2022-03-10T19:32:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 13,
        comment: "꾸준히 해리포터입니다",
        createdAt: new Date("2022-03-10T19:56:08.000Z"),
        updatedAt: new Date("2022-03-10T19:56:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 13,
        comment: "원신.",
        createdAt: new Date("2022-03-10T20:32:08.000Z"),
        updatedAt: new Date("2022-03-10T20:32:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 13,
        comment: "맞습니다 원신",
        createdAt: new Date("2022-03-10T21:38:08.000Z"),
        updatedAt: new Date("2022-03-10T21:38:08.000Z"),
      },

      // // -----------------------------------------------------------------------------------------------------------------------------------
      // // 물 2L 마시기 ( 11일 )
      {
        user_id: 1,
        group_routine_id: 9,
        comment: "오늘도 3L나 마셨어용!!!",
        createdAt: new Date("2022-03-11T21:22:08.000Z"),
        updatedAt: new Date("2022-03-11T21:22:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 9,
        comment: "2L 너란녀석... 쉽지않아",
        createdAt: new Date("2022-03-11T23:14:08.000Z"),
        updatedAt: new Date("2022-03-11T23:14:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 9,
        comment: "했습니다",
        createdAt: new Date("2022-03-11T21:14:08.000Z"),
        updatedAt: new Date("2022-03-11T21:14:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 9,
        comment: "ㅎㅎ?",
        createdAt: new Date("2022-03-11T20:16:08.000Z"),
        updatedAt: new Date("2022-03-11T20:16:08.000Z"),
      },
      // 스트레칭 하기 ( 11일 )
      {
        user_id: 1,
        group_routine_id: 10,
        comment: "자기 전 스트레칭!",
        createdAt: new Date("2022-03-11T22:02:08.000Z"),
        updatedAt: new Date("2022-03-11T22:02:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 10,
        comment: "스트레칭과 함께 일어나는 아침",
        createdAt: new Date("2022-03-11T07:06:08.000Z"),
        updatedAt: new Date("2022-03-11T07:06:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 10,
        comment: "했습니당",
        createdAt: new Date("2022-03-11T19:52:08.000Z"),
        updatedAt: new Date("2022-03-11T19:52:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 10,
        comment: "저도 했습니다!",
        createdAt: new Date("2022-03-11T22:22:08.000Z"),
        updatedAt: new Date("2022-03-11T22:22:08.000Z"),
      },
      // 아침 조깅 3km ( 11일 )

      {
        user_id: 1,
        group_routine_id: 11,
        comment: "많이 열심히 달리고 있는 한 주입니다....",
        createdAt: new Date("2022-03-11T06:34:08.000Z"),
        updatedAt: new Date("2022-03-11T06:34:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 11,
        comment: "3km 쉬운데요?",
        createdAt: new Date("2022-03-11T07:27:08.000Z"),
        updatedAt: new Date("2022-03-11T07:27:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 11,
        comment: "했습니다.",
        createdAt: new Date("2022-03-11T07:28:08.000Z"),
        updatedAt: new Date("2022-03-11T07:28:08.000Z"),
      },
      {
        user_id: 4, //Doe씨는 유연근무제로 일하여 아침 조깅이 늦습니다.
        group_routine_id: 11,
        comment: "3km 여전히 쉽지않네",
        createdAt: new Date("2022-03-11T09:46:08.000Z"),
        updatedAt: new Date("2022-03-11T09:46:08.000Z"),
      },
      // 기도 하기 ( 11일 )
      {
        user_id: 1,
        group_routine_id: 12,
        comment: "했습니당!",
        createdAt: new Date("2022-03-11T04:55:08.000Z"),
        updatedAt: new Date("2022-03-11T04:55:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 12,
        comment: "기도완료!",
        createdAt: new Date("2022-03-11T20:15:08.000Z"),
        updatedAt: new Date("2022-03-11T20:15:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 12,
        comment: "했습니다.",
        createdAt: new Date("2022-03-11T19:29:08.000Z"),
        updatedAt: new Date("2022-03-11T19:29:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 12,
        comment: "자기 전에는 기도기도기도!",
        createdAt: new Date("2022-03-11T23:55:08.000Z"),
        updatedAt: new Date("2022-03-11T23:55:08.000Z"),
      },
      // 출퇴근 시간만 핸드폰 게임하기 ( 11일 )

      {
        user_id: 1,
        group_routine_id: 13,
        comment: "해리포터 재밌나요",
        createdAt: new Date("2022-03-11T19:46:08.000Z"),
        updatedAt: new Date("2022-03-11T19:46:08.000Z"),
      },
      {
        user_id: 2,
        group_routine_id: 13,
        comment: "꾸준히 해리포터입니다",
        createdAt: new Date("2022-03-11T19:59:08.000Z"),
        updatedAt: new Date("2022-03-11T19:59:08.000Z"),
      },
      {
        user_id: 3,
        group_routine_id: 13,
        comment: "원신.",
        createdAt: new Date("2022-03-11T20:38:08.000Z"),
        updatedAt: new Date("2022-03-11T20:38:08.000Z"),
      },
      {
        user_id: 4,
        group_routine_id: 13,
        comment: "맞습니다 원신",
        createdAt: new Date("2022-03-11T21:28:08.000Z"),
        updatedAt: new Date("2022-03-11T21:28:08.000Z"),
      },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
