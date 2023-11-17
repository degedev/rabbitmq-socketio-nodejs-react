import { Router } from "express";
import { createOrderController } from "../modules/orders/useCases/createOrder";
import { showOrderController } from "../modules/orders/useCases/showUserOrder";

const ordersRoutes = Router();

ordersRoutes.post("/", (req, res) => createOrderController.handle(req, res));
ordersRoutes.get("/:userId/:orderId", (req, res) => showOrderController.handle(req, res));

export { ordersRoutes };