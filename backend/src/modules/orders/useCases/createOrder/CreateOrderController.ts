import { Response, Request } from "express";
import { CreateOrderUseCase } from "./CreateOrderUseCase";

class CreateOrderController {
    constructor(private createOrderUseCase: CreateOrderUseCase) {}
    handle(request: Request, response: Response): Response {
        try {
            const {products, userId} = request.body;

            const order = this.createOrderUseCase.execute({
                products,
                userId,
            })

            return response.status(200).json(order);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

export { CreateOrderController };