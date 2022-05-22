import express from 'express';

import todosRoutes from './routes/todos';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(todosRoutes);

app.listen(3000);