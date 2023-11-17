import client, {Connection, Channel, ConsumeMessage} from 'amqplib'

class QueueService {
    private channel: Channel | null;
    private name: string;

    constructor (name: string) {
        this.name = name
        this.channel = null;
    }

    async connect() {
        const connection: Connection = await client.connect('amqp://username:password@localhost:5672');
        this.channel = await connection.createChannel();
        await this.channel.assertQueue(this.name);
        await this.channel.consume(this.name, this.consumer())
        console.log(`Queue ${this.name} connected!`);
    }

    async send<T>(data: T) {
        if (this.channel) {
            this.channel.sendToQueue(this.name, Buffer.from(JSON.stringify(data)))
        }
    }

    private consumer = () => (msg: ConsumeMessage | null): void => {
        if (msg && this.channel) {
            console.log(JSON.parse(msg.content.toString()));
            this.channel.ack(msg);
        }
    }
}

export default new QueueService("orders");