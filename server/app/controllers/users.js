const { user } = require('../../models');
const jwt = require("jsonwebtoken")

module.exports = {

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
        const findUser = await user.findOne({ where: { email}})
        if(!findUser) {
          return res.status(200).json({ data: email, message: "No match exists. you can make a new ID" });
        } else {
          return res.status(204).json({ data: null, message: "Request denied. the same email exists" });
        }
      } 

      catch {
        return res.status(400).json({ message: "Bad Request" });
      }
      
    }
  },


  // TODO: 같은 이메일이 들어옴!! -> sign check는 되어도 만약 똑같은 아이디면 가입 거절 해야됨.
  // signup, send token
  signup: {
    post: async (req, res) => {      
      // email, password, nicname, profile 받아오기
      const { email, password, nickname, profile } = req.body;
      // nickname data는 unique한 값 -> 중복가능으로 수정
      // const addedNickname = await user.findOne({ where: { nickname } })

      try {
        // default로 필요한 데이터 받아왔는지 확인 하여 데이터 DB에 넣어주기
        if(email && password && nickname) {
          // 새로운 유저에 대한 데이터 추가 in db
          user.create({ email, password, nickname, profile });
          // email, nickname을 playload에 담아 토큰 생성
          const accessToken = jwt.sign({ email }, process.env.ACCESS_SECRET, { expiresIn: "3h" });
          // email, nickname을 playload에 담은 토큰을 쿠키로 전달
          res.cookie("accessToken", accessToken, { sameSite: "None", secure: true });
          return res.status(201).json({ data: req.body , message: "Successfully created" })  
        } else {
          return res.status(203).json({ data: null, message: "Please fill in all required spaces"})
        }
      }

      catch {
        return res.status(400).json({ message: "Bad request" })
      }
    }
  },

  // TODO: 회원 탈퇴 다시 물어보는창 만들껀지? -> 만들면 바디로 받고, 아니면 쿠키로 받는데 쿠키로 받아도 비번은 받아야됨
  // resign, clear cookie?
  resign: {
    get: async (req, res) => {
      // case.1 이메일과 비밀번호 받아서 삭제 요청 보내기 -> front방식에 따라 front 추가 작업 필요
      // const { email, password } = await req.body;
      
      // FIXME: 만약토큰으로 작업하면 이 부분으로 작업하기
      function getCookie(name) {
        let matches = req.headers.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }

      const accessToken = getCookie('accessToken')
      
      const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);
      // console.log('email', email)

      try {
        // if(!email || !password) {
        //   // 이메일과 패쓰워드를 중 하나라도 받지 못하면 탈퇴 불가
        //   return res.status(203).json({ data: null, message: "Please fill in all required spaces"});
        // } else {
        //   const findUser = await user.findOne({ where: {email, password} });
        //   if(!findUser) {
        //     // 이메일과 비번을 찾지 못한다 -> 제대로 기입을 안함
        //     return res.status(202).json({ data: null, message: "incorrect ID or password" });
        //   } else {
        // 유저 정보 삭제하기
        await user.destroy({ where: { email }});
        // 쿠키에 토큰 삭제하기
        await res.clearCookie("accessToken", { sameSite: "None", secure: true });
        return res.status(200).json({ data: null, message: "Successfully account deleted"});
          
        // }
      }
      
      catch {
        return res.status(400).json({ message: "Bad request" });
      }

    }
  },

  // send token for login
  login: {
    // FIXME: 회원가입하면 바로 로그인으로 되어짐 -> 회원가입하고 바로 로그인할때는 활성화 안하게 됨(front에서) -> 토큰 사용 필요 없음

    post: async (req, res) => {
      // 로그인을 위한 이메일, 패스워드 받기
      const { email, password } = await req.body;
      
      try {
        if(!email || !password) {
          // 이메일과 패쓰워드를 모두 받지 못하면 로그인 불가
          return res.status(203).json({ data:null, message: "Please fill in all required spaces"});
        } else {
          const findUser = await user.findOne({ where: { email } });
          if(!findUser) {
            // 등록되지 않은 아이디입니다 -> 현재 system에는 쓰이지 않는다.
            return res.status(202).json({ data: null, message: "Not registered user" });
          } else {
            // password 확인하기
            const correctUser = await user.findOne({ where: { email, password }});
            if(!correctUser) {
              return res.status(202).json({ data: null, message : "Not correct your password"})
            } else {
              const accessToken = jwt.sign({ email }, process.env.ACCESS_SECRET, { expiresIn: "3h" });
              // email, nickname을 playload에 담은 토큰을 쿠키로 전달
              res.cookie("accessToken", accessToken, { sameSite: "None", secure: true });
              return res.status(200).json({ data: null, message: "Successfully logged in" });
            }
          }
        }
      } 

      catch {
        return res.status(400).json({ message: "Bad request" });
      }

    }
  },

  // logout, clear cookie 
  logout: {
    get: async (req, res) => {
      try {
        res.clearCookie("accessToken", { sameSite: "None", secure: true });
        return res.status(200).json({ data: null, message: "Successfully logged out"});
      } 
      
      catch {
        return res.status(400).json({ data: null, message: "Failed logged out"});
      }
    }
  },

  

  // send my page data
  userInfo: {
    get: async (req, res) => {

      function getCookie(name) {
        let matches = req.headers.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }

      const accessToken = getCookie('accessToken')
      
      const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);

      try {
        if(email) {
          const userInfo = await user.findOne({ where: { email }});
          if(!userInfo) {
            return res.status(203).json({ message: "Bad request" });
          } else {
            return res.status(200).json({ data: userInfo, message: "Success. you can get your informations"});
          }
        }
      }
      
      catch {
        return res.status(400).json({ message: "Bad request" });
      }
    }
  },

  editUserInfo: {
    post: async (req, res) => {
      // 회원 수정에는 프로필, 닉네임, 패스워드 변경 기능이 있다.
      const { nickname, password, profile, newPassword} = await req.body;

      console.log('req.headers----------------', req.headers)
      try {
        // TODO: token이 언제나 있을때 사용할 수 있는 기능이므로 찾을 필요가 없다 ?? 토큰이 없을떄가 있나? -> 시간이 지나면 없다!!!!!!!
        // TODO: expireIn 시간이 지나면 어떻게 해야하나........?
        function getCookie(name) {
          let matches = req.headers.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
          ));
          return matches ? decodeURIComponent(matches[1]) : undefined;
        }

        const accessToken = getCookie('accessToken')
        
        const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);
        console.log('email', email)

        // 사진 수정 버튼을 누른 경우: porofile data만 들어온다
        if(profile && !nickname && !password && !newPassword) {
          // TODO: front에서 이미지 변경에 대한 방식을 선택 후 수정하기
          await user.update({ profile }, { where: { email } });
          return res.status(200).json({ message: "Changed profile"});
        } 

        // 닉네임 수정 버튼을 누른 경우: nickname data만 들어온다.
        else if(!profile && nickname && !password && !newPassword) {
          console.log('nickname========================', nickname)
            await user.update({ nickname }, { where: { email } });
            return res.status(200).json({ data: { nickname }, message: "Changed nickname" });
        }

        // password 수정 버튼을 누른 경우 : password data만 들어온다.
        else if(!profile && !nickname && password && newPassword) {
          // 요청받은 현재 비밀번호가 유저의 비밀번호와 일치하는지 확인.
          const hasPass = await user.findOne({ where : { email, password }});
          if(!hasPass) {
            // 일치하지 않으면 현재 비밀번호 확인 요청.
            return res.status(203).json({ message : "Please check your previous password" });
          } else {
            // 일치하면 새로운 비밀번호로 업로드.
            await user.update({ password : newPassword }, { where: { email }});
            return res.status(200).json({ message : "Change your password" });
          }
        }
      }
      
      catch {
        return res.status(400).json({ message : "Bad request" });
      }

    }
  }

};