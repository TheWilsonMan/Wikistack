const express = require('express');
const router = express.Router();
const client = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const data = await client.query(baseQuery);
    res.send(postList(data.rows));
  } catch (error) { next(error) }
});

router.get("/add", (req, res) => {
    res.send(addPost());
});
router.post("/", async (req, res, next) => {
  const name = req.body.name;
  const title = req.body.title;
  const content = req.body.content;
  try {
      const postId = await client.query(`INSERT INTO (name, title, content) values (${name}, ${title}, ${content}) returning id`);
      // const data = await client.query(baseQuery + "WHERE posts.title = $1", [title]);
      res.redirect(`/${postId}`); // Redirect to the post details page
  } catch (error) { next(error) }
})

router.get("/:id", async (req, res, next) => {
  try {
    const data = await client.query(baseQuery + "WHERE posts.id = $1", [req.params.id]);
    const post = data.rows[0];
    res.send(postDetails(post));
  } catch (error) { next(error) }
});




module.exports = router

