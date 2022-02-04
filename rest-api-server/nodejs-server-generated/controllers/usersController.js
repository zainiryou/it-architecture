'use strict'

var varusersController = require('./usersControllerService');

module.exports.funcusersGET = function funcusersGET(req, res, next) {
  varusersController.funcusersGET(req.swagger.params, res, next);
};