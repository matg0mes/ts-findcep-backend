import { Router } from "express";
import { includeRoutePrefix } from "./includeRoutePrefix";

import { Route } from "./types";
import address from "../endpoints/AddressEnpoints";

const router = Router();

export const routes: Route[] = [...includeRoutePrefix(address)];

for (const route of routes) {
  const { path, method, action } = route;

  router[method](path, action);
}

router.get("*", (req, res, next) =>
  res.status(404).json({ message: "RESOURCE_NOT_FOUND" })
);

export { router };
