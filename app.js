const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const yaml = require('yamljs');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = yaml.load('./swagger/swagger.yaml');

const { ApiV1Router, AuthenticationRouter, UsersRouter } = require('./routes');
const { JwtMiddleware } = require('./app/middleware');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', JwtMiddleware.verify, ApiV1Router);
app.use('/auth', AuthenticationRouter);
app.use('/users', JwtMiddleware.verify, UsersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => {
  console.log("Http server started on port 3000");
});

module.exports = app;
