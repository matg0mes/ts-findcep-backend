import { getCustomRepository } from "typeorm";
import http from "../../config/http";
import { AddressDTO } from "../../parsers/AddressDTO";

class ViaCepApi {
  private baseUrl = "https://viacep.com.br/ws";

  static instance: ViaCepApi;

  static GetInstance() {
    return ViaCepApi.instance === undefined
      ? new ViaCepApi()
      : ViaCepApi.instance;
  }

  async getAddressByCep(cep: string) {
    try {
      const { data } = await http.get(`${this.baseUrl}/${cep}/json`);

      const address = new AddressDTO(data);

      return address;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export { ViaCepApi };
