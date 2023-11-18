import {  serverHttp } from ".";
import "./websockets";
import { RabbitMQ } from "./config/rabbitMQ";

RabbitMQ.getInstance().connect();

serverHttp.listen(3333, () => console.log("Server is running!"));