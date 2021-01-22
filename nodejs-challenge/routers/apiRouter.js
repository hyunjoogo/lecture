import express from "express";
import { api, documentation } from "../controllers/apiController";
import v1Router from "./v1Router";
import v2Router from "./v2Router";

const apiRouter = express.Router();

// api/~~~

apiRouter.get("/", api);
apiRouter.get("/documentation", documentation);
// v1 Router
apiRouter.use("/v1", v1Router);
// v2 Router
apiRouter.use("/v2", v2Router);

export default apiRouter;
