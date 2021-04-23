import { NextFunction, Request, Response } from "express";


export default function authSessionMiddleware(req: Request, res: Response, next: NextFunction) {
  //@ts-ignore
  if (!req.session.userId) {
    console.log(req.session);
    return res.status(200).redirect("/");
  }
  //@ts-ignore
  console.log(req.session.userId);
  return next();
}