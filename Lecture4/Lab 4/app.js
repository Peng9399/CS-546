const toDoItems = require('./todo');
const connection = require('./mongoConnection');

const firstTask = {
    title: "Ponder Dinosaurs",
    description: "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"
};

const secondTask = {
    title: "Play Pokemon with Twitch TV",
    description: "Should we revive Helix?"
}

const main = async () => {
    const taskOneInsert = await toDoItems.createTask(firstTask.title, firstTask.description)
    console.log(taskOneInsert);

    const taskTwoInsert = await toDoItems.createTask(secondTask.title, secondTask.description);

    const getAll = await toDoItems.getAllTasks();
    console.log(getAll);

   // await toDoItems.removeTask(taskOneInsert._id)          //removes the first task
    





    const db = await connection();
    await db.serverConfig.close();

    console.log('Server has been closed!')

}




main().catch(error => {
    console.log('There was an error', error);
})
