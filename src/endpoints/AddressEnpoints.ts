import { Route } from "../routes/types";
import { AddressController } from "../controllers/AddressController";

const prefixRoute = "/address";
const addressController = new AddressController();

const routes: Route[] = [
  {
    method: "get",
    path: "/:cep",
    description: "Offer porto card",
    action: addressController.findByCep,
  },
];

export default { prefixRoute, routes };
