import { app } from ".";
import { RabbitMQ } from "./config/rabbitMQ";

RabbitMQ.getInstance().connect();

app.listen(3333, () => console.log("Server is running!"));