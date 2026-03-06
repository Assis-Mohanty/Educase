import mysql from 'mysql2/promise';
import { serverConfig } from './index';
import logger from './logger.config';

const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: serverConfig.DB_HOST,
            user: serverConfig.DB_USER,
            password: serverConfig.DB_PASSWORD,
            database: serverConfig.DB_NAME
        });
        logger.info(`Connected to MySQL database: ${serverConfig.DB_NAME}`);
        return connection;
    } catch (error) {
        logger.error(`Error connecting to MySQL database: ${error}`);
        throw error;
    }
}

export default connectDB;