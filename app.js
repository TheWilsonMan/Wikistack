const express = require('express');
const morgan = require("morgan");
const app = express();

// app.get('/', function (req, res) {
// })
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));



app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
