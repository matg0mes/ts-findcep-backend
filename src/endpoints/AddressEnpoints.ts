import { Route } from "../routes/types";
import { AddressController } from "../controllers/AddressController";

const prefixRoute = "/address";
const addressController = new AddressController();

const routes: Route[] = [
  {
    method: "get",
    path: "/",
    description: "get address",
    action: addressController.find,
  },
  {
    method: "get",
    path: "/:cep",
    description: "Get address by postal code",
    action: addressController.findByCep,
  },
];

export default { prefixRoute, routes };
