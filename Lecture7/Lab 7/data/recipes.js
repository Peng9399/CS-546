const collections = require("../config/mongoCollections");
const recipes = collections.recipes;
const uuid = require("node-uuid");

const addRecipe = async (title, ingredients, steps) => {
    if(!title || typeof title !== "string") throw "Title was either not provided or isnt a string";
    if(!ingredients || !ingredients.isArray()) throw "Ingredients was either not provided or isnt a type of array";
    if(!steps || !steps.isArray()) throw "Ingredients was either not provided or isnt a type of array";

    const recipeObject = {
        _id: uuid.v4(),
        title: title,
        ingredients: ingredients,
        steps: steps      
    };

    const recipeCollection =  await recipes();
    const recipeInsert = await recipeCollection.insertOne(recipeObject);
    if (recipeInsert.insertedCount === 0) throw "Could not create the task";

    const newId = recipeInsert.insertedId;

    return await this.getRecipe(newId);

} 





module.exports = {}