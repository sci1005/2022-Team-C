// 외부 요청을 받아서 컨트롤러로 연결 (API 선언)

module.exports = function(app){
    const user = require("./controller");

    app.get("/", function(req, res){
        res.render("main/main.html");
    });

    app.get("/test", function(req, res){
        res.render("member_main/main.html");
    });

    app.get("/signin", user.signIn);
}