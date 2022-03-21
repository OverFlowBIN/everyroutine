import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import About from "./page/About";
import Footer from "./components/Footer";
import MyPage from "./components/MyPage";
import UserMain from "./User/UserMain";
import UserDelete from "./User/UserDelete";
import UserRoutine from "./Routines/UserRoutine";
import GroupRoutines from "./Routines/GroupRoutines";
import GroupRoutine from "./Routines/GroupRoutine";
import GroupMain from "./Routines/GroupMain";

import Modal from "react-modal";
import ModalLogin from "./components/ModalLogin";
import ModalSignup from "./components/ModalSingup";
import axios from "axios";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [signModalIsOpen, setSignModalIsOpen] = useState(false);

  const settingLogin = () => {
    setIsLogin(true);
  };

  const settingLogout = () => {
    const setLoggedOut = async () => {
      try {
        const response = await axios.get("http://localhost:4000/users/logout");
      } catch (e) {
        console.log(e);
      }
    };
    setLoggedOut();
    setIsLogin(false);
  };

  const settingModalIsOpen = () => {
    setModalIsOpen(true);
  };
  const settingModalIsClose = () => {
    setModalIsOpen(false);
    setSignModalIsOpen(true);
  };
  const settingModalIsJustClose = () => {
    setModalIsOpen(false);
  };
  const settingSignModalIsClose = () => {
    setSignModalIsOpen(false);
  };

  Modal.setAppElement("#root");
  useEffect(() => {
    AOS.init();
  });

  return (
    <Router>
      <Navbar
        isLogin={isLogin}
        settingLogin={settingLogin}
        settingLogout={settingLogout}
        settingModalIsOpen={settingModalIsOpen}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home isLogin={isLogin} settingModalIsOpen={settingModalIsOpen} />
          }
        >
          <Route path="" element={<UserRoutine />} />
          <Route path="/grouproutines" element={<GroupMain />}>
            <Route path="" element={<GroupRoutines />} />
            <Route
              path="/grouproutines/detail/:id"
              element={<GroupRoutine settingLogin={settingLogin} />}
            />
          </Route>
        </Route>
        <Route path="/about" element={<About />} />

        <Route path="/myPage" element={<MyPage isLogin={isLogin} />}>
          <Route path="" element={<UserMain />} />
          <Route
            path="userDelete"
            element={<UserDelete settingLogout={settingLogout} />}
          />
        </Route>

        <Route
          path="*"
          element={
            <main
              style={{
                padding: "1rem",
                backgroundColor: "orange",
                width: "500px",
                height: "500px",
                textAlign: "center",
              }}
            >
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>

      <Footer />

      {/* 로그인 모달입니다. */}
      <Modal
        style={{
          content: {
            background: "#F3F8F2",
            left: "30%",
            right: "30%",
            border: "5px solid #697F6E",
            borderRadius: "2em",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <ModalLogin
          settingModalIsOpen={settingModalIsOpen}
          settingModalIsClose={settingModalIsClose}
          settingModalIsJustClose={settingModalIsJustClose}
          settingLogin={settingLogin}
        />
      </Modal>

      {/* 회원가입 모달입니다. */}
      <Modal
        style={{
          content: {
            background: "#F3F8F2",
            left: "30%",
            right: "30%",
            border: "5px solid #697F6E",
            borderRadius: "2em",
          },
        }}
        isOpen={signModalIsOpen}
        onRequestClose={() => setSignModalIsOpen(false)}
      >
        <ModalSignup
          settingSignModalIsClose={settingSignModalIsClose}
          settingLogin={settingLogin}
        />
      </Modal>
    </Router>
  );
}

export default App;
