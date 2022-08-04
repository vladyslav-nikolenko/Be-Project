import 'dotenv/config'; // loading env variables
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import { AUTH_SECRET_KEY } from '../constants/env/index.js';

// MIDDLEWARE FOR AUTHORIZATION (MAKING SURE THEY ARE LOGGED IN)
const isLoggedIn = async (req, res, next) => {
  try {
    // check if auth header exists
    if (req.headers && req.headers.token) {
      // parse token from header
      const token = req.headers.token; //split the header and get the token
      if (token) {
        const username = await jwt.verify(token, AUTH_SECRET_KEY);
        if (username) {
          // store user data in request object
          const user = await User.findOne(username);
          req.user = user;
          next();
        } else {
          res.status(400).json({ error: 'token verification failed' });
        }
      } else {
        res.status(400).json({ error: 'malformed auth header' });
      }
    } else {
      res.status(400).json({ error: 'No authorization header' });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

// export custom middleware
export default isLoggedIn;
