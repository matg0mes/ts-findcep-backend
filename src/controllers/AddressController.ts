import { Request, Response } from "express";
import { AddressService } from "../services/AddressService";

class AddressController {
  async find(request: Request, response: Response) {
    try {
      const { state } = request.query;

      const serviceAddress = new AddressService();
      const addresses = await serviceAddress.find({ state });

      return response.json(addresses);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
  async findByCep(request: Request, response: Response) {
    try {
      const { cep } = request.params;

      const serviceAddress = new AddressService();
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
