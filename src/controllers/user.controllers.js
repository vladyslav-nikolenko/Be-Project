import userAuth from '../services/auth.services.js';

async function signup(req, res) {
  try {
    const result = await userAuth.signup(req.body);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const result = await userAuth.login(req.body, res);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function me(req, res) {
  try {
    const result = await userAuth.me(req.user);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export default {
  signup,
  login,
  me
};
