import { getCustomRepository } from "typeorm";
import { AddressRepository } from "../repositories/AddressRepository";
import { ViaCepApi } from "./apis/ViaCepApi";

class AdressService {
  async findByCep(cep) {
    const addressRepository = getCustomRepository(AddressRepository);

    const addressExists = await addressRepository.findOne({ zipCode: cep });

    if (addressExists) {
      addressExists.updated_at = new Date();
      await addressRepository.save(addressExists);
      return addressExists;
    }

    const addressViaCep = await ViaCepApi.GetInstance().getAddressByCep(cep);

    const address = await addressRepository.create(addressViaCep);
    await addressRepository.save(address);

    return address;
  }
}

export { AdressService };
