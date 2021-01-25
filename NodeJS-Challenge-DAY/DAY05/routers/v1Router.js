import express from "express";
import { buy, refund, v1 } from "../controllers/v1Controller";

const v1Router = express.Router();

// api/v1/~~~

v1Router.get("/", v1);
v1Router.get("/buy", buy);
v1Router.get("/refund", refund);

export default v1Router;
