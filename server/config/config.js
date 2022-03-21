require("dotenv").config();
const env = process.env;

const development = {
  username: env.DATABASE_USERNAME,
  //env.DATABASE_USERNAME은 불러오고자 하는 데이터의 키값이므로 자유롭게 이름설정이 가능하다.
  password: env.DATABASE_PASSWORD,
  database: "db_dev_everyroutine",
  host: env.DATABASE_HOST,
  dialect: "mysql",
  //port: env.MYSQL_PORT
};

const developmentaws = {
  username: env.DATABASE_USERNAME,
  //env.DATABASE_USERNAME은 불러오고자 하는 데이터의 키값이므로 자유롭게 이름설정이 가능하다.
  password: env.DATABASE_PASSWORD,
  database: "db_dev_everyroutine_aws",
  host: env.DATABASE_HOST,
  dialect: "mysql",
  //port: env.MYSQL_PORT
};

const production = {
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: "db_product_everyroutine",
  host: env.DATABASE_HOST,
  dialect: "mysql",
  //port: env.MYSQL_PORT
};

const test = {
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: "db_test_everyroutine",
  host: env.DATABASE_HOST,
  dialect: "mysql",
  //port: env.MYSQL_PORT
};

module.exports = { development, developmentaws, production, test };

// {
//   "development": {
//     "username": "root",
//     "password": "password",
//     "database": "db_dev_everyroutine",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
