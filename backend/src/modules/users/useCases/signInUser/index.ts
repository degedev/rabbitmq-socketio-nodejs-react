import { UsersRepository } from "../../repositories/implementations/UsersReposity";
import { SigninUserController } from "./signInUserController";
import { SigninUserUseCase } from "./signInUserUseCase";


const usersRepository = new UsersRepository();
const signInUserUseCase  = new SigninUserUseCase(usersRepository)
const signinUserController = new SigninUserController(signInUserUseCase);

export { signinUserController };