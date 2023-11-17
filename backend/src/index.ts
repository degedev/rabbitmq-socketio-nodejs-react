import express from "express";
import queue from "./services/queueService";
import { usersRoutes } from "./routes/users";

const app = express();

queue.connect();

app.use(express.json());

app.use("/users", usersRoutes);

export { app };