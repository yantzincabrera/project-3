const db = require('../../models');

const create = (req, res) => {
   // TODO - Implement User.create
     db.Users.create({
       name: req.body.name,
       email: req.body.email,
       password: req.body.password 
      })
      .then(user => res.json(user))
      .catch(error => res.status(400).send(error));
      };

const getAll = (req, res) => {
  // TODO - Implement User.getAll
      db.Users.findAll({})
      .then(getall => {res.json(getall)})
      .catch(error => {
      console.log('error -getAll', error)
      res.status(500).send(error)
      });
  };

const getById = (req, res) => {
  // TODO - Implement User.getById
  const { id } = req.params;
  db.Users.findAll({
    where:{
      id: id
    }
  })
  .then(getone => res.json(getone))
  .catch(error => res.status(400).send(error));
  console.log('UserController.getById.id', id);
};

const updateById = (req, res) => {
  // TODO - Implement User.updateById
  const { id } = req.params;
  console.log('UserController.getById.id', id);
  res.json({
    id
  });
};

const deleteById = (req, res) => {
  // TODO - Implement User.deleteById
  const { id } = req.params;
  console.log('UserController.getById.id', id);
  res.status(500).end();
};

module.exports = {
  create,
  getById,
  getAll,
  updateById,
  deleteById
};
