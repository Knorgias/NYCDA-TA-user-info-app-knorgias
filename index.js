/*Getting the modules and assigning them to (constant) objects*/
const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      pug = require('pug'),
      fs = require('fs');

/*Storing the paths of the routes  */
const userRoutes = require('./routes/users'),
      searchRoutes = require('./routes/search');

/*Store express function into a (const) variable*/
const app = express(),
    userStore = require('./user-reader');

/**Set the engine to pug */
app.set('view engine', 'pug');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', userRoutes);

app.use('/search', searchRoutes);

app.get('/', (request, response) => {
  response.render('index', { users: userStore.getUsers() });
});

app.listen(3000, () => {
  console.log('Web Server is running on port 3000');
});
