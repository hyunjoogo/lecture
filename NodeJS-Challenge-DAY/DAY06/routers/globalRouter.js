import express from "express";
import { home, login, photos, profile } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/login", login);
globalRouter.get("/photos", photos);
globalRouter.get("/profile", profile);

export default globalRouter;
