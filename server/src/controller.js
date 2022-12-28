// 받은 데이터가 유효한지 확인

const provider = require("./provider");
const service = require("./service");

exports.signIn = async function(req, res){
    res.render("sign/signin.html"); 
}