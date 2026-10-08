import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";
import { AppError } from "./utils/AppError";
const PORT = 3333;
const app = express();

app.use(express.json());
app.use(routes);

app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({ message: error.message });
  }

  response.status(500).json({message: error.message})
});

app.listen(PORT, () => console.log("Rodando na porta " + PORT));
