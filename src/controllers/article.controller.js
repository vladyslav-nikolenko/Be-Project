import articlesService from '../services/articles.services.js';

async function post(req, res) {
  try {
    const result = await articlesService.create(req.body, req.files);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function get(req, res) {
  try {
    const result = await articlesService.get();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getById(req, res) {
  try {
    const { id } = req.params;
    const result = await articlesService.getById(id);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getByUser(req, res) {
  try {
    const { user } = req.params;
    const result = await articlesService.getByUser(user);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getByCategory(req, res) {
  try {
    const { category } = req.params;
    const result = await articlesService.getByCategory(category);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function patchById(req, res) {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const result = await articlesService.patchById(id, updatedData);

    res.status(200).send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteById(req, res) {
  try {
    const { id } = req.params;
    const result = await articlesService.deleteById(id);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export default {
  post,
  get,
  getById,
  getByUser,
  getByCategory,
  patchById,
  deleteById
};
