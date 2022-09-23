import { Car } from "../interfaces/car.interface";
import { ItemModel } from "../models/item";

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getCars = async () => {
  const responseItems: Car[] = await ItemModel.find({});
  return responseItems;
};

const getCar = async (id: string) => {
  const responseItem: Car | null = await ItemModel.findById(id);
  return responseItem;
};

const updateCar = async (id: string, data: Car) => {
  const responseItem: Car | null = await ItemModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return responseItem;
};

const deleteCar = async (id: string) => {
  const responseItem: Car | null = await ItemModel.findByIdAndDelete(id);
  return responseItem;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
