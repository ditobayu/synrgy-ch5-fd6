import { Router } from "express";
import articleRouter from "./articleRouter";

const router = Router();

router.use("/article", articleRouter);

export default router;
