import { Response, Request } from "express";
import { ShowUserOrderUseCase } from "./ShowUserOrderUseCase";

class ShowUserOrderController {

    constructor(private showOrderUseCase: ShowUserOrderUseCase) {}

    handle(request: Request, response: Response): Response {
        try {
            const { userId, orderId } = request.params;

            const order = this.showOrderUseCase.execute({
                userId,
                orderId
            });

            return response.status(200).json(order);

        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

export { ShowUserOrderController };