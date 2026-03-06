import connectDB from "../config/connectDB";
import logger from "../config/logger.config";
import { School } from "../models/school.models";

export async function addSchool(school: School) {
    const connection = await connectDB();
    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    const values = [school.name, school.address, school.latitude, school.longitude];
    const [result] = await connection.execute(query, values);
    logger.info(`school added successfully: ${result}`);
    return result;
}

export async function getSchoolsusingParameters(latitude: number, longitude: number ) {
    const connection = await connectDB();
    const query = 'SELECT * FROM schools WHERE latitude = ? AND longitude = ?';
    const values = [latitude, longitude];
    const [result] = await connection.execute(query, values);
    logger.info(`schools fetched successfully: ${result}`);
    return result;
}

