import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async (newUser: User) => {
  const { email, password } = newUser;

  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREADY_USER";

  const passwordHash = await encrypt(password);
  const responseNewUser = await UserModel.create({
    ...newUser,
    password: passwordHash,
  });
  return responseNewUser;
};

const loginUser = async (userAuth: Auth) => {
  const { email, password } = userAuth;

  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NO_FOUND_USER";

  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(checkIs.email);

  return { token };
};

export { registerNewUser, loginUser };
