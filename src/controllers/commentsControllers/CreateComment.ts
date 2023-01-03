import { Request, Response } from "express";
import { Comment } from "../../entities/Comment";
import { AppDataSource } from "../../database/config";

class CreateCommentController {
    async store(req: Request, res: Response) {
        const { post, user, comment } = req.body;

        const createComment = new Comment();
        
        try {
            createComment.post = post;
            createComment.user = user;
            createComment.comment = comment;

            await AppDataSource.manager.save(createComment);

            return res.status(200).json(createComment);
        } catch (err) {
            return res.status(500).json(err);
        }

    }
}

export default new CreateCommentController();