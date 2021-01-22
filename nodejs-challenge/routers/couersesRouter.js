import express from "express";
import { courses, newThing, mine } from "../controllers/couersesController";

const couersesRouter = express.Router();

// couerses/~~~

couersesRouter.get("/", courses);
couersesRouter.get("/new", newThing);
couersesRouter.get("/mine", mine);

export default couersesRouter;
