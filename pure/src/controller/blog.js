const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      creatTime: 1546610491112,
      author: 'monster',
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      creatTime: 1546610491113,
      author: 'lemon',
    },
  ];
};
const getDetail = (id) => {
  return {
    id: 2,
    title: '标题B',
    content: '内容B',
    creatTime: 1546610491113,
    author: 'lemon',
  };
};
const newBlog = (blogData = {}) => {
  return {
    id: 3,
  };
};
const updateBlog = (id, blogData = {}) => {
  return true;
};
const deleteBlog = (id) => {
  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog,
};
