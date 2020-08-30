'use strict';
const Event = require('../models/event.model');
exports.findAll = function(req, res) {
Event.findAll(function(err, event) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', event);
  res.send(event);
});
};
exports.findById = function(req, res) {
Event.findById(req.params.id, function(err, event) {
  if (err)
  res.send(err);
  res.json(event);
});
};