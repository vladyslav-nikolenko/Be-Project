import { Router } from 'express'; // import router from

const router = Router(); // create router to create route bundle

import articlesController from '../controllers/article.controller.js';

//Post Method
router.post('/postArticle', (req, res) => {
  articlesController.post(req, res);
});

//Get all Method
router.get('/getArticles', (req, res) => {
  articlesController.get(req, res);
});

//Get by ID Method
router.get('/getArticles/:id', (req, res) => {
  articlesController.getById(req, res);
});

//Update by ID Method
router.patch('/editArticle/:id', (req, res) => {
  articlesController.patch(req, res);
});

export default router;
