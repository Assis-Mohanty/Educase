import { NextFunction, Request, Response } from "express";
import { addSchoolService, getSchoolsusingParametersService } from "../services/school.service";

    export async function addSchoolController(req: Request, res: Response, next: NextFunction) {
    try {
        const school = req.body;
        const result = await addSchoolService(school);
        res.status(200).json({
            message: "School added successfully",
            success: true,
            data: result
        });
    } catch (error) {
        next(error);
    }
}

export async function getSchoolsusingParametersController(req: Request, res: Response, next: NextFunction) {
    try {
        const latitude = parseFloat(req.params.latitude);
        const longitude = parseFloat(req.params.longitude);
        if (isNaN(latitude) || isNaN(longitude)) {
            res.status(400).json({
                message: "Latitude and longitude are required",
                success: false,
                data: null
            });
            return;
        }
        const result = await getSchoolsusingParametersService(latitude, longitude);
        res.status(200).json({
            message: "Schools fetched successfully",
            success: true,
            data: result
        });
    } catch (error) {
        next(error);
    }
}