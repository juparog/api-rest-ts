import { Response } from "express";
import { ErrorResponse } from "../interfaces/errorResponse.interface";

const handleHttp = (res: Response, type: string, errorRaw?: any) => {
  console.error(errorRaw);
  res.status(500);
  const errorMessage: ErrorResponse = {
    type: type,
    message: errorRaw.message || `${errorRaw}`
  }
  res.json(errorMessage);
};

export { handleHttp };
