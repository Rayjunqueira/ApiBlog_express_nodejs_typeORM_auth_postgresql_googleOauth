import { Request, Response } from "express";
import { AppDataSource } from "../../database/config";
import { Post } from "../../entities/Post";

class FindAllPostsController {
    async index(req: Request, res: Response) {

        try {
            const posts = await AppDataSource.manager.find(Post);

            return res.status(200).json(posts);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default new FindAllPostsController();