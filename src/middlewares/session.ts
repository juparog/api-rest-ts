import { NextFunction, Response } from "express";
import { RequestExt } from "../interfaces/requestExt.interface";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const { headers } = req;
    const jwtByUser = headers['authorization'] || '';
    const jwt = jwtByUser.split(' ').pop();
    const isUser = verifyToken(`${jwt}`) as { id: string };
    if(!isUser) throw new Error('Token invalid');
    req.user = isUser ;
    next();
  } catch (error) {
    res.status(401);
    res.send('SESSION_NO_VALID');
  }
};

export { checkJwt };
