import "../database";

import { createConnection, getCustomRepository } from "typeorm";
import { AddressDTO } from "../parsers/AddressDTO";
import { ViaCepApi } from "../services/apis/ViaCepApi";
import { AddressService } from "../services/AddressService";
import { parseDateToStringDateHour } from "../utils/parseDate";
import { AddressRepository } from "../repositories/AddressRepository";

const exampleValidCep = "03260000";

describe("Endpoints - Endereço", () => {
  beforeAll(() => {
    createConnection();
  });

  it("Deve encontrar um endereço na API - Via CEP", async () => {
    const mockAddress = new AddressDTO({
      cep: "03260-000",
      logradouro: "Avenida Casa Grande",
      complemento: "",
      bairro: "Vila Cunha Bueno",
      localidade: "São Paulo",
      uf: "SP",
      ibge: "3550308",
      gia: "1004",
      ddd: "11",
      siafi: "7107",
    });

    const address = await ViaCepApi.GetInstance().getAddressByCep(
      exampleValidCep
    );

    expect(address).toStrictEqual(mockAddress);
  });

  it("Deve retornar um erro na API - Via CEP", async () => {
    const exampleInvalidCep = "03260001";

    const mockAddress = new AddressDTO({ erro: true });

    const address = await ViaCepApi.GetInstance().getAddressByCep(
      exampleInvalidCep
    );

    expect(address).toStrictEqual(mockAddress);
  });

  it("Deve retornar um endereço ja criado no banco", async () => {
    const addressService = new AddressService();
    const address = await addressService.findByCep(exampleValidCep);

    expect(parseDateToStringDateHour(address.created_at)).not.toEqual(
      new Date()
    );
  });

  it("Deve atualizar o update_at sempre que buscar um cep no banco", async () => {
    const addressService = new AddressService();
    const address = await addressService.findByCep(exampleValidCep);

    const now = parseDateToStringDateHour(new Date());

    expect(parseDateToStringDateHour(address.updated_at)).toEqual(now);
  });

  it("Deve deletar um endereço do banco pelo CEP", async () => {
    const addressRepository = getCustomRepository(AddressRepository);
    await addressRepository.delete({
      zipCode: exampleValidCep,
    });

    const addresStillExists = await addressRepository.findOne({
      zipCode: exampleValidCep,
    });

    expect(addresStillExists).toBeUndefined();
  });
});
