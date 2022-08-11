import articles from '../models/article.js';
import { fileStat } from '../middleware/upload.js';

async function create({ title, content, user, category }, files) {
  const imageName = files?.image[0].filename;
  const thumbnailName = files?.thumbnail[0].filename;

  fileStat([imageName, thumbnailName]);

  const data = {
    category,
    title,
    content,
    user,
    image: imageName,
    thumbnail: thumbnailName
  };

  const article = new articles(data);

  const dataToSave = await article.save();
  return dataToSave;
}

async function get(isApproved = true) {
  const result = await articles.find({approved: isApproved});
  return result;
}

async function getById(id) {
  const article = await articles.findById(id);
  return article;
}

async function getByUser(user) {
  const article = await articles.find({
    user
  });
  return article;
}

async function getByCategory(category) {
  const categoryUpper =
    category[0].toUpperCase() + category.slice(1).toLowerCase();
  const article = await articles.find({ category: categoryUpper });
  return article;
}

async function patchById(id, updatedData) {
  const options = { new: true };
  await articles.findByIdAndUpdate(id, updatedData, options);
  const result = await articles.find({approved: false})
  return result;
}

async function deleteById(id) {
  await articles.findByIdAndRemove(id);
  const result = await articles.find({approved: false})
  return result;
}

export default {
  create,
  get,
  getById,
  getByUser,
  getByCategory,
  patchById,
  deleteById
};
