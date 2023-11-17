import { IOrdersRepository } from "../../repositories/IOrdersRepository";

interface IRequest {
    userId: string;
    orderId: string;
}

class ShowUserOrderUseCase {
    constructor(private orderRepository: IOrdersRepository) {}

    execute({orderId, userId}: IRequest) {
        const order = this.orderRepository.findByUserAndId(userId, orderId);

        if (!order) {
            throw new Error("Order not found");
        }

        return order;
    }

}

export { ShowUserOrderUseCase };