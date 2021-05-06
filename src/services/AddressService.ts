import reduceObject from "../utils/reduceObject";
import { getCustomRepository, Repository } from "typeorm";
import { Address } from "../entities/Address";
import { AddressRepository } from "../repositories/AddressRepository";
import { ViaCepApi } from "./apis/ViaCepApi";

class AddressService {
  addressRepository: Repository<Address>;

  constructor() {
    this.addressRepository = getCustomRepository(AddressRepository);
  }

  async find(filter) {
    const filterAddress = reduceObject(filter);
    const addresses = await this.addressRepository.find(filterAddress);

    return addresses;
  }
  async findByCep(cep) {
    const addressExists = await this.addressRepository.findOne({
      zipCode: cep,
    });

    if (addressExists) {
      addressExists.updated_at = new Date();
      await this.addressRepository.save(addressExists);
      return addressExists;
    }

    const addressViaCep = await ViaCepApi.GetInstance().getAddressByCep(cep);

    const address = await this.addressRepository.create(addressViaCep);
    await this.addressRepository.save(address);

    return address;
  }
}

export { AddressService };
