
const Sequelize = require('sequelize');

const sequelize = new Sequelize('appointment', 'root', 'ROOT', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
