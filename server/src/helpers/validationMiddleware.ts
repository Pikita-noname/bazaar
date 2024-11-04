import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";

export function validationMiddleware<T extends object>(
  dtoClass: new (...args: Partial<T[]>) => T
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoObject = new dtoClass(req.body);
    const errors = await validate(dtoObject);

    if (errors.length > 0) {
      const formattedErrors = errors.map((err) => ({
        property: err.property,
        constraints: err.constraints,
      }));
      res.status(400).json({ errors: formattedErrors });
    } else {
      next();
    }
  };
}
