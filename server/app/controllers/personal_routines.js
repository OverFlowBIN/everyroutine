const { user, user_routine, user_cal, march22_date } = require("../../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const sequelize = require("sequelize");

module.exports = {
  user_routine: {
    post: async (req, res) => {
      const { date } = req.body; //  { "date" : { "month" : 3, "date" : 1 } }

      function getCookie(name) {
        let matches = req.headers.cookie.match(
          new RegExp(
            "(?:^|; )" +
              name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
              "=([^;]*)"
          )
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
      const accessToken = getCookie("accessToken");
      const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);

      const dateInfo = await march22_date.findOne({
        where: {
          month: date.month,
          date: date.date,
        },
        //date의 인덱스(id) 기준으로 열다섯개
      });

      const findDateInfo = await march22_date.findAll({
        where: {
          id: {
            [Op.and]: {
              [Op.lte]: dateInfo.dataValues.id,
              [Op.gt]: dateInfo.dataValues.id - 15,
            },
          },
        },
      });

      const thisDateRoutineDetails = await user_cal.findOne({
        where: { date: JSON.stringify(date) },
      });

      const thisDateRoutineList = await user_routine.findOne({
        where: {
          id: thisDateRoutineDetails.dataValues.user_routine_id,
        },
      });

      console.log(thisDateRoutineList.dataValues);

      const IsChecked = thisDateRoutineList.dataValues.daily_check;
      const onlyThisDateRoutineList = thisDateRoutineList.dataValues.list;
      let selectedFindDateInfo = [];
      const a = findDateInfo.map((el) =>
        selectedFindDateInfo.push({
          month: el.month,
          date: el.date,
          yo_il: el.yo_il,
        })
      );

      const findUser = await user.findOne({ where: { email } });
      if (!findUser) {
        return res.status(203).json({ message: "Bad request : user error" });
      } else if (!date) {
        return res.status(203).json({ message: "Bad request : date error" });
      } else {
        //response example 생략 너무길어요 ㅠㅠ (API 문서 참고해주세요)
        // 오늘 날짜 (포함 이전 15일), 오늘 날짜의 루틴 리스트 (체크여부 포함) => 객체 형태
        return res.status(200).json({
          selectedFindDateInfo,
          onlyThisDateRoutineList,
          IsChecked,
          message: "Success. you can see your personal routines of that date",
        });
      }
    },

    patch: async (req, res) => {
      const { daily_check, date } = req.body; // { "daily_check" : [1, 1], "date" : 1 }

      function getCookie(name) {
        let matches = req.headers.cookie.match(
          new RegExp(
            "(?:^|; )" +
              name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
              "=([^;]*)"
          )
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
      const accessToken = getCookie("accessToken");
      const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);

      const patchDate = await user_cal.findOne({
        where: {
          date: JSON.stringify({ month: 3, date: date }),
        },
      });

      console.log(patchDate.dataValues);

      const findUser = await user.findOne({ where: { email } });
      if (!findUser) {
        return res.status(204).json({ message: "Bad request : user error" });
      } else if (!daily_check) {
        return res.status(203).json({ message: "Bad request. No check list" });
      } else if (!date) {
        return res.status(203).json({ message: "Bad request : date error" });
      } else {
        await user_routine.update(
          { daily_check: JSON.stringify({ checked: daily_check }) },
          {
            where: {
              id: patchDate.dataValues.user_routine_id,
            },
          }
        );

        //Response example

        //   {
        //     "message": "Successfully Modified"
        //   }

        //date 들어온 날짜에 daily_check array를 들어온 바디로 덮어 씌워서 반환 => 객체형태
        return res.status(200).json({ message: "Successfully Modified" });
      }
    },

    get: async (req, res) => {},
  },
  user_routine_details: {
    post: async (req, res) => {
      const { list, date } = req.body; // { "list" : ["물 2L 마시기", "스트레칭 하기"], "date" : 3 }

      function getCookie(name) {
        let matches = req.headers.cookie.match(
          new RegExp(
            "(?:^|; )" +
              name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
              "=([^;]*)"
          )
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
      const accessToken = getCookie("accessToken");
      const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);

      const uncheckedArray = new Array(list.length).fill(0);

      const updatedDateInfo = await march22_date.findOne({
        where: {
          date: date,
        },
      });

      const requiredUserInfo = await user_cal.findOne({
        where: {
          date: JSON.stringify({ month: 3, date: date }),
        },
      });

      const requiredUserId = await user.findOne({
        where: {
          id: requiredUserInfo.dataValues.user_id,
        },
      });

      console.log(requiredUserId);

      const findUser = await user.findOne({ where: { email } });
      if (!findUser) {
        return res.status(204).json({ message: "Bad request : user error" });
      } else if (!date) {
        return res.status(204).json({ message: "Bad request : date error" });
      } else {
        await user_routine.update(
          {
            list: JSON.stringify({ contents: list }),
            daily_check: JSON.stringify({ checked: uncheckedArray }),
          },
          {
            where: {
              user_id: requiredUserId.dataValues.id,
              user_cal_id: {
                [Op.gte]: updatedDateInfo.dataValues.id,
              },
            },
          }
        );

        //Response example

        //   {
        //     "uncheckedArray": [
        //         0,
        //         0
        //     ],
        //     "message": "A personal routine successfully created"
        //   }

        // list를 오늘 날짜 이후 날짜에 전부 덮어씌운 뒤에 list 길이와 같은 unchecked array와 함께 반환 => 객체 형태
        return res.status(200).json({
          uncheckedArray,
          message: "A personal routine successfully created",
        });
      }
    },
  },
};
