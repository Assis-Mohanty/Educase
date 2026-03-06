import express from 'express';
import { addSchoolController, getSchoolsusingParametersController, } from '../../controllers/schools.controller';
import { validateParams, validateRequestBody } from '../../validators';
import { addSchoolValidator, getSchoolsusingParametersValidator } from '../../validators/school.validator';
const schoolRouter = express.Router();

schoolRouter.post('/addSchool', validateRequestBody(addSchoolValidator), addSchoolController);
schoolRouter.get('/listSchools/:latitude/:longitude', validateParams(getSchoolsusingParametersValidator), getSchoolsusingParametersController);
export default schoolRouter;

