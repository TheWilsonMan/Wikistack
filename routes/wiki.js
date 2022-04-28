const express = require('express');
const router = express.Router();
const {db, Page, User} = require('../models');
const addPage = require("../views/addPage");




router.get("/", async (req, res, next) => {

    // const data = await Page.findAll()
    res.send('got to GET /wiki/');

});

router.post("/", async (req, res, next) => {
    res.send('got to POST /wiki/');
})

router.get("/add", (req, res) => {
    res.send(addPage());
});







module.exports = router

