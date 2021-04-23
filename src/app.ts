import "reflect-metadata";
import createConnection from "./database";
createConnection().then(() => { console.log("📦 Success conneted database") });
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import session from "express-session";

import Routes from "./routes";
import authSessionMiddleware from "./middlewares/authSessionMiddleware";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser());
app.use(session({
  name: "code",
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 7200000,
    sameSite: true
  }
}))

app.use(Routes);

export { app }