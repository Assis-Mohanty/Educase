import logger from "../config/logger.config";
import { School } from "../models/school.models";
import { addSchool, getAllSchools} from "../repositories/school.repository";

export async function addSchoolService(school: School) {
    try {
        return await addSchool(school);
    } catch (error) {
        logger.error(`Error adding school: ${error}`);
        throw error;
    }
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371; 
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export async function getSchoolsusingParametersService(latitude: number, longitude: number) {
    try {
        const schools = await getAllSchools();
        const schoolsWithDistance = schools.map((school) => ({
            ...school,
            distance: calculateDistance(latitude, longitude, school.latitude, school.longitude)
        }));
        return schoolsWithDistance.sort((a, b) => a.distance - b.distance);
    } catch (error) {
        logger.error(`Error fetching schools: ${error}`);
        throw error;
    }
}
