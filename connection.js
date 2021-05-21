console.log('hello');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('hello', 'root', 'Bjfytw1234', {
  host: 'http://www.bjfytw.cn',
  dialect: 'mysql'
});
async function f1() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
f1();
