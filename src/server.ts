import app from './app';
import { AppDataSource } from './database/config';

import dotenv from 'dotenv';

dotenv.config();
    
async function connection() {
    const port = process.env.PORT;
    try {
        await AppDataSource.initialize();
        console.log('Database connected!');
        app.listen(port);
        console.log(`Server started on port ${port}`);
    } catch (err) {
        console.log(err);
    }
}

connection();