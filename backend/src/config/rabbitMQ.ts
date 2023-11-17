import { Connection, connect, Channel } from "amqplib";
import { OrderQueueConsumer } from "../services/QueueService/implementations/OrderQueueConsumer";
import { QueueService } from "../services/queueService";

class RabbitMQ {
    private static INSTANCE: RabbitMQ;
    private static QueueService: QueueService;
    channel: Channel;

    public static getInstance(): RabbitMQ {
      if (!RabbitMQ.INSTANCE) {
        RabbitMQ.INSTANCE = new RabbitMQ();
      }

      return RabbitMQ.INSTANCE;
    }

    async connect() {
        const connection: Connection = await connect('amqp://username:password@localhost:5672');
        this.channel = await connection.createChannel();

        await new OrderQueueConsumer('orders', this.channel).init();
    }

    public static getQueueService(): QueueService {
        if (!RabbitMQ.QueueService) {
            RabbitMQ.QueueService = new QueueService(RabbitMQ.getInstance().channel);
        }

        return RabbitMQ.QueueService;
    }
}

export { RabbitMQ };