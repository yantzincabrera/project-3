const express = require('express');
const router = express.Router();
const controller = require('../../controllers/Blog/Blog.controller');

// MIDDLEWARE - Router Specific
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// ROUTES
router.post('/Blog', controller.create);
router.get('/Blog', controller.getAll);
router.get('/Blog/:id', controller.getById);
router.put('/Blog/:id', controller.updateById);
router.delete('/Blog/:id', controller.updateById);

module.exports = router;
