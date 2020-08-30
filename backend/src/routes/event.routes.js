const express = require('express')
const router = express.Router()
const eventController = require('../controllers/event.controller');
// Retrieve all events
router.get('/', eventController.findAll);
// Retrieve a single event with id
router.get('/:id', eventController.findById);
module.exports = router