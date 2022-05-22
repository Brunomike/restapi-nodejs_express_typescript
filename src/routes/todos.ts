import { Router } from 'express';

import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todos';

const router = Router();

router.get('/', getTodos);

router.post('/todo', addTodo);

router.put('/todo/:todoId', updateTodo);

router.delete('/todo/:todoId', deleteTodo);

export default router;