const express = require('express');
//const morgan = require("morgan");
const { db } = require('./models');
const app = express();
// const wikiRouter = require('./models/index');
// const userRouter = require('./routes/users');
const addPage  = require('./views/addPage')

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

// app.use('/calendar', router)
app.use('/wiki', require('./routes/wiki'))
// app.use('/user', require('./routes/user'))

app.get('/wiki', function (req, res) {
  res.send('1');
})
app.post('/wiki', function (req, res) {
  res.send('2');
})
app.get('/wiki/add', function (req, res) {
  res.send('3');
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const PORT = 3000;

const wiki = async () =>{
  await db.sync({force: true});

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
}
wiki()
