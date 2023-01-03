import { Request, Response } from "express";
import { AppDataSource } from "../../database/config";
import { Comment } from "../../entities/Comment";

class FindAllCommentsController {
    async index(req: Request, res: Response) {

        try {
            const comments = await AppDataSource.manager.find(Comment);

            return res.status(200).json(comments);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default new FindAllCommentsController();