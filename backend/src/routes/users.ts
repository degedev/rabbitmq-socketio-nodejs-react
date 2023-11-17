import { Router } from "express";
import { signinUserController } from "../modules/users/useCases/signInUser";


const usersRoutes = Router();

usersRoutes.get("/:email", (req, res) => signinUserController.handle(req, res));

export { usersRoutes };