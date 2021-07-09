const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog,
} = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const id = req.query.id;
  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const result = getList(author, keyword);
    return result.then((listData) => {
      return new SuccessModel(listData);
    });
  }
  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const result = getDetail(id);
    return result.then((detailData) => {
      return new SuccessModel(detailData);
    });
  }
  // 新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    req.body.author = 'lemon';
    const reslut = newBlog(req.body);
    return reslut.then((newBlogData) => {
      return new SuccessModel(newBlogData);
    });
  }
  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body);
    return result.then((val) => {
      if (val) {
        return new SuccessModel();
      } else {
        return ErrorModel('更新失败');
      }
    });
  }
  // 删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/delete') {
    req.body.author = 'lemon';
    let result = deleteBlog(id, req.body.author);
    return result.then((val) => {
      if (val) {
        return new SuccessModel();
      } else {
        return ErrorModel('删除失败');
      }
    });
  }
};

module.exports = handleBlogRouter;
