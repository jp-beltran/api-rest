import { Request, Response } from "express";

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
    const { name, price } = request.body;
    response.status(201).json({ name, price, user_id: request.user_id });
  }

  update(request: Request, response: Response) {}

  remove(request: Request, response: Response) {}
}

export { ProductsController };
