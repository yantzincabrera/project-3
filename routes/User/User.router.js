const express = require('express');
const router = express.Router();
const cors= require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')
const controller = require('../../controllers/User/User.controller');

router.use(cors())

process.env.SECRET_KEY = 'secret'

// MIDDLEWARE - Router Specific
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// ROUTES
router.get('/User', controller.getAll);
router.post('/User/', controller.getById);
router.post('/UserPost', controller.create);
router.put('/User/:id', controller.updateById);
router.delete('/User/:id', controller.deleteById);

module.exports = router;
