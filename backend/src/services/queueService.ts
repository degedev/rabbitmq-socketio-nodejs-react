import {Channel} from 'amqplib'
import { RabbitMQ } from '../config/rabbitMQ';

type QueueName = 'orders';
class QueueService {
    constructor(private channel: Channel) {}

    async send(data: unknown, name: QueueName) {
        if (this.channel) {
            this.channel.sendToQueue(name, Buffer.from(JSON.stringify(data)));

        }
    }

    public static getInstance(): QueueService {
        return RabbitMQ.getQueueService();
        
    }
}

export { QueueService };