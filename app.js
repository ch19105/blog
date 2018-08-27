const express = require('express');
//创建web服务器
const app = express();
// 监听端口
app.listen(3000);

app.get('/',(req,res) => {
    res.send('111');
})