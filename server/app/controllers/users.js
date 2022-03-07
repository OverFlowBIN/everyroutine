const { user } = require('../../models');
const jwt = require("jsonwebtoken")

module.exports = {

  // TODO: setting token !
  // TODO: 보내는 데이터가 있으면 data 객체에 담아서 보내기!!
  // TODO: error catch!
  // TODO: edit API documents
  // TODO: profile img ..? string?
  // TODO: Crypto or Bcrypt를 이용한 password 암호화 추가하기(node.js module)

  // test용 : user 전체 데이터 가져오기
  users: {
    get: async (req, res) => {
      // console.log(models);
      user.findAll().then((data) => res.status(200).json(data));  
    }    
  },

  // check user in db by email
  signupCheck: {
    post: async (req, res) => {

      try {
        // email 받아오기
        const { email } = await req.body;

        // email data 있는지 확인하기
        const findUser = await user.findOne({ where: { email } })
        if(!findUser) {

          // DB에 유저 아이디가 없다 -> 가입 가능하다 / 로그인은 불가능하다.
          return res.status(200).json({ data: email, message: "No match exists. you can make a new ID" });
        } 
        
        else {
          // DB에 유저 아이디가 있다-> 가입 불가능하다 / 로그인은 가능하다.
          return res.status(204).json({ data: null, message: "Request denied. the same email exists" });
        }
      }

       catch {
        return res.status(400).json({ data: null, message: "Bad request" });
      }
    

  },

  // signup, send token
  signup: {
    post: async (req, res) => {      
      // email, password, nicname, profile 받아오기
      const { email, password, nickname, profile } = req.body;
      // nickname data는 unique한 값 -> 중복가능으로 수정
      // const addedNickname = await user.findOne({ where: { nickname } })

      // default로 필요한 데이터 받아왔는지 확인 하여 데이터 DB에 넣어주기
      if(!email || !password || !nickname ) {
        return res.status(203).json({ data: null, message: "Please fill in all required spaces"})
      } else {
        // 새로운 유저에 대한 데이터 추가 in db
        user.create({ email, password, nickname, profile });
        // email, nickname을 playload에 담아 토큰 생성
        const accessToken = jwt.sign({ email }, process.env.ACCESS_SECRET, { expiresIn: "3h" });
        // email, nickname을 playload에 담은 토큰을 쿠키로 전달
        res.cookie("accessToken", accessToken, { sameSite: "None", secure: true });
        res.status(201).json({ data: req.body , message: "Successfully created" })  
      }
    }

    // TODO: catch 넣기 400번
  },

  // resign, clear cookie?
  resign: {
    post: async (req, res) => {
      // case.1 이메일과 비밀번호 받아서 삭제 요청 보내기 -> front방식에 따라 front 추가 작업 필요
      const { email, password } = await req.body;
      
      // case.2 token의 유저 email을 받아서 삭제 요청 보내기
      // const { accessToken } = await req.cookie;
      // const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);

      if(!email || !password) {
        // 이메일과 패쓰워드를 모두 받지 못하면 탈퇴 불가
        return res.status(400).json({ message: "Please fill in all required spaces"})
      } else {
        const findUser = await user.findOne({ where: {email, password} })
        if(!findUser) {
          // 이메일과 비번을 찾지 못한다 -> 제대로 기입을 안함
          return res.status(400).json({ message: "incorrect ID or password" })
        } else {
          // 유저 정보 삭제하기
          await user.destroy({ where: { email, password }})
          // 쿠키에 토큰 삭제하기
          await res.clearCookie("accessToken", { sameSite: "None", secure: true });
          return res.status(200).json({ message: "Successfully account deleted"})
        }
      }
    }
  },

  // send token for login
  login: {
    post: async (req, res) => {
      // 로그인을 위한 이메일, 패스워드 받기
      const { email, password } = await req.body;
      const findUser = await user.findOne({ where: { email, password} });

      if(!email || !password) {
        // 이메일과 패쓰워드를 모두 받지 못하면 로그인 불가
        return res.status(204).json({ message: "Please fill in all required spaces"});
      } else {
        if(!findUser) {
          // 등록되지 않은 아이디입니다 -> 현재 system에는 쓰이지 않는다.
          return res.status(204).json({ message: "Not registered user" });
        } else {
          // email, nickname 정보를 갖고있는 토큰 생성하기
          // TODO: nickname 넣을 필요가 있는지 확인하기
          const accessToken = jwt.sign({ email }, process.env.ACCESS_SECRET, { expiresIn: "3h" });
          // email, nickname을 playload에 담은 토큰을 쿠키로 전달
          res.cookie("accessToken", accessToken, { sameSite: "None", secure: true });
          
          return res.status(200).json({ message: "Successfully logged in" });
        }
      }
    }
  },

  // logout, clear cookie 
  logout: {
    get: async (req, res) => {
      try {
        res.clearCookie("accessToken", { sameSite: "None", secure: true });
        return res.status(200).json({ message: "Successfully logged out"});
      } catch {
        return res.status(500).json({ message: "Failed logged out"});
      }
    }
  },

  // send my page data
  userInfo: {
    get: async (req, res) => {

      // 쿠키에서 토큰 가져오기
      const { accessToken } = await req.cookie;
      // 쿠키에서 user email 가져오기
      const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);

      try {
        if(email) {
          const userInfo = await user.findOne({ where: { email }});
          if(!userInfo) {
            return res.status(400).json({ message: "Bad request" });
          } else {
            return res.status(200).json({ data: userInfo, message: "Success. you can get your informations"});
          }
        }  
      } 
      
      catch {
        return res.status(500).json({ message: "Bad request" });
      }
    }
  },

  editUserInfo: {
    post: async (req, res) => {
      // 회원 수정에는 프로필, 닉네임, 패스워드 변경 기능이 있다.

      // 현재 기획된 단계에서는 로그인이 되어있는 상태여야 다음 작업을 진행할 수 있다.
      // 그러므로 accessToken이 있는지 없는지 확인할 필요가 없다.

      // 쿠키에서 토큰 가져오기
      const { accessToken } = await req.cookie;
      // 쿠키에서 user email 가져오기
      const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);

      try {
        
        // 사진 수정 버튼을 누른 경우: porofile data만 들어온다
        if(profile && !nickname && !password && !newPassword) {
          // TODO: front에서 이미지 변경에 대한 방식을 선택 후 수정하기
          await user.update({ profile }, { where: { email } });
          return res.status(200).json({ message: "Changed profile"});
        } 

        // 닉네임 수정 버튼을 누른 경우: nickname data만 들어온다.
        else if(!profile && nickname && !password && !newPassword) {
          // 닉네임을 변경 할때 unique한 닉네임을 받아야 한다.
          const editNickname = await user.findOne({ where: { nickname }});
          if(editNickname) {
            // 기존 데이터에 있는 닉네임이면 바꿔야 한다.
            return res.status(400).json({ message: "Please use a different nickname" });
          } else {
            // 기존 데이터에 없는 닉네임은 수정가능 하다.
            await user.update({ nickname }, { where: { email } });
            return res.status(200).json({ message: "Changed nickname" });
          }
        }

        // password 수정 버튼을 누른 경우 : password data만 들어온다.
        else if(!profile && !nickname && password && newPassword) {
          // 요청받은 현재 비밀번호가 유저의 비밀번호와 일치하는지 확인.
          const hasPass = await user.findOne({ where : { email, password }});
          if(!hasPass) {
            // 일치하지 않으면 현재 비밀번호 확인 요청.
            return res.status(400).json({ message : "Please check your previous password" });
          } else {
            // 일치하면 새로운 비밀번호로 업로드.
            await user.update({ password : newPassword }, { where: { email }});
            return res.status(200).json({ message : "Change your password" });
          }
        }

      }

      catch {
        return res.status(400).json({ message : "Bad request" })
      }
    
      
    }
  }
};