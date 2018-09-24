const mongoCollections = require('./mongoCollections');
const toDoItems = mongoCollections.todoItems;

async function createTask(title, description) {
    if(!title) {
        throw 'No title was provided';
    }

    if(!description) {
        throw 'No description was provided';
    }

    const todoList = {
        _id: uuidv4(),
        title: title,
        description: description,
        completed: false,
        completedAt: null
    }  

    const todoCollection = await toDoItems();          //awaits the collection from mongoCollection

    const insertInfo = await todoCollection.insertOne(todoList);     //inserts one into the collection
    if (insertInfo.insertedCount === 0) throw "Could not create the task";

    return insertInfo;
}

async function getAllTasks() {
    const getCollection = await toDoItems();

    const tasks = getCollection.find({}).toArray();   //finds all objects and puts them into an array

    return tasks;

}

async function getTask(id) {
    if(!id) {
        throw 'No id was provided';
    }

    const taskCollection = await toDoItems();
    const findTask = await taskCollection.findOne({_id: id});  //find something in the tasks collection thats id matches the given id

    if (findTask === null) throw 'No task was found with that given id';

    return findTask;
    
}






module.exports = {
    createTask,
    getAllTasks,
    getTask

}