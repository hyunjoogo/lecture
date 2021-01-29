"use strict";

import express from "express";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import movieRouter from "./movieRouter";
import { localsMiddleware } from "../middlewares";

const app = express();

app.use(helmet());
app.set("view engine", "pug"); // 무슨 파일 기준일까?
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extened: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use("/", movieRouter);

export default app;
