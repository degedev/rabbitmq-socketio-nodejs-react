import client, {Connection, Channel, ConsumeMessage} from 'amqplib'


const sendMessages = (channel: Channel) => {
  for (let i = 0; i < 10; i++) {
    channel.sendToQueue('myQueue', Buffer.from(JSON.stringify({position: i})));
    
  }
}


const consumer = (channel: Channel) => (msg: ConsumeMessage | null): void => {
  if (msg) {
    console.log(JSON.parse(msg.content.toString()));
    channel.ack(msg);

  }
}

const start = async () => {
  const connection: Connection = await client.connect('amqp://username:password@localhost:5672');
  const channel: Channel = await connection.createChannel();
  
  await channel.assertQueue('myQueue');
  
  sendMessages(channel);

  await channel.consume('myQueue', consumer(channel));

}

start();