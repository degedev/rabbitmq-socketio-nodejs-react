import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";


interface IRequest {
    email: string;
  }

class SigninUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({email}: IRequest): User {
        const user = this.usersRepository.findByEmail(email);

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        return user;
    }
}

export { SigninUserUseCase };