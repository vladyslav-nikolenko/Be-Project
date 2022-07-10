import ArticleData from '../models/article.js';

async function post({ title, content, image, type, thumbnail }) {
  const article = new ArticleData({
    category: {
      label: String,
      url: String
    },
    title: title,
    content: content,
    image: image,
    type: type,
    thumbnail: thumbnail
  });

  const dataToSave = await article.save();
  return dataToSave;
}

async function get() {
  const articles = await ArticleData.find();
  return articles;
}

async function getById(id) {
  const article = await ArticleData.findById(id);
  return article;
}

async function patch(id, updatedData) {
  const options = { new: true };
  const result = await ArticleData.findByIdAndUpdate(id, updatedData, options);

  result;
}

export default {
  post,
  get,
  getById,
  patch
};
