import express from "express";
import cors from "cors";
import middlewareRoutes from "./middleware/middleware";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/middleware", middlewareRoutes);

app.listen(8081, () => console.log("Server iniciou"));
