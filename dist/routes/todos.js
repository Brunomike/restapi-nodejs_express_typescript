"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
router.get('/', todos_1.getTodos);
router.post('/todo', todos_1.addTodo);
router.put('/todo/:todoId', todos_1.updateTodo);
router.delete('/todo/:todoId', todos_1.deleteTodo);
exports.default = router;
