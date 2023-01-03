import { Request, Response } from "express";
import { AppDataSource } from "../../database/config";
import { Post } from "../../entities/Post";

class UpdatePostController {
    async update(req: Request, res: Response) {
        const { user, title, desc } = req.body;

        try {
            await AppDataSource.manager.update(Post, req.params, {
                user: user,
                title: title,
                desc: desc,
            });

            return res.status(200).json('Post updated!');
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default new UpdatePostController();