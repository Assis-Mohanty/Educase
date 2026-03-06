import express from 'express';
import pingRouter from './ping.router';
import schoolRouter from './school.router';

const v1Router = express.Router();



v1Router.use('/ping',  pingRouter);
v1Router.use('/school', schoolRouter);
export default v1Router;