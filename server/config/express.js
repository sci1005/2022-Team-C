const express = require("express");
module.exports = function () {
    const app = express();
    app.use(express.json());

    app.use(express.static(process.cwd() + '/views'));

    app.set('views', __dirname + '/../../views');  // views 폴더 지정
    app.engine('html', require('ejs').renderFile);  
    app.set('view engine', 'html');

    require('../src/router')(app);

    return app;
};