import { Request, Response } from "express";
import { User } from "../../entities/User";
import { AppDataSource } from "../../database/config";

class CreateUserController {
    async store(req: Request, res: Response) {
        const { username, email, password } = req.body;
        const user = new User();
        
        try {
            user.username = username;
            user.email = email;
            user.password = password;

            const userExists = await AppDataSource.manager.findOneBy(User, {
                email: user.email,
            });

            if (userExists) {
                return res.status(409).json('User already exists!');
            } else {
                await AppDataSource.manager.save(user);
            }

            return res.status(200).json(user);
        } catch (err) {
            return res.status(500).json(err);
        }

    }
}

export default new CreateUserController();