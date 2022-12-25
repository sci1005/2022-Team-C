const express = require("./config/express");

const port = 3000;
express().listen(port, function(){
    console.log(`Server start at port ${port}`);
});