import { JwtPayload } from "jsonwebtoken";

const getOrdesByItems = async (userData: string | JwtPayload) => {
  // const responseItems: Car[] = await ItemModel.find({});
  return { 
    message: "Solo lo puede ver una persona con token valido",
    userData
  };
};

export { getOrdesByItems };
