require('dotenv').config();
require('./database/relations');

const compression = require('compression');
const express = require('express');
const app = express();
const sequelize = require('./config/mysql');
const router = require('./routes');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// middleWares
app.use(
  cors({
    origin: [`https://${process.env.FNT_SERVER_PORT}`, 'http://localhost:8080'],
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
    credentials: true,
  })
);

// 프론트 연결
app.use(express.static('public'));

app.use(cookieParser());
app.use(express.json());
app.use(router);

// HTTP 요청 압축
app.use(compression());

// DB 동기화 + 서버실행
(async () => {
  try {
    await sequelize.sync();
    app.listen(process.env.SERVER_PORT, () => {
      console.log(`${process.env.SERVER_PORT} 서버가 켜졌습니다 👌`);
    });
  } catch (error) {
    console.error('DB 연결 오류:', error);
  }
})();
