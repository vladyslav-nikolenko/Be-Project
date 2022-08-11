import 'dotenv/config';
import bodyParser from 'body-parser';
import express from 'express'; // import express
import morgan from 'morgan'; //import morgan
import cors from 'cors'; // import cors
import UserRouter from './src/routes/userRoutes.js'; //import User ArticlesRoutes
import ArticlesRoutes from './src/routes/articleRoutes.js';
import CommentsRoutes from './src/routes/commentsRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './src/swagger/swagger.json' assert {type: 'json'};

//DESTRUCTURE ENV VARIABLES WITH DEFAULT VALUES
const { PORT = 8080 } = process.env;

// Create Application Object
const app = express();

// GLOBAL MIDDLEWARE
app.use(cors()); // add cors headers
app.use(morgan('tiny')); // log the request for debugging
app.use(express.json()); // parse json bodies
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// ROUTES AND ROUTES
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.get('/', function (req, res) {
  res.send('Hello World! Test -_- Second Part');
});

app.use('/user', UserRouter); // send all "/user" requests to UserRouter for routing
app.use('/articles', ArticlesRoutes); // base endpoint for "/articles", the contents of the articles routes
app.use('/comments', CommentsRoutes);

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
