import { QueueService } from "../../../../services/queueService";
import { ProductItem } from "../../../products/model/ProductItem";
import { Product } from "../../../products/model/product";
import { ProductsRepository } from "../../../products/repositories/implementations/ProductsRepository";
import { UsersRepository } from "../../../users/repositories/implementations/UsersReposity";
import { Order } from "../../model/Order";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";

interface IRequest {
    userId: string;
    products: {
        id: string;
        quantity: number;
    }[];
}

class CreateOrderUseCase {

    constructor(private orderRepository: IOrdersRepository) {}
    execute(data: IRequest) {
        const productsRepository = ProductsRepository.getInstance();
        const userRepository = UsersRepository.getInstance();

        const productsItems = data.products.map(product => (
            new ProductItem(productsRepository.findById(product.id) as Product, product.quantity)
        ));

        const user = userRepository.findById(data.userId);

        if (!user) {
            throw new Error("Usuário não encontrado");
        }


        const order = new Order(productsItems, user);
        this.orderRepository.create(order);

        QueueService.getInstance().send(order, "orders");

        return order

    }
}

export { CreateOrderUseCase };