import { Router } from 'express'; // import router from
import isLoggedIn from '../middleware/middleware.js';
const router = Router(); // create router to create route bundle

import commentsController from '../controllers/comment.controller.js';

//Post Method
router.post('/', isLoggedIn, (req, res) => {
  commentsController.post(req, res);
});

//Get all Method
router.get('/', (req, res) => {
  commentsController.get(req, res);
});

//Get by ArticleId Method
router.get('/:id', (req, res) => {
  commentsController.getByArticleId(req, res);
});

//Update by ID Method
router.patch('/:id', (req, res) => {
  commentsController.patchById(req, res);
});

//Delete by ID Method
router.delete('/:id', (req, res) => {
  commentsController.deleteById(req, res);
});

export default router;
