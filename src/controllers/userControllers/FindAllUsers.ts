import { Request, Response } from "express";
import { AppDataSource } from "../../database/config";
import { User } from "../../entities/User";

class FindAllUsersController {
    async index(req: Request, res: Response) {

        try {
            const users = await AppDataSource.manager.find(User);

            return res.status(200).json(users);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default new FindAllUsersController();