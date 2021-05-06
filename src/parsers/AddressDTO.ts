import { v4 as uuid } from "uuid";

class AddressDTO {
  zipCode: string;

  street: string;

  complement: string;

  neighborhood: string;

  city: string;

  state: string;

  constructor({ cep, logradouro, complemento, bairro, localidade, uf }: any) {
    this.zipCode = cep?.replace(/[^0-9]+/g, "");
    this.street = logradouro;
    this.complement = complemento;
    this.neighborhood = bairro;
    this.city = localidade;
    this.state = uf;
  }
}

export { AddressDTO };
