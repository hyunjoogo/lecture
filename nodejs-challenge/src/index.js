"use strict";

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import movieRouter from "./movieRouter";
import { localsMiddleware } from "../middlewares";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extened: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use("/", movieRouter);

export default app;