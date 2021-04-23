import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UsuarioRepositories } from "../repositories/UsuarioRepositories";
import { getCustomRepository } from "typeorm";

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}
export default async function authUserMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.sendStatus(401);
  }
  try {
    const token = authorization.replace("Bearer", "").trim();
    try {
      const userRepository = getCustomRepository(UsuarioRepositories);
      const usuario = await userRepository.findOne({ token });
      if (!usuario) {
        return res.sendStatus(401);
      }
      const data = jwt.verify(token, process.env.KEY);
      const { id } = data as TokenPayload;

      req.userId = id;

      return next();
    } catch (error) {
      console.log(error.message);
      return res.sendStatus(500);
    }
  } catch (error) {

    return res.sendStatus(500);
  }
}