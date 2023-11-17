import { Response, Request } from "express";
import { SigninUserUseCase } from "./signInUserUseCase";


class SigninUserController {
constructor(private signinUserUseCase: SigninUserUseCase) {}

  handle(request: Request, response: Response): Response {
      try {
        const {email} = request.params;

        const user = this.signinUserUseCase.execute({email});

        return response.status(201).json(user);

      } catch (error) {
        return response.status(400).json({ error: error.message });
      }
  }
}

export { SigninUserController };