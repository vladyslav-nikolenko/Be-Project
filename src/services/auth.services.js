import bcrypt from 'bcryptjs'; // import bcrypt to hash passwords
import jwt from 'jsonwebtoken'; // import jwt to sign tokens
import User from '../models/user.js'; // import user model
import { AUTH_SECRET_KEY } from '../constants/env/index.js';

async function signup(body) {
  const hashedPassword = await bcrypt.hash(body.password, 10);
  const userData = {
    username: body.username,
    password: hashedPassword
  };

  const isUserFound = await User.findOne({ username: userData.username });
  if (isUserFound) {
    throw new Error('User already exist');
  }
  // create a new user
  const user = await User.create(userData);

  // send new user as response
  const token = await jwt.sign({ username: user.username }, AUTH_SECRET_KEY);
  return { token, username: user.username };
}

async function login(body, res) {
  // check if the user exists
  const user = await User.findOne({ username: body.username });
  if (!user) throw new Error(`User or password doesn't match`);

  //check if password matches
  const isMatch = await bcrypt.compare(body.password, user.password);
  if (!isMatch) throw new Error(`User or password doesn't match`);

  // sign token and send it in response
  const token = await jwt.sign({ username: user.username }, AUTH_SECRET_KEY);
  return { token, username: user.username };
}

async function me(user) {
  if (user) {
    const tempUser = {
      username: user.username,
      userType: user.userType
    };
    return { user: tempUser };
  }
}

export default {
  signup,
  login,
  me
};
