import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { z } from "zod";

class ProductsController {
  //**
  // index - GET Para listar vários registros
  // show - GET Para exibir um registro específico
  // create - POST para criar um registro
  // update - PUT para atualizar um registro
  // remove - DELETE para deletar um registro
  //  */

  index(request: Request, response: Response) {
    const { page, limit } = request.query;
    const { id } = request.params;
    response.send(`Página: ${page}, Limite: ${limit} - ID ${id}`);
  }

  show(request: Request, response: Response) {}

  create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z
        .string({ required_error: "Name is required! " })
        .trim()
        .min(6, { message: "Name must be 6 or more characters!" }),
      price: z
        .number({ required_error: "Price is required! " })
        .positive({ message: "Price must be positive" }),
      // .nullish(), // Pra deixar o campo Opcional
    });

    const { name, price } = bodySchema.parse(request.body);

    // if (!name) {
    //   throw new AppError("Nome do produto é obrigatório!", 400);
    // }
    //
    // if (name.trim().length < 6) {
    //   throw new AppError(
    //     "Nome do produto precisa ter pelo menos 6 caracteres!",
    //     400,
    //   );
    // }

    // if (price < 0) {
    //   throw new AppError("Preço do produto não pode ser menor que 0!", 400);
    // }

    // if (!price) {
    //   throw new AppError("Preço e do produto é obrigatório!", 400);
    // }

    response.status(201).json({ name, price, user_id: request.user_id });
  }

  update(request: Request, response: Response) {}

  remove(request: Request, response: Response) {}
}

export { ProductsController };
