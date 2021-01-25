import express from "express";
import { edit, remove, v2 } from "../controllers/v2Controller";

const v2Router = express.Router();

// api/v2/~~~

v2Router.get("/", v2);
v2Router.get("/remove", remove);
v2Router.get("/edit", edit);

export default v2Router;
