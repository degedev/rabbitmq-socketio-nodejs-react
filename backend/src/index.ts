import express from "express";
import cors from "cors";
import { usersRoutes } from "./routes/users";
import { ordersRoutes } from "./routes/orders";

const app = express();

const allowedOrigin = "http://localhost:3000";

app.use(express.json());
app.use(cors());

app.use("/users", usersRoutes);
app.use("/orders", ordersRoutes);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

export { app };