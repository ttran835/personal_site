const mainRoutes = require('express').Router();
const { mainController } = require('../controller/mainController');

mainRoutes
  .route('/home')
  .get(mainController.get)
  .post(mainController.post);

module.exports = mainRoutes;
