import { Router } from 'express'; // import router from
import isLoggedIn from '../middleware/middleware.js';

const router = Router(); // create router to create route bundle

import userController from '../controllers/user.controllers.js';

// Signup route to create a new user
router.post('/signup', (req, res) => {
  userController.signup(req, res);
});

// Login route to verify a user and get a token
router.post('/login', (req, res) => {
  userController.login(req, res);
});

router.post('/me', isLoggedIn, async (req, res) => {
  userController.me(req, res);
});

export default router;
