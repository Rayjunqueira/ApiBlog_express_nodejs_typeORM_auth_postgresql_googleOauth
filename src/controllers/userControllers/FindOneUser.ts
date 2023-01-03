import { Request, Response } from "express";
import { AppDataSource } from "../../database/config";
import { User } from "../../entities/User";

class FindOneUsersController {
    async index(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const user = await AppDataSource.manager.findOneBy(User, {
                id: id,
            });

            return res.status(200).json(user);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default new FindOneUsersController();