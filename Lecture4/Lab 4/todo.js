const mongoCollections = require('./mongoCollections');
const toDoItems = mongoCollections.todoItems;
const uuid = require("uuid/v4");

async function createTask(title, description) {
    if(!title) {
        throw 'No title was provided';
    }

    if(!description) {
        throw 'No description was provided';
    }

    const todoList = {
        _id: uuid(),
        title: title,
        description: description,
        completed: false,
        completedAt: null
    }  

    const todoCollection = await toDoItems();          //awaits the collection from mongoCollection

    const insertInfo = await todoCollection.insertOne(todoList);     //inserts one into the collection
    if (insertInfo.insertedCount === 0) throw "Could not create the task";

    const newId = insertInfo.insertedId;    //gets the id of the newly created item

    return await this.getTask(newId);
}

async function getAllTasks() {
    const todoCollection = await toDoItems();

    const tasks = await todoCollection.find({}).toArray();   //finds all objects and puts them into an array

    return tasks;

}

async function getTask(id) {
    if(!id) {
        throw 'No id was provided';
    }

    const todoCollection = await toDoItems();
    const findTask = await todoCollection.findOne({_id: id});  //find something in the tasks collection thats id matches the given id

    if (findTask === null) throw 'No task was found with that given id';

    return findTask;
    
}

async function completeTask(taskId) {
    if(!taskId) {
        throw 'No id was provided';
    }

    const todoCollection = await toDoItems();
    const time = new Date();

    const updateTask = {
        completed: true,
        completedAt: time
    };

    const updateInfo = await todoCollection.updateOne({ _id: taskId }, {$set: updateTask});  //updates task with task id, and object
    if (updateInfo.modifiedCount === 0) throw 'could not update task sucessfully';

    return await this.getTask(taskId);  //returns the task to the given id after information is updates


}

async function removeTask(id) {
    if(!id) {
        throw 'No id was provided';
    }

    const todoCollection = await toDoItems();
    const deletionInfo = await todoCollection.removeOne({_id: id});

    if (deletionInfo.deletedCount === 0) {
        throw `Could not delete task with id of ${id}`;
      }
    
}



module.exports = {
    createTask,
    getAllTasks,
    getTask,
    completeTask,
    removeTask

}