import { Request, Response, Router } from "express";
import passport from "passport";

import AuthUser from "../controllers/authControllers/CreateAuth";

const router = Router();

router.post('/', AuthUser.store);

router.get('/google', passport.authenticate('google'), (req: Request, res: Response) => {
    return res.status(200).json('ok');
})
router.get('/auth/google/callback', passport.authenticate('google'), (req: Request, res: Response) => {
    return res.status(200).json('ok');
})

export default router;