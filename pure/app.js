const querysting = require('querystring');
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');

// 处理 post data
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({});
      return;
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({});
      return;
    }
    let postData = '';
    req.on('data', (chunk) => {
      postData += chunk.toString();
    });
    res.on('end', () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.stringify(postData));
    });
  });
  return promise;
};
const serverHandle = (req, res) => {
  // 设置返回格式 JSON
  res.setHeader('Content-type', 'application/json');
  // 获取url和path
  const url = req.url;
  res.path = url.split('?')[0];
  // 解析query
  req.query = querysting.parse(url.split('?')[1]);
  // 解析postData
  getPostData(req).then((postData) => {
    req.body = postData;
    // 处理blog路由
    const blogData = handleBlogRouter(req, res);
    if (blogData) {
      res.end(JSON.stringify(blogData));
      return;
    }

    // 处理user路由
    const userData = handleUserRouter(req, res);
    if (userData) {
      res.end(JSON.stringify(userData));
      return;
    }

    // 未命中路由，返回404
    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.write('404 Not Found! \n');
    res.end();
  });
};

module.exports = serverHandle;
