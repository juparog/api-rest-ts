import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";
import { handleHttp } from "../utils/error.handle";

const register = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await registerNewUser(body);
    res.json(responseUser);
  } catch (error) {
    handleHttp(res, "ERROR_REGISTER_USER", error);
  }
};

const login = async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body;
    const responseLogin = await loginUser({ email, password });
    if (responseLogin === 'PASSWORD_INCORRECT') res.status(403);
    res.json(responseLogin);
  } catch (error) {
    handleHttp(res, "ERROR_LOGIN_USER", error);
  }
};

export { register, login };
