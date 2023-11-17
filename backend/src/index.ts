import express from "express";
import { usersRoutes } from "./routes/users";
import { ordersRoutes } from "./routes/orders";

const app = express();


app.use(express.json());

app.use("/users", usersRoutes);
app.use("/orders", ordersRoutes);

export { app };