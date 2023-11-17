import { Router } from "express";
import { createOrderController } from "../modules/orders/useCases/createOrder";

const ordersRoutes = Router();

ordersRoutes.post("/", (req, res) => createOrderController.handle(req, res));

export { ordersRoutes };