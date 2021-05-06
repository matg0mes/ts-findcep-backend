import { env as development } from "./development";

const ENV = {
  development,
};

export default ENV[process.env.EXPRESS_APP_STAGE] || development;
