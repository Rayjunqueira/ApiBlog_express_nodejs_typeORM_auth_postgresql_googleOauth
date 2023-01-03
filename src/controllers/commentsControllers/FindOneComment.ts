import { Request, Response } from "express";
import { AppDataSource } from "../../database/config";
import { Comment } from "../../entities/Comment";

class FindOneCommentController {
    async index(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const comment = await AppDataSource.manager.findOneBy(Comment, {
                id: id,
            });

            return res.status(200).json(comment);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default new FindOneCommentController();