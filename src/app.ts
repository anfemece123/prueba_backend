import express from "express";
import morgan from "morgan";
import cors from "cors";
import UserRoutes from "./routes/user.routes";
import ServiceRoutes from "./routes/service.routes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(UserRoutes);
app.use(ServiceRoutes);
export default app;
