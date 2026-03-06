import logger from "../config/logger.config";
import { School } from "../models/school.models";
import { addSchool, getSchoolsusingParameters } from "../repositories/school.repository";

export async function addSchoolService(school: School) {
    try {
        return await addSchool(school);
    } catch (error) {
        logger.error(`Error adding school: ${error}`);
        throw error;
    }
}

export async function getSchoolsusingParametersService(latitude: number, longitude: number) {
    try {
        return await getSchoolsusingParameters(latitude, longitude);
    } catch (error) {
        logger.error(`Error fetching schools: ${error}`);
        throw error;
    }
}