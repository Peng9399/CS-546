const express = require("express");
const router = express.Router();
const recipe = require("../data");
const recipeData = recipe.recipes;

router.get("/", async (req, res) => {
    try {
        const getRecipes = await recipeData.allRecipes();
        res.json(getRecipes);
    } catch (error) {
        res.status(500).json({ error: error });
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

router.post("/", async (req, res) => {
    const bodyData = req.body;               //used with body-parser to parse body data
    try {
        const title = bodyData.title;
        const ingredients = bodyData.ingredients;
        const steps = bodyData.steps;        
        const postRecipe = await recipeData.addRecipe(title, ingredients, steps);;
        res.json(postRecipe);
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.put("/:id", async (req, res) => {
    const updatedData = req.body;
    try {
        await recipeData.getRecipe(req.params.id)    
    } catch (error) {
        res.status(404).json({error: "Could not find recipe"})
    }

    try {
        const updatingRecipe = await recipeData.updateRecipe(req.params.id, updatedData)
        res.json(updatingRecipe);
    } catch (error) {
        res.status(404).json({error: error})
    }
})

router.patch("/:id", async (req, res) => {
// need to implement this
})


router.delete("/:id", async (req, res) => {
    try {
        await recipeData.getRecipe(req.params.id);    
    } catch (error) {
        res.status(404).json({error: `Could not find and delete recipe with id of ${req.params.id}`});
    }

    try {
        await recipeData.deleteRecipe(req.params.id);
    } catch (error) {
        res.status(500).json({error: error})
    }

})


module.exports = router;