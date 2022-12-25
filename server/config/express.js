const express = require("express");
module.exports = function () {
    const app = express();
    app.use(express.json());




//      client 파일 연결
//             폴더명              폴더 위치      ->  기본 client 폴더로 지정
//    app.set('views', __dirname + '/../views');  // views 폴더 안을 지정
//    app.engine('html', require('ejs').renderFile);  
//    app.set('view engine', 'html');

    require('../src/router')(app);

    return app;
};