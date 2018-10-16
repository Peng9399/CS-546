const express = require("express");
const router = express.router();
const recipe = require("../data");
const recipeData = recipe.recipes;

router.get("/", async (req, res) => {
    try {
        const getRecipes = await recipeData.allRecipes;
        res.json(getRecipes);
    } catch (error) {
        res.status(404).json({error: error})
    }
})

router.get("/:id", async (req, res) => {
    try {
        const getRecipe = await recipeData.getRecipe(req.params.id);
        res.json(getRecipe);
    } catch (error) {
        res.status(404).json({error: error})
    }
})








module.exports = router;