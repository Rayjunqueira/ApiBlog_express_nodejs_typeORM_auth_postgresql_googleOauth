import { Request, Response } from "express";
import { AppDataSource } from "../../database/config";
import { Comment } from "../../entities/Comment";

class UpdateCommentController {
    async update(req: Request, res: Response) {
        const { post, user, comment } = req.body;

        try {
            await AppDataSource.manager.update(Comment, req.params, {
                post: post,
                user: user,
                comment: comment,
            });

            return res.status(200).json('Comment updated!');
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

export default new UpdateCommentController();