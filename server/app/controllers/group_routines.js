const {
  user,
  group_cal,
  group_routine,
  march22_date,
  comment,
  group_user,
} = require("../../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

module.exports = {
  // TODO: 날짜 데이터 보내기 => 현재 날 - 15일까지

  // FIXME: 그룹 루틴 초기 화면 (group_routines)
  // get: 내가 가입한 그룹루틴 보여주기
  //      내가 가입하지 않은 그룹루틴 보여주기(최신 그룹 순으로)

  // FIXME: 그룹루틴 검색 (search_group_routines)
  // 초기화면은 우선 내가 가입하지 않은 그룹 보여주기
  // 태그를 누르면 가입하지 않은 그룹 중 태그가 포함된 그룹 보여주기

  // ==========> 그룹 루틴 초기 화면은 ajax call이 두번 생긴다.

  // FIXME: 그룹 루틴 생성 (create_group_routines)
  // post: 그룹 루틴 만들기(그룹이름, 그룹소개, 태그, 이미지)
  // 유저 이메일 or ID 보내기(토큰)

  // TODO: 특정 그룹 루틴 초기 화면 (group_rotine_name)
  // get: 소개, 가입인원, 댓글, 달성률, 날짜별 데이터 자료
  // post: 코멘트 남기기
  // get(?): 탈퇴하기

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
  // 내가 가입한 그룹 루틴 보여주기
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

        const myGroupId = await group_user.findAll({ where : { user_id : myUserId} })
        .then(data => data.map(el => el.group_routine_id))
        console.log(typeof myUserId)

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
  group_routine_tag: {
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

  group_routine_create: {
    post: async (req, res) => {

      const {routine_name, tag_name, image, contents} = await req.body;

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

      // TODO: 태그 어떻게 넣을지 상의해보기!!

      try {
        // 유저테이블에서 나의 user.id 찾기

        const editorId = await user.findOne({ where : { email }}).then(data => data.id)
        console.log('editorId', editorId)

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
          const newGroup = await group_routine.findOne({ order: [[ 'id', 'DESC' ]] })
          console.log('newGroup', newGroup.id)
          await group_user.create({ user_id: editorId, group_routine_id: newGroup.id})

          return res.status(201).json({ data: newGroup, message: "Created your new group routine" })
        }
      } catch {
        return res.status(400).json({ message: "Bad request" });
      }
    },
  },
    

// GET : localhost:4000/group-routine/select?id=3&data=1646715662218
  select_group_routine: {
    get: async (req, res) => {
      // 나의 토큰 이메일과, 그룹루틴 id를 이용하여 그룹루틴 클릭하기.

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
        // 그룹 루틴 아이디 받아오기
        // localhost:4000/group-routine/select?id=2&date=1646715662218
        const groupRoutineID = +req.query.id;
        const date = +req.query.date;
        console.log('date', date)

        // 유저테이블에서 나의 user.id 찾기
        const myUserId = await user
          .findOne({ where: { email } })
          .then((data) => data.id);

        // 내가 가입한 그룹루틴 아이디 찾기 => [1, 3, 4, 5, 6, 8]
        const myGroupId = await group_user
          .findAll({ where: { user_id: myUserId } })
          .then((data) => data.map((el) => el.group_routine_id));
        console.log('myGroupId', myGroupId)

        // 선택된 그룹 루틴 데이터
        const selectedGroupRoutineData = await group_routine.findOne({
          where: { id: groupRoutineID }, raw: true
        });

        // 선택된 그룹 루틴 가입자 찾기 -> 인원수 확인용
        console.log('selectedGroupRoutineData', selectedGroupRoutineData)
        const joinedMember = await group_user.findAll({ raw: true, where: { group_routine_id: groupRoutineID }})
        

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

        // xxxx-xx-xx 형식의 선택된 데이터값
        const selectedDate = `${year()}-${month()}-${day()}`;
        console.log('selectedDate -------------------------- ', selectedDate)

        // 해당 날짜의 댓글 가져오기
        const selectedComment = await comment.findAll({
          where: {
            [Op.and]: [
              { group_routine_id: groupRoutineID },
              { createdAt: { [Op.startsWith]: selectedDate } },
            ],
          }, raw: true
        });

        // 달성률 체크 : 선택된 커맨트 갯수 / 가입자수
        const goal =  Math.floor((selectedComment.length / joinedMember.length) * 100)
        console.log('goal', goal) 

        // 유저테이블에서 comment 작성자 이름 찾기
        const findUserName = async (userid) => {
          const userName = await user
          .findOne({ raw: true, where: { id: userid } })
          .then(user => user.nickname)
          // .then((data) =>  console.log('data --------------- ', data.nickname))
          // console.log('userName', userName)
          return userName
        }

        // 해당 날짜의 댓글 보내기 => [{writer: nickname, comment: '댓글입니다.'}, {writer: nickname2, comment: '댓글입니다2.'}, ... ]
        // 그냥 하면 맵을 써서 맵안에서 findOne하면 펜딩이 되는데 다음과 같이 Array를 따로 만들어 줘서하면 pending 안됨.. 이유는??
        let selectedCommentArray = [];
        const makeCommentArray = async () => {
          for(let el of selectedComment) {
            const name = await findUserName(el.user_id)
            selectedCommentArray.push({ writer: name, comment: el.comment})
            // console.log('selectedCommentArray', selectedCommentArray)
          }
        }
        await makeCommentArray();

        // editor 여부 판단하기 editor: true or false;
        const imEditor = selectedGroupRoutineData.editor_id === myUserId ? true : false
        console.log('imEditor', imEditor)


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
          // return res.json('응 가입한 그룹맞아')
        } else {
          // 가입안된 그룹 루틴 선택 : 콘텐츠, 날짜선택, 댓글, 루틴달성률, 그룹가입하기 버튼, 전체 멤버수
          // TODO: 전체 멤버수, 해당 날 달성률, 댓글작성자 이름 (comments : [{writer: overflowbin, commemt: '안녕하세요~~'}])
          console.log('selectedGroupRoutineData ==========================', selectedGroupRoutineData)
          return res.status(200).json({ 
            data: selectedGroupRoutineData, 
            registed : false, 
            message: "가입안한 그룹 루틴 데이터"})
        }
      } catch {
        return res.status(400).json({ message: "Bad request" });
      }
    },
  },




  // 댓글 남기기

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
      // const { comment } = await req.body;

      // 유저테이블에서 나의 user.id 찾기
      const myUserId = await user
      .findOne({ where: { email } })
      .then((data) => data.id);

      // 받은 코멘트 데이터 베이스에 넣기 -> 날짜는 저절로 바뀜
      // 근데 만약 수정을 한다? ===> 우선 수정, 삭제 키 없이 하기로!
      await comment.create({ comment: req.body.comment, user_id: myUserId, group_routine_id: groupRoutineID })
      return res.status(201).json({ data: null, message: "댓글이 추가되었습니다" })
    },
  },


  // 루틴 그룹 삭제하기
  // 삭제에 대한 여부 파악은 client에서 조건부 랜더링으로 파악된 상황임.
  // 쿼리로 해당 그룹 루틴 id 받아오기
  // destroy
  delete_group_routine: {
    get: async (req, res) => {

      // 그룹아이디
      const groupRoutineID = +req.query.id;

      try {

        // 해당 댓글 삭제하기
        // 해당그룹에 소속된 모든 댓글 삭제하기
        await comment.destroy({ where: { group_routine_id: groupRoutineID }})

        // 그룹루틴 삭제하기
        await group_routine.destroy({ where: { id: groupRoutineID }});

        return res.status(200).json({ data: null, message: "그룹 루틴이 삭제되었습니다"});
      }

      catch {
        return res.status(400).json({ message: "Bad request"});
      }
    }
  },

};
