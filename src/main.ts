import express from 'express';
import middlewareRoutes from './middleware/middleware';

const app = express();

app.use("/middleware", middlewareRoutes);


app.listen(8081, () => console.log("Server iniciou"));
