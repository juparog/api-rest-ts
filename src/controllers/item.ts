import { Request, Response } from "express";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item";
import { handleHttp } from "../utils/error.handle";

const getItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;
    const responseItem = await getCar(id);
    res.json(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM", error);
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const responseItems = await getCars();
    res.json(responseItems);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS", error);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id }, body
    } = req;
    const responseItem = await updateCar(id, body);
    res.json(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM", error);
  }
};

const postItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseItem = await insertCar(body);
    res.json(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_POST_ITEM", error);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id }
    } = req;
    const responseItem = await deleteCar(id);
    res.json(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM", error);
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
