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
  if (method === 'GET' && res.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }
  // 获取博客详情
  if (method === 'GET' && res.path === '/api/blog/detail') {
    const detailData = getDetail(id);
    return new SuccessModel(detailData);
  }
  // 新建一篇博客
  if (method === 'POST' && res.path === '/api/blog/new') {
    let newBlogData = newBlog(req.body);
    return new SuccessModel(newBlogData);
  }
  // 更新一篇博客
  if (method === 'POST' && res.path === '/api/blog/update') {
    let result = updateBlog(id, req.body);
    if (result) {
      return new SuccessModel();
    } else {
      return ErrorModel('更新失败');
    }
  }
  // 删除一篇博客
  if (method === 'POST' && res.path === '/api/blog/delete') {
    let result = deleteBlog(id);
    if (result) {
      return new SuccessModel();
    } else {
      return ErrorModel('删除失败');
    }
  }
};

module.exports = handleBlogRouter;
