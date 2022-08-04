import { Router } from 'express'; // import router from
import { fileStat, uploadMulter } from '../middleware/upload.js';
const router = Router(); // create router to create route bundle

import articlesController from '../controllers/article.controller.js';

//Post Method
router.post(
  '/',
  uploadMulter.fields([
    { name: 'image', maxCount: 1 },
    { name: 'thumbnail', maxCount: 1 }
  ]),
  (req, res) => {
    articlesController.post(req, res);
  }
);

//Get all Method
router.get('/:isApproved', (req, res) => {
  articlesController.get(req, res);
});

//Get by Authors Method
router.get('/author/:user', (req, res) => {
  articlesController.getByUser(req, res);
});

//Get by ID Method
router.get('/article/:id', (req, res) => {
  articlesController.getById(req, res);
});

//Get by category  Method
router.get('/categories/:category', (req, res) => {
  articlesController.getByCategory(req, res);
});

//Update by ID Method
router.patch('/:id', (req, res) => {
  articlesController.patchById(req, res);
});

//Delete by ID Method
router.delete('/:id', (req, res) => {
  articlesController.deleteById(req, res);
});

export default router;
