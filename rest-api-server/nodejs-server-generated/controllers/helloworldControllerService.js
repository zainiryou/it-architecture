'use strict'

module.exports.helloWorld = function helloWorld(req, res, next) {
  res.send({
    message: 'Hello : ' + req.data.value.name
  });
};