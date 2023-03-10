import { DataSource } from "typeorm";
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: 5433,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: true,
	entities: [`${__dirname}/../entities/*.{ts,js}`],
    migrations: [`${__dirname}/migrations/*.{ts,js}`],
});