import { Request, Response } from "express";
import { AdressService } from "../services/AddressService";

class AddressController {
  async findByCep(request: Request, response: Response) {
    try {
      const { cep } = request.params;

      const serviceAddress = new AdressService();
      const address = await serviceAddress.findByCep(cep);

      return response.json(address);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export { AddressController };
