const tester = require('./data');
const recipesTesting = tester.recipes;

const firstTask = { 
  title: "Fried Eggs",
  ingredients: [
    {
      name: "Egg",
      amount: "2 eggs"
    },
    {
      name: "Olive Oil",
      amount: "2 tbsp"
    }
  ],
  steps: [
    "First, heat a non-stick pan on medium-high until hot",
    "Add the oil to the pan and allow oil to warm; it is ready the oil immediately sizzles upon contact with a drop of water.",
    "Crack the egg and place the egg and yolk in a small prep bowl; do not crack the yolk!",
    "Gently pour the egg from the bowl onto the oil",    
    "Wait for egg white to turn bubbly and completely opaque (approx 2 min)",
    "Using a spatula, flip the egg onto its uncooked side until it is completely cooked (approx 2 min)",
    "Remove from oil and plate",
    "Repeat for second egg"
  ]
}


const main = async () => {
 
    const addingOne = await recipesTesting.addRecipe(firstTask.title, firstTask.ingredients, firstTask.steps);
    console.log(addingOne);

    const db = await connection();
    await db.serverConfig.close();

    console.log('Server has been closed!')   

}




main().catch(error => {
    console.log('There was an error', error);
})
