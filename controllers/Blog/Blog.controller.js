const db = require('../../models');
const create = (req, res) => {
  // TODO - Implement Blog.create
  console.log('BlogController.create');
  db.Blogs.create({
    name: req.body.name,
    lastname: req.body.lastname,
    post_bio: req.body.post_bio 
  })
  .then(blog => res.json(blog))
  .catch(error => res.status(400).send(error));
};
 
const getAll = (req, res) => {
  // TODO - Implement Blog.getAll
  console.log('BlogController.getAll');
  res.json([
    {
      id: 1,
      name: 'Test 1'
    },
    {
      id: 2,
      name: 'Test 2'
    },
    {
      id: 3,
      name: 'Test 3'
    },
  ]);
};

const getById = (req, res) => {
  // TODO - Implement Blog.getById
  const { id } = req.params;
  console.log('BlogController.getById.id', id);
  res.json({
    id
  });
};

const updateById = (req, res) => {
  // TODO - Implement Blog.updateById
  const { id } = req.params;
  console.log('BlogController.getById.id', id);
  res.json({
    id
  });
};

const deleteById = (req, res) => {
  // TODO - Implement Blog.deleteById
  const { id } = req.params;
  console.log('BlogController.getById.id', id);
  res.status(500).end();
};

module.exports = {
  create,
  getById,
  getAll,
  updateById,
  deleteById
};
