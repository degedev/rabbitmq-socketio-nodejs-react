import { Order } from "../../model/Order";
import { IOrdersRepository } from "../IOrdersRepository";

class OrdersRepository implements IOrdersRepository {
    private orders: Order[] = [];

    private static INSTANCE: OrdersRepository;

    public static getInstance(): OrdersRepository {
      if (!OrdersRepository.INSTANCE) {
        OrdersRepository.INSTANCE = new OrdersRepository();
      }

      return OrdersRepository.INSTANCE;
    }

    create(order: Order): void {
        this.orders.push(order);
    }

    findByUserAndId(userId: string, orderId: string): Order | undefined {
        return this.orders.find(order => order.user.id === userId && order.id === orderId);
    }

    approveOrder(orderId: string): void {
        this.orders.forEach(order => {
            if (order.id === orderId) {
                order.status = 'confirmado';
            }
        });
    }

    sendOrder(orderId: string): void {
        this.orders.forEach(order => {
            if (order.id === orderId) {
                order.status = 'enviado';
            }
        });
    }

    receiveOrder(orderId: string): void {
        this.orders.forEach(order => {
            if (order.id === orderId) {
                order.status = 'recebido';
            }
        });
    }
}

export { OrdersRepository };