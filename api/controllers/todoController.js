// import Todo Model
const  Todo = require("../models/todoModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllTodos function - To list all todos
exports.listAllTodos = (req, res) => {
Todo.find({}).then((todo)=>res.send(todo)).catch((err)=>res.status(500).send(err))
};

// createNewTodo function - To create new todo
exports.createNewTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.send(todo);
        console.log(todo);
      } catch (err) {
        console.log(err);
      }
    }

    // updateTodo function - To update todo status by id
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true });
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).send(err);
  }
};

// deleteTodo function - To delete todo by id
exports.deleteTodo = async ( req, res) => {
    
    try {
        const todo = await Todo.deleteOne({ _id:req.params.id });
        res.status(200).json(todo);
      } catch (err) {
        res.status(500).send(err);
      }
    };