import express, { Request, Response } from "express";
import cors from "cors";
import "reflect-metadata";
import dotenv from "dotenv";

import cartRouter from "./routes/cart";
import orderRouter from "./routes/order";
import userRouter from "./routes/user";
import reviewRouter from "./routes/review";
import productRouter from "./routes/product";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/cart", cartRouter);
app.use("/order", orderRouter);
app.use("/user", userRouter);
app.use("/review", reviewRouter);
app.use("/product", productRouter);

app.listen(port, () => console.log(`Running on port ${port}`));
