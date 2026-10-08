import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/ProductsController";

const productsRoutes = Router();
const procutsController = new ProductsController();

productsRoutes.get("/:id", procutsController.index);

// Middleware local
productsRoutes.post("/", myMiddleware, procutsController.create);

export { productsRoutes };
