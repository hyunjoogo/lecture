import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

const handelHome = (req, res) => res.send("Home🏠");
const handelAboutUs = (req, res) => res.send("About Us.");
const handelContact = (req, res) => res.send("Contact.");
const handelProtected = (req, res) => res.send("여기는 / 로 가게 만들꺼야");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handelHome);
app.get("/about-us", handelAboutUs);
app.get("/contact", handelContact);
app.get("/protected", handelProtected);

export default app;
