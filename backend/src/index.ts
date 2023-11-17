import express from "express";
import queue from "./services/queueService";
import { usersRoutes } from "./routes/users";
import { ordersRoutes } from "./routes/orders";

const app = express();

queue.connect();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/orders", ordersRoutes);

export { app };