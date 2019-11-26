const express = require('express');
const router = express.Router();
const controller = require('../../controllers/User/User.controller');

// MIDDLEWARE - Router Specific
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// ROUTES
router.get('/User', controller.getAll);
router.get('/User/:id', controller.getById);
router.post('/UserPost', controller.create);
router.put('/User/:id', controller.updateById);
router.delete('/User/:id', controller.deleteById);

module.exports = router;
