import articles from '../models/article.js';
import * as path from 'path';
import * as fs from 'fs';
// import multer from 'mutler';

async function create({ title, content, user, category }, files) {
  // files?.image[0].filename ? `images/${files?.image[0].filename}` : '';

  const data = {
    category,
    title,
    content,
    user,
    image: files?.image[0].filename,
    thumbnail: files?.thumbnail[0].filename
  };

  const article = new articles(data);

  const dataToSave = await article.save();
  return dataToSave;
}

async function get() {
  const result = await articles.find();
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
  const result = await articles.findByIdAndUpdate(id, updatedData, options);

  result;
}

async function deleteById(id) {
  const result = await articles.findByIdAndRemove(id);
  result;
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
