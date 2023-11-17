import { ConsumeMessage } from "amqplib";

interface IQueueConsumer {
    consumer(): (msg: ConsumeMessage | null) =>  void;
    init(): Promise<void>;
}

export { IQueueConsumer };