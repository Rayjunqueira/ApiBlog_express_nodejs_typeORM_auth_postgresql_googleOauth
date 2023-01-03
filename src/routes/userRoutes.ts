import { Router } from "express";

import CreateUser from "../controllers/userControllers/CreateUser";
import FindAllUsers from "../controllers/userControllers/FindAllUsers";
import FindOneUser from "../controllers/userControllers/FindOneUser";
import UpdateUser from "../controllers/userControllers/UpdateUser";

const router = Router();

router.post('/', CreateUser.store);
router.get('/', FindAllUsers.index);
router.get('/:id', FindOneUser.index);
router.put('/:id', UpdateUser.update);

export default router;