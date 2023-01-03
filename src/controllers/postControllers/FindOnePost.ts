import { Request, Response } from "express";
import { AppDataSource } from "../../database/config";
import { Post } from "../../entities/Post";

class FindOnePostsController {
    async index(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const post = await AppDataSource.manager.findOneBy(Post, {
                id: id,
            });

            return res.status(200).json(post);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default new FindOnePostsController();