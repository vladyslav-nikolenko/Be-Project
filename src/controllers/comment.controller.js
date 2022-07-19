import commentsRoutes from '../services/comment.services.js';

async function post(req, res) {
  try {
    const comment = {
      sentBy: req.user.id,
      text: req.body.text,
      articleId: req.body.articleId
    }

    const result = await commentsRoutes.post(comment);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function get(req, res) {
  try {
    const result = await commentsRoutes.get();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getByArticleId(req, res) {
  try {
    const { id: articleId } = req.params;
    const result = await commentsRoutes.getByArticleId(articleId);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function patchById(req, res) {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const result = await commentsRoutes.patchById(id, updatedData);

    res.status(200).send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteById(req, res) {
  try {
    const { id } = req.params;
    const result = await commentsRoutes.deleteById(id);
    res.status(200).send(result);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export default {
  post,
  get,
  getByArticleId,
  patchById,
  deleteById
};
