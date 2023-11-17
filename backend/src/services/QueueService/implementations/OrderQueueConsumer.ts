import { Channel, ConsumeMessage } from "amqplib";
import { Order } from "../../../modules/orders/model/Order";
import { IQueueConsumer } from "../IQueueService";
import { OrdersRepository } from "../../../modules/orders/repositories/implementations/OrdersRepository";
import { io } from "../../..";
class OrderQueueConsumer implements IQueueConsumer {
    name: string;
    channel: Channel;

    constructor(name: string, channel: Channel) {
        this.name = name;
        this.channel = channel;
    }

    consumer = () => (msg: ConsumeMessage | null): void => {
        if (msg && this.channel) {
            const order: Order = JSON.parse(msg.content.toString());

            const orderRepository = OrdersRepository.getInstance();

            setTimeout(() => {

                orderRepository.approveOrder(order.id);

                io.emit("orderStatusChange", { orderId: order.id, newStatus: "confirmado" });
                
                this.channel.ack(msg);
            }, 3000);
        }
    }

    async init() {
        await this.channel.assertQueue(this.name);
        await this.channel.consume(this.name, this.consumer())
    }
}

export { OrderQueueConsumer };