// 演示http处理get请求
// 1. 引入 http 模块
const http = require('http');
const querystring = require('querystring');
// 2. 用 http 模块创建服务
/**
 * req 获取 url 信息 (request)
 * res 浏览器返回响应信息 (response)
 */

http
  .createServer(function (req, res) {
    // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
    // console.log(req);
    res.writeHead(200, {
      'Content-Type': 'text/html;charset=UTF-8',
    });
    console.log(req.method);
    const url = req.url;
    req.qurey = querystring.parse(url.split('?')[1]);

    // 结束响应
    res.end(JSON.stringify(req.qurey));
  })
  .listen(3000); // 监听的端口
