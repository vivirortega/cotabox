import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/errorHandlerMiddleware.js";
import userRouter from "./routes/usersRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(errorHandler);
app.use(userRouter);

export default app;