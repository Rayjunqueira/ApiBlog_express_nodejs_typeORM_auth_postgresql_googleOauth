import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes';
import commentRoutes from './routes/commentRoutes';
import authRoutes from './routes/authRoutes';
import forgetPassRoutes from './routes/forgetPassRoutes';
import postRoutes from './routes/postRoutes';

dotenv.config();

import "reflect-metadata"

const app = express();

app.use(passport.initialize());
app.use(express.json());
app.use(
    cookieSession({ name: "session", keys: ["adm"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));
app.use(bodyParser());

app.use('/user', userRoutes);
app.use('/comment', commentRoutes);
app.use('/auth', authRoutes);
app.use('/post', postRoutes);
app.use('/forgetPass', forgetPassRoutes);

export default app;