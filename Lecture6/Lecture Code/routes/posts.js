const express = require("express");
const router = express.Router();
const data = require("../data");
const postData = data.posts;

router.get("/:id", async (req, res) => {     // router listens for a location, waits for a request to come in "req", then responds "res" to that
  try {
    const post = await postData.getPostById(req.params.id); // http://localhost:3000/posts/1234234234  this basically works when the router sees a method that has id in it
    res.json(post);
  } catch (e) {
    res.status(404).json({ message: "Post not found" });
  }
});

router.get("/", async (req, res) => {
  try {
    const postList = await postData.getAllPosts();
    res.json(postList);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/", async (req, res) => {
  // Not implemented
  res.status(501).send();
});

module.exports = router;
