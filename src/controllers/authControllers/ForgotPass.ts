import { Request, Response } from 'express';
import { AppDataSource } from '../../database/config';
import { User } from '../../entities/User';
import jwt from 'jsonwebtoken';
import sendEmail from '../../utils/mailer';
import bcrypt from 'bcryptjs';

class ForgotPassword {
    async execute (req: Request, res: Response) {
        const { email } = req.body;
        const secret = process.env.JWT_SECRET as string;

        try {
            const user = await AppDataSource.manager.findOneBy(User, {
                email: email,
            });

            if (!user) {
                return res.status(401).json('User does not exists! ');
            }

            const userId = user?.id;

            const token = jwt.sign({ id: user.id }, secret, {
                expiresIn: process.env.EXPIRES_FORGOTPASS,
            });

            const hashedToken = bcrypt.hashSync(token, 10);

            try {
                await AppDataSource.manager.update(User, userId, {
                    tokenResetPass: hashedToken,
                });         

                sendEmail({
                    from: 'noreply@email.com',
                    to: `${user.email}`,
                    subject: 'Reset your password',
                    text: `Token sending email to reset password account from ${user.email}`,
                    html: `<h2>Token sending email to reset password account from ${user.email}</h2>
                            <h4>${token}</h4>
                            <h4>${user.id}</h4>
                    `,    
                });

                return res.status(200).json('Password recovery email sent to email!');

            } catch (err) {
                return res.status(500).json(err);
            }

        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default new ForgotPassword();