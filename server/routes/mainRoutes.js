const mainRoutes = require('express').Router;
const { mainController } = require('../controller/mainController');

mainRoutes.route('home').get(mainController.get);
postMessage(mainController.post);

module.exports = mainRoutes;
