
const path = require('path')
const User = require('../models/user-model');
const rootDir = require('../util/path');

exports.getBookingList = (req, res, next) => {
  res.sendFile(path.join(rootDir,"view", "index.html"));
};

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => console.log(err));
};

exports.addUser = (req, res, next) => {
  const userName = req.body.userName;
  const contact = req.body.contact;
  const email = req.body.email;

  User.create({
    userName: userName,
    contact: contact,
    email: email,
  })
    .then((result) => {
      console.log("Added to User");
      res.redirect("/get");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteUser = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  User.findByPk(id)
    .then((user) => {
      return user.destroy();
    })
    .then((result) => {
      console.log("User Deleted");
      res.redirect("/get");
    })
    .catch((err) => {
      console.log(err);
    });
};


