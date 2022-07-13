import 'dotenv/config';
import express from 'express'; // import express
import morgan from 'morgan'; //import morgan
import cors from 'cors'; // import cors
import UserRouter from './src/routes/userRoutes.js'; //import User ArticlesRoutes
import ArticlesRoutes from './src/routes/articleRoutes.js';

//DESTRUCTURE ENV VARIABLES WITH DEFAULT VALUES
const { PORT = 8080 } = process.env;

// Create Application Object
const app = express();

// GLOBAL MIDDLEWARE
app.use(cors()); // add cors headers
app.use(morgan('tiny')); // log the request for debugging
app.use(express.json()); // parse json bodies

// ROUTES AND ROUTES
app.get('/', function (req, res) {
  res.send('Hello World! Test -_- Second Part');
});

app.get('/health', function (req, res) {
  res.status(204).send();
});

app.use('/user', UserRouter); // send all "/user" requests to UserRouter for routing
app.use('/articles', ArticlesRoutes); // base endpoint for "/articles", the contents of the articles routes

app.get('*', function (req, res, next) {
  res.send('Not Found - you wrote the wrong address');
});

app.all('*', function (req, res, next) {
  res.send('Wrong http request');
});

// APP LISTENER
app.listen(PORT, function () {
  console.log('SERVER STATUS', `Listening on port ${PORT}`);
});
