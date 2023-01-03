import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import authMiddleware from './AuthMiddleware';

  
export default async function authAdminMiddleware(
    req: Request, res: Response, next: NextFunction,
) {
    authMiddleware(req, res, () => {
        if (req.users.isAdmin === true) {
            next();
        } else {
            res.status(403).json("You are not alowed to do that!");
        }
    })
}
