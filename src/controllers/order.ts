import { Response } from "express";
import { RequestExt } from "../interfaces/requestExt.interface";
import { getOrdesByItems } from "../services/order";
import { handleHttp } from "../utils/error.handle";


const getOrders = async (req: RequestExt, res: Response) => {
  try {
    const responseItems = await getOrdesByItems(req.user || '');
    res.json(responseItems);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS", error);
  }
};

export { getOrders };
