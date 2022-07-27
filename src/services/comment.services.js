import CommentData from '../models/comment.js';

async function post(data) {
  const comment = new CommentData(data);

  const dataToSave = await comment.save();
  return dataToSave;
}

async function get() {
  const comments = await CommentData.find({approved: false}).populate('sentBy');
  return comments;
}

async function getByArticleId(articleId) {
  const comment = await CommentData.find({articleId, approved: true }).populate('sentBy');
  return comment;
}

async function patchById(id, updatedData) {
  const options = { new: true };
  await CommentData.findByIdAndUpdate(id, updatedData, options);
  const result = await CommentData.find({approved: false}).populate('sentBy');
  return result;
}

async function deleteById(id) {
  await CommentData.findByIdAndRemove(id);
  const result = await CommentData.find({approved: false}).populate('sentBy');
  return result;
}

export default {
  post,
  get,
  getByArticleId,
  patchById,
  deleteById
};