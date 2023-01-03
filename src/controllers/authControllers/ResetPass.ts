import { Request, Response } from 'express';
import { User } from '../../entities/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../../database/config';

class ResetPass {
    async execute (req: Request, res: Response) {
        const { token, id } = req.params;
        const { password } = req.body;
        const secret = process.env.JWT_SECRET;

        try {
            const userExists = await AppDataSource.manager.findOneBy(User, {
                id: id,
            })
            
            if (!userExists) {
                return res.status(401).json('User not found in our database!');
            }

            const verifyResetToken = await bcrypt.compare(token, userExists.tokenResetPass);

            if (!verifyResetToken) {
                return res.status(401).json('Link expired, make a new password reset request!');
            }

            const hashedNewPass = bcrypt.hashSync(password, 10);

            await AppDataSource.manager.update(User, id, {
                password: hashedNewPass,
                tokenResetPass: "",
            })

            return res.status(200).json(`Password updated!`);
        } catch (err) {
            return res.status(500).json(err);
        }

    }
}

export default new ResetPass();