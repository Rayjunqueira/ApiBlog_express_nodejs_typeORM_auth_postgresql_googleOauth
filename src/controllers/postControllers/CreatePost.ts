import { Request, Response } from "express";
import { Post } from "../../entities/Post";
import { AppDataSource } from "../../database/config";

class CreatePostController {
    async store(req: Request, res: Response) {
        const { user, title, img, desc } = req.body;
        const post = new Post();
        
        try {
            post.user = user;
            post.title = title;
            post.img = img;
            post.desc = desc;

            await AppDataSource.manager.save(post);

            return res.status(200).json(post);
        } catch (err) {
            return res.status(500).json(err);
        }

    }
}

export default new CreatePostController();