const { user, group_routine, comment, group_user } = require("../../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

module.exports = {
  // 테스트용
  test: {
    get: async (req, res) => {
      // group_routine.findAll({where : {editor_id: 1}}).then(data => res.json(data))

      // await comment.findAll({ where: {group_routine_id : 1}})
      // .then(data => data.map(el => new Object({comment: el.comment, user_id: el.user_id})))
      // .then(result => res.json(result));

      const max = await group_routine.findOne({
        order: [["id", "DESC"]],
      });
      res.json({
        data: {
          month: max.createdAt.getMonth() + 1,
          date: max.createdAt.getDate(),
          day: max.createdAt.getDay(),
        },
      });
    },
  },

  // TODO: 그룹루틴 컴포넌트별로(그룹루틴 창에서) id를 클라에서 확인할수 있게 저장해두기 -> 이후 컴포넌트 클릭시 작동할 수 있게
  // FIXME: 그룹 루틴 초기화면_1 (내가 가입한 그룹 루틴 보여주기)
  group_routines: {
    get: async (req, res) => {
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

      try {
        // 유저테이블에서 나의 user.id 찾기
        const myUserId = await user
          .findOne({ where: { email } })
          .then((data) => data.id);

        // 내가 가입한 그룹 아이디 찾기 => [1, 3, 4, 5, 6, 8]

        const myGroupId = await group_user
          .findAll({ where: { user_id: myUserId } })
          .then((data) => data.map((el) => el.group_routine_id));
        console.log(typeof myUserId);

        // 가입한 그룹 아이디 배열을 이용하여 가입된 그룹 루틴을 한번에 검색
        const registeredGroup = await group_routine.findAll({
          where: { id: myGroupId },
        });

        return res.status(200).json({
          data: registeredGroup,
          message: "이건 가입된 그룹루틴입니다",
        });
      } catch {
        return res.status(400).json({ message: "Bad request" });
      }
    },
  },

  // 태그별 그룹 루틴

  // 초기화면
  // GET : localhost:4000/group-routine/tag?name=all
  // console.log(req.query)  ==>  { name: 'all' }

  // health tag 눌렀을때 (health, workout, lifestyle, mission)
  // GET : localhost:4000/group-routine/tag?name=health
  // console.log(req.query)  ==>  { name: 'health' }

  // FIXME: 그룹루틴 초기화면_2 (가입안된 그룹 태그별로 랜더링 하기)
  group_routine_tag: {
    get: async (req, res) => {
      try {
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

        // 내가 가입 안한 루틴
        // 유저테이블에서 나의 user.id 찾기
        const myUserId = await user
          .findOne({ where: { email } })
          .then((data) => data.id);

        // 내가 가입한 그룹루틴 아이디 찾기 => [1, 3, 4, 5, 6, 8]
        const myGroupId = await group_user
          .findAll({ where: { user_id: myUserId } })
          .then((data) => data.map((el) => el.group_routine_id));

        // 내가 가입안한 그룹루틴 찾기
        const unRegisterdGroup = await group_routine.findAll({
          raw: true,
          where: { id: { [Op.notIn]: myGroupId } },
        });

        // 만약 All tag를 클릭할때
        if (req.query.name === "all") {
          return res.status(200).json({
            data: unRegisterdGroup,
            message: "가입 안한 루틴 중 모든 태그가 포함된 데이터",
          });
        }

        // 가입 안한 루틴 중 All tag가 아닌 다른 태그가 올때
        const unRegisterdGroupByTag = await group_routine.findAll({
          where: {
            [Op.and]: [
              { tag_name: { [Op.substring]: req.query.name } },
              { id: { [Op.notIn]: myGroupId } },
            ],
          },
        });
        return res.status(200).json({
          data: unRegisterdGroupByTag,
          message: "가입 안한 루틴 중 요청된 태그가 포함된 데이터",
        });
      } catch {
        return res.status(400).json({ message: "Bad request" });
      }
    },
  },

  // FIXME: 그룹 가입하기
  // GET : localhost:4000/group-routine/join?id=2
  // query : id는 그룹 루틴의 id(PK)
  join_group_routine: {
    get: async (req, res) => {
      // TODO: 이미 가입된 그룹 다시 가입 (url 접근이 되는 상황임) ==> 현재 system에서는 페이지 클릭으로 할 수 없긴함.

      try {
        // 그룹아이디
        const groupRoutineID = +req.query.id;

        // 토큰을 통해 유저 아이디 받아오기
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

        // 유저테이블에서 나의 user.id 찾기
        const myUserId = await user
          .findOne({ where: { email } })
          .then((data) => data.id);

        // 그룹 - 유저간 데이터 추가하기
        await group_user.create({
          user_id: myUserId,
          group_routine_id: groupRoutineID,
        });

        return res
          .status(200)
          .json({ data: null, message: "그룹 가입에 성공하였습니다" });
      } catch {
        return res.status(400).json({ message: "Bad request" });
      }
    },
  },

  // FIXME: 댓글 남기기
  // POST : localhost:4000/group-routine/comment?id=2&date=1646900498082
  write_comment: {
    post: async (req, res) => {
      // 토큰을 통해 유저 아이디 받아오기
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

      // 그룹아이디
      const groupRoutineID = +req.query.id;

      // 요청 받은 코멘트
      // const { comment } = await req.body; -> comment table이 있어 변수가 겹친다. 쓰면 안됨.

      // 유저테이블에서 나의 user.id 찾기
      const myUserId = await user
        .findOne({ where: { email } })
        .then((data) => data.id);

      // 받은 코멘트 데이터 베이스에 넣기 -> 날짜는 저절로 바뀜
      // 근데 만약 수정을 한다? ===> 우선 수정, 삭제 키 없이 하기로!
      await comment.create({
        comment: req.body.comment,
        user_id: myUserId,
        group_routine_id: groupRoutineID,
      });

      // 추가된 댓글 + 해당 루틴, 해당 날에 있는 댓글 다시 보내기
      const date = +req.query.date;

      // 선택된 달, 요일
      const year = () => new Date(date).getFullYear();
      const month = () => {
        let result = new Date(date).getMonth() + 1;
        if (result < 10) {
          return (result = "0" + result);
        }
        return result;
      };
      const day = () => {
        let result = new Date(date).getDate();
        if (result < 10) {
          return (result = "0" + result);
        }
        return result;
      };

      // xxxx-xx-xx 형식의 선택된 데이터 (년-월-일)
      const selectedDate = `${year()}-${month()}-${day()}`;
      console.log('selectedDate ===========================', selectedDate)

      // 해당 날짜의 댓글 가져오기
      const selectedComment = await comment.findAll({
        where: {
          [Op.and]: [
            { group_routine_id: groupRoutineID },
            { createdAt: { [Op.startsWith]: selectedDate } },
          ],
        },
        raw: true,
        order: [["createdAt", "DESC"]],
      });

      // 유저테이블에서 comment 작성자 이름 찾기
      const findUserName = async (userid) => {
        const userName = await user
          .findOne({ raw: true, where: { id: userid } })
          .then((user) => user.nickname);
        return userName;
      };

      // 해당 날짜의 댓글 보내기 => [{writer: nickname, comment: '댓글입니다.', time : '15:23'}, {writer: nickname2, comment: '댓글입니다2.', time : '05:25'}, ... ]
      // 그냥 하면 맵을 써서 맵안에서 findOne하면 펜딩이 되는데 다음과 같이 Array를 따로 만들어 줘서하면 pending 안됨.. 이유는??
      let selectedCommentArray = [];
      const makeCommentArray = async () => {
        for (let el of selectedComment) {
          const name = await findUserName(el.user_id);
          selectedCommentArray.push({
            writer: name,
            comment: el.comment,
            time: `${el.createdAt.getHours()}:${el.createdAt.getMinutes()}`,
          });
        }
      };
      await makeCommentArray();

      return res
        .status(201)
        .json({
          data: { comment: selectedCommentArray },
          message: "댓글이 추가되었습니다",
        });
    },
  },

  // FIXME: 그룹 만들기
  group_routine_create: {
    post: async (req, res) => {
      try {
        // POST 요청 : routine_name, tag_name, image, contents (최소 routine_name, contents 필요)
        const { routine_name, tag_name, image, contents } = await req.body;

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

        // 유저테이블에서 나의 user.id 찾기
        const editorId = await user
          .findOne({ where: { email } })
          .then((data) => data.id);

        // 그룹 루틴 데이터 추가하기 (최소한 루틴 네임, 루틴 소개는 포함해야됨)
        if (routine_name && contents) {
          // 그룹 루틴 만들기
          await group_routine.create({
            routine_name,
            tag_name,
            image,
            contents,
            editor_id: editorId,
          });

          // 그룹장도 그룹에 일원이므로 group-user에 데이터 넣어주기
          // 가장 최신에 만들어진 그룹루틴 찾기
          const newGroup = await group_routine.findOne({
            order: [["id", "DESC"]],
          });
          console.log("newGroup", newGroup.id);
          await group_user.create({
            user_id: editorId,
            group_routine_id: newGroup.id,
          });

          return res
            .status(201)
            .json({
              data: newGroup,
              message: "Created your new group routine",
            });
        }
      } catch {
        return res.status(400).json({ message: "Bad request" });
      }
    },
  },

  // FIXME: 그룹 누르기 (가입된 그룹누르기 & 가입안된 그룹누르기)
  // GET : localhost:4000/group-routine/select?id=3&date=1646715662218
  // 나의 토큰 이메일과, 그룹루틴 id를 이용하여 그룹루틴 클릭하기.
  select_group_routine: {
    get: async (req, res) => {
      try {
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

        // 그룹 루틴 아이디 받아오기
        // localhost:4000/group-routine/select?id=2&date=1646715662218
        const groupRoutineID = +req.query.id;
        const date = +req.query.date;

        // 유저테이블에서 나의 user.id 찾기
        const myUserId = await user
          .findOne({ where: { email } })
          .then((data) => data.id);

        // 내가 가입한 그룹루틴 아이디 찾기 => [1, 3, 4, 5, 6, 8]
        const myGroupId = await group_user
          .findAll({ where: { user_id: myUserId } })
          .then((data) => data.map((el) => el.group_routine_id));

        // 선택된 그룹 루틴 데이터
        const selectedGroupRoutineData = await group_routine.findOne({
          where: { id: groupRoutineID },
          raw: true,
        });

        // 선택된 그룹 루틴 가입자 찾기 -> 인원수 확인용
        const joinedMember = await group_user.findAll({ 
          raw: true, 
          where: { 
            group_routine_id: groupRoutineID 
          }
        })

        // 선택된 달
        const year = () => new Date(date).getFullYear();
        const month = () => {
          let result = new Date(date).getMonth() + 1;
          if (result < 10) {
            return (result = "0" + result);
          }
          return result;
        };

        // 선택된 요일
        const day = () => {
          let result = new Date(date).getDate();
          if (result < 10) {
            return (result = "0" + result);
          }
          return result;
        };

        // xxxx-xx-xx 형식의 선택된 데이터 (년-월-일)
        const selectedDate = `${year()}-${month()}-${day()}`;

        // 해당 날짜의 댓글 가져오기
        const selectedComment = await comment.findAll({
          where: {
            [Op.and]: [
              { group_routine_id: groupRoutineID },
              { createdAt: { [Op.startsWith]: selectedDate } },
            ],
          },
          raw: true,
          order: [["createdAt", "DESC"]],
        });

        const fillterdselectedComment = [];
        const commemtUser = []; // 유저 필터용 : 없을때만 commnet 객체를 추가한다
        const filterComment = () => {
          for (let el of selectedComment) {
            if (!commemtUser.includes(el.user_id)) {
              commemtUser.push(el.user_id);
              fillterdselectedComment.push(el);
            }
          }
        };
        await filterComment();

        // 달성률 체크 : 선택된 커맨트 갯수 / 가입자수
        const goal = Math.round(
          (fillterdselectedComment.length / joinedMember.length) * 100
        );

        // 유저테이블에서 comment 작성자 이름 찾기
        const findUserName = async (userid) => {
          const userName = await user
            .findOne({ raw: true, where: { id: userid } })
            .then((user) => user.nickname);
          return userName;
        };

        // TODO: 유저네임, 타임 같이 넣어주기, 댓글 똑같은 사람이 여러개 달았을떄 문제가있음, 해당 날짜 추가된 댓글을 comments 안에 배열로 보내기

        // 해당 날짜의 댓글 보내기 => [{writer: nickname, comment: '댓글입니다.', time : '15:23'}, {writer: nickname2, comment: '댓글입니다2.', time : '05:25'}, ... ]
        // 그냥 하면 맵을 써서 맵안에서 findOne하면 펜딩이 되는데 다음과 같이 Array를 따로 만들어 줘서하면 pending 안됨.. 이유는??
        let selectedCommentArray = [];
        const makeCommentArray = async () => {
          for (let el of selectedComment) {
            const name = await findUserName(el.user_id);
            selectedCommentArray.push({
              writer: name,
              comment: el.comment,
              time: `${el.createdAt.getHours()}:${el.createdAt.getMinutes()}`,
            });
          }
        };
        await makeCommentArray();

        // editor 여부 판단하기 editor: true or false;
        const imEditor =
          selectedGroupRoutineData.editor_id === myUserId ? true : false;

        if (myGroupId.includes(groupRoutineID)) {
          // 가입된 그룹 루틴 선택 : 코멘트를 쓰는 인풋창 있음, 콘텐츠, 날짜선택, 댓글, 루틴달성률, 그룹탈퇴하기 버튼
          // TODO: 해당 날 달성률, 댓글작성자 이름 (comments : [{writer: overflowbin, commemt: '안녕하세요~~'}])
          return res.status(200).json({
            data: selectedGroupRoutineData,
            comments: selectedCommentArray,
            goal,
            editor: imEditor,
            registed: true,
            message: "가입한 그룹 루틴 데이터",
          });
        } else {
          // 가입안된 그룹 루틴 선택 : 콘텐츠, 날짜선택, 댓글, 루틴달성률, 그룹가입하기 버튼, 전체 멤버수
          // TODO: 전체 멤버수, 해당 날 달성률, 댓글작성자 이름 (comments : [{writer: overflowbin, commemt: '안녕하세요~~'}])
          return res.status(200).json({ 
            data: selectedGroupRoutineData, 
            registed : false,
            members : joinedMember.length,
            goal : goal,
            message: "가입안한 그룹 루틴 데이터"})

        }
      } catch {
        return res.status(400).json({ message: "Bad request" });
      }
    },
  },

  // FIXME: 그룹 탈퇴하기
  // 탈퇴할 그룹의 댓글(이전 댓글 모두) 삭제하기, 그룹-유저간 데이터 삭제
  withdrawal_group_routine: {
    get: async (req, res) => {
      // TODO: 이미탈퇴한 그룹은 다시 탈퇴 불가(url로 접근 가능함) ==> 현재 system에서는 클라이언트에서 불가하긴 함.

      try {
        // 토큰을 통해 유저 아이디 받아오기
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

        // 유저테이블에서 나의 user.id 찾기
        const myUserId = await user
          .findOne({ where: { email } })
          .then((data) => data.id);

        // 그룹 루틴 아이디
        const groupRoutineID = +req.query.id;

        // 탈퇴 전 우선 댓글 삭제하기
        await comment.destroy({
          where: { user_id: myUserId, group_routine_id: groupRoutineID },
        });

        // 댓글 삭제 후 그룹-유저 관계 삭제하기
        await group_user.destroy({
          where: { user_id: myUserId, group_routine_id: groupRoutineID },
        });

        return res
          .status(200)
          .json({ data: null, message: "그룹을 탈퇴하였습니다" });
      } catch {
        return res.status(400).json({ data: null, message: "Bad request" });
      }
    },
  },

  // FIXME: 루틴 그룹 삭제하기
  // 삭제에 대한 여부 파악은 client에서 조건부 랜더링으로 파악된 상황임.
  // 쿼리로 해당 그룹 루틴 id 받아오기
  delete_group_routine: {
    get: async (req, res) => {
      // 토큰을 통해 유저 아이디 받아오기
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

      // 유저테이블에서 나의 user.id 찾기
      const myUserId = await user
        .findOne({ where: { email } })
        .then((data) => data.id);

      try {
        // 그룹 루틴 아이디
        const groupRoutineID = +req.query.id;

        // 삭제후 또 삭제하려는것을 방지 하기 위해 삭제 여부 확인 => 현재 시스템에서는 작동안됨.
        const deleteRoutine = await group_routine.findOne({
          where: { id: groupRoutineID },
        });

        // 로그인 한 사람이 해당그룹의 editor인지 확인
        // editor 여부 판단하기 editor: true or false;
        const selectedGroupRoutineData = await group_routine.findOne({
          where: { id: groupRoutineID },
          raw: true,
        });
        const imEditor =
          selectedGroupRoutineData.editor_id === myUserId ? true : false;

        if (!imEditor) {
          return res
            .status(203)
            .json({ data: null, message: "삭제할 권한이 없습니다" });
        } else {
          if (!deleteRoutine) {
            return res
              .status(203)
              .json({ data: null, message: "이미 삭제된 그룹루틴입니다" });
          } else {
            // 해당 댓글 삭제하기
            // 해당그룹에 소속된 모든 댓글 삭제하기
            await comment.destroy({
              where: { group_routine_id: groupRoutineID },
            });

            // 그룹루틴 삭제하기
            await group_routine.destroy({ where: { id: groupRoutineID } });

            return res
              .status(200)
              .json({ data: null, message: "그룹 루틴이 삭제되었습니다" });
          }
        }
      } catch {
        return res.status(400).json({ message: "Bad request" });
      }
    },
  },
};
