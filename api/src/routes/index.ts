import { Router,  Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        isSuccessfull: true,
        message: "api's are working fine"
    });
});

export default router;