import articlesRoutes from '../services/articles.services.js';

async function post(req, res) {
  try {
    const result = await articlesRoutes.post(req.body);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function get(req, res) {
  try {
    const result = await articlesRoutes.get();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getById(req, res) {
  try {
    const { id } = req.params;
    const result = await articlesRoutes.getById(id);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function patch(req, res) {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const result = await articlesRoutes.patch(id, updatedData);

    res.status(200).send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export default {
  post,
  get,
  getById,
  patch
};
