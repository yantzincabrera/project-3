const db = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

process.env.SECRET_KEY = 'secret'

const create = (req, res) => {
   // TODO - Implement User.create
   const userData = {
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password 
  }

  db.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          db.Users.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
}



const getAll = (req, res) => {
  // TODO - Implement User.getAll
      db.Users.findAll()
      .then(getall => {res.json(getall)})
      .catch(error => {
      console.log('error -getAll', error)
      res.status(500).send(error)
      });
  }; 

const getById = (req, res) => {
  // TODO - Implement User.getById
  db.Users.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if(!user){
      res.status(400).json({ error: 'User does not exist' })
    }else{
      if(bcrypt.compare(req.body.password, user.password)){
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1400
        })
        res.send(token)
      }
    }
  })
   
}


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

