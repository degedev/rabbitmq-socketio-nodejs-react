import { OrdersRepository } from "../../repositories/implementations/OrdersRepository";
import { CreateOrderController } from "./CreateOrderController";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

const orderRepository = new OrdersRepository();
const createOrderUseCase  = new CreateOrderUseCase(orderRepository)
const createOrderController = new CreateOrderController(createOrderUseCase);

export { createOrderController };