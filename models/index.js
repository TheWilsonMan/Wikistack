const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', { logging: false}); // means to close out all the data in terminal
//const db = new Sequelize('postgres://localhost:5432/wikistack')


const Page = db.define('Page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: true,
  },
  status: {
    type: Sequelize.ENUM('open','closed')
  }
})

const User = db.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }
})

module.exports = {
  db, Page, User
}
