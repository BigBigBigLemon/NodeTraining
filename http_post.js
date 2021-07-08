// 演示http处理post请求
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
    if (req.method === 'POST') {
      // 数据格式
      console.log('content-type', req.headers['content-type']);
      // 接收数据
      let postData = '';
      req.on('data', (chunk) => {
        postData += chunk.toString();
      });
      req.on('end', () => {
        // console.log('postData:', postData);

        res.end(res);
      });
    }
  })
  .listen(3000); // 监听的端口
