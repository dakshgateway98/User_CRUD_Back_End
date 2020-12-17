import Express from 'express';
import Cors from 'cors';
import UserRouter from './routes/userRoutes';


const app = new Express();

app.use(Cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use('/user',UserRouter);

console.log('app is running...');
export default app;
