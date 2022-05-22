"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodos = void 0;
let todos = [];
const getTodos = (req, res, next) => {
    res.status(200).json({ todos: todos });
};
exports.getTodos = getTodos;
const addTodo = (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Todo added successfully!', todo: newTodo, todos: todos });
};
exports.addTodo = addTodo;
const updateTodo = (req, res) => {
    const params = req.params;
    const todoId = params.todoId;
    const body = req.body;
    const todoIndex = todos.findIndex(todoItem => todoItem.id == todoId);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text
        };
        return res.status(200).json({ message: 'Updated todo.', todos: todos });
    }
    res.status(404).json({ message: 'Could not find todo for this id.' });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => {
    const params = req.params;
    todos = todos.filter(todoItem => todoItem.id !== params.todoId);
    res.status(200).json({ message: 'Deleted todo.', todos: todos });
};
exports.deleteTodo = deleteTodo;
