import { usersMock } from "../../../../mocks/users";
import { User } from "../../model/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private users: User[] = usersMock;

    private static INSTANCE: UsersRepository;

    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
          UsersRepository.INSTANCE = new UsersRepository();
        }

        return UsersRepository.INSTANCE;
      }

    findByEmail(email: string): User | undefined {
        const searchedUserByEmail = this.users.find((user) => user.email === email);

        if (!searchedUserByEmail) {
            return undefined;
        }

        return searchedUserByEmail;
    }
}

export { UsersRepository };