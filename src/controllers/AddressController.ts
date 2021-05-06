import { Request, Response } from "express";

class AddressController {
  constructor() {}

  async findByCep(request: Request, response: Response) {
    try {
      const { cep } = request.params;
      console.log(cep);

      return response.json({ message: "Hello World!" });
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { AddressController };
