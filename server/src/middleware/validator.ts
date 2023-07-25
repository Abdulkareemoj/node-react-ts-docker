import { AnyObjectSchema } from "yup";
import {Request, Response, NextFunction } from "express";


const validateResource = (resourceSchema: AnyObjectSchema)=>async (
    req: Request, res: Response, next: NextFunction
) => {
    try {
        await resourceSchema.validate({
            body: req.body,
            query: req.query,
            params: req.params
        });
    } catch (e) {
        return res.sendStatus(400)
    }
};

export default validateResource;

