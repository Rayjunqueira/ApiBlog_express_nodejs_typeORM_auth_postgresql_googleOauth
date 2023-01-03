import { Router } from "express";

import CreatePost from "../controllers/postControllers/CreatePost";
import UpdatePost from "../controllers/postControllers/UpdatePosts";
import FindOnePost from "../controllers/postControllers/FindOnePost";
import FindAllPosts from "../controllers/postControllers/FindAllPosts";

import authMiddleware from "../middlewares/AuthMiddleware";
import AuthAdminMiddleware from "../middlewares/AuthAdminMiddleware";

const router = Router();

router.post('/', authMiddleware, AuthAdminMiddleware, CreatePost.store);
router.put('/:id', authMiddleware, AuthAdminMiddleware, UpdatePost.update);
router.get('/:id', authMiddleware, FindOnePost.index);
router.get('/', authMiddleware, FindAllPosts.index);

export default router;