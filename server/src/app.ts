import express, { Request, Response } from "express";
import cors from "cors";
import "reflect-metadata";
import dotenv from "dotenv";

import basketRouter from "./routes/basket";
import orderRouter from "./routes/order";
import userRouter from "./routes/user";
import reviewRouter from "./routes/review";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/basket", basketRouter);
app.use("/order", orderRouter);
app.use("/user", userRouter);
app.use("/review", reviewRouter);

app.listen(port, () => console.log(`Running on port ${port}`));
