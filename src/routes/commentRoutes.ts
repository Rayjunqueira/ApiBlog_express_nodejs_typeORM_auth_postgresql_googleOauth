import { Router } from "express";

import CreateComment from "../controllers/commentsControllers/CreateComment";
import FindAllComments from "../controllers/commentsControllers/FindAllComments";
import FindOneComment from "../controllers/commentsControllers/FindOneComment";
import UpdateComment from "../controllers/commentsControllers/UpdateComment";

import authMiddleware from "../middlewares/AuthMiddleware";

const router = Router();

router.post('/', authMiddleware, CreateComment.store);
router.get('/', authMiddleware, FindAllComments.index);
router.get('/:id', authMiddleware, FindOneComment.index);
router.put('/:id', authMiddleware, UpdateComment.update);

export default router;