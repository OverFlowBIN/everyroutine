"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user_routines",
      [
        {
          list: JSON.stringify({
            contents: ["물 2L 마시기", "스트레칭 하기", "산책 30분 하기"],
          }),
          user_id: 1,
          user_cal_id: 1, //2월 20일
          daily_check: JSON.stringify({ checked: [0, 0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["물 2L 마시기", "스트레칭 하기", "산책 30분 하기"],
          }),
          user_id: 1,
          user_cal_id: 2, //2월 21일
          daily_check: JSON.stringify({ checked: [0, 0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["물 2L 마시기", "스트레칭 하기", "산책 30분 하기"],
          }),
          user_id: 1,
          user_cal_id: 3, //2월 22일
          daily_check: JSON.stringify({ checked: [0, 0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["물 2L 마시기", "스트레칭 하기", "산책 30분 하기"],
          }),
          user_id: 1,
          user_cal_id: 4, //2월 23일
          daily_check: JSON.stringify({ checked: [0, 0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["물 2L 마시기", "스트레칭 하기", "산책 30분 하기"],
          }),
          user_id: 1,
          user_cal_id: 5, //2월 24일
          daily_check: JSON.stringify({ checked: [0, 0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["물 2L 마시기", "스트레칭 하기", "산책 30분 하기"],
          }),
          user_id: 1,
          user_cal_id: 6, //2월 25일
          daily_check: JSON.stringify({ checked: [0, 0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["물 2L 마시기", "스트레칭 하기", "산책 30분 하기"],
          }),
          user_id: 1,
          user_cal_id: 7, //2월 26일
          daily_check: JSON.stringify({ checked: [0, 0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["물 2L 마시기", "스트레칭 하기", "산책 30분 하기"],
          }),
          user_id: 1,
          user_cal_id: 8, //2월 27일
          daily_check: JSON.stringify({ checked: [0, 0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["물 2L 마시기", "스트레칭 하기", "산책 30분 하기"],
          }),
          user_id: 1,
          user_cal_id: 9, //2월 28일
          daily_check: JSON.stringify({ checked: [0, 0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["물 2L 마시기", "스트레칭 하기", "산책 30분 하기"],
          }),
          user_id: 1,
          user_cal_id: 10, //3월 1일
          daily_check: JSON.stringify({ checked: [0, 0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["물 2L 마시기", "스트레칭 하기", "고양이 털 청소하기"],
          }),
          user_id: 1,
          user_cal_id: 11,
          daily_check: JSON.stringify({ checked: [0, 0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["물 2L 마시기", "스트레칭 하기"] }),
          user_id: 1,
          user_cal_id: 12,
          daily_check: JSON.stringify({ checked: [0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["물 2L 마시기", "스트레칭 하기"] }),
          user_id: 1,
          user_cal_id: 13,
          daily_check: JSON.stringify({ checked: [0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["스트레칭 하기", "물 3L 마시기"] }),
          user_id: 1,
          user_cal_id: 14,
          daily_check: JSON.stringify({ checked: [0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["산책 30분 하기", "오전 5시 기상하기"],
          }),
          user_id: 1,
          user_cal_id: 15,
          daily_check: JSON.stringify({ checked: [0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["고양이 털 청소하기", "물 3L 마시기"],
          }),
          user_id: 1,
          user_cal_id: 16,
          daily_check: JSON.stringify({ checked: [0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({
            contents: ["물 3L 마시기", "오전 5시 기상하기"],
          }),
          user_id: 1,
          user_cal_id: 17,
          daily_check: JSON.stringify({ checked: [0, 0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 18, //3월 9일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 19, //3월 10일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 20, //3월 11일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 21, //3월 12일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 22, //3월 13일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 23, //3월 14일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 24, //3월 15일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 25, //3월 16일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 26, //3월 17일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 27, //3월 18일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 28, //3월 19일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 29, //3월 20일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 30, //3월 21일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 31, //3월 22일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 32, //3월 23일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 33, //3월 24일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 34, //3월 25일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 35, //3월 26일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 36, //3월 27일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 37, //3월 28일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 38, //3월 29일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 39, //3월 30일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          list: JSON.stringify({ contents: ["오전 5시 기상하기"] }),
          user_id: 1,
          user_cal_id: 40, //3월 31일
          daily_check: JSON.stringify({ checked: [0] }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_routines", null, {});
  },
};
