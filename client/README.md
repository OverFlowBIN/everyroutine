# EveryRoutine-Client

# pull && push Step

1. codestates/upstream/dev 로 반드시 full을 먼저하라
2. elinapark0818/origin/feature 로 푸쉬하기
3. pr 날리기!

## Structure

- 메인

| 제목    | 내용                      | 설명                                                            |
| :------ | :------------------------ | :-------------------------------------------------------------- |
| navbar  | Logo 좌측에 위치          | navbar_item 은 오른쪽 로고는 왼쪽에                             |
| navbar  | App.js 헤더에 navbar 생성 | 스크롤 내리면 height 작아지게                                   |
| navbar  | React-Router 적용         | 연결된 컴포넌트로 이동된다                                      |
| navbar  | 스타일링하기              | navbar_item 클릭시 해당 item 스타일링에 변화를 준다             |
| pj_info | 프로젝트 소개페이지       | 프로젝트 시현 gif 및 간단한 사용법을 안내하는 메시지 작성하기   |
| pj_info | 루틴 시작하기 버튼        | 프로그램 사용권유를 위해 메인페이지 화면에 시작하기 버튼을 삽입 |
| pj_info | 로그인 페이지로 이동      | 루틴 시작하기 버튼 클릭시 로그인모달이 뜬다                     |

- 로그인/회원가입 => 모달

- 마이페이지(계정정보관리/회원탈퇴)

- 루틴목록
  - 루틴(개인)
    - 루틴 리스트
    - 루틴 캘린더
    - 루틴 생성/수정/삭제 => 모달
  - 루틴(그룹)-생성자
    - 루틴 생성/삭제 => 모달
  - 루틴(그룹)-참여자
    - 루틴 리스트
    - 그룹루틴 상세보기

## react-router-dom

`npm install react-router-dom`
