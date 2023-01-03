import { Router } from "express";

import ForgetPassword from "../controllers/authControllers/ForgotPass";
import ResetPassword from "../controllers/authControllers/ResetPass";

const router = Router();

router.post('/', ForgetPassword.execute);
router.post('/:id/:token', ResetPassword.execute);

export default router;