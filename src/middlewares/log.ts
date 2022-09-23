import { NextFunction, Request, Response } from "express";

const logHttpMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { headers, method, path } = req;
  const userAgent = headers['user-agent'];
  console.log(`${method} Api path[${path}] - user-agent[${userAgent}]`);  
  next();
};

export { logHttpMiddleware };
